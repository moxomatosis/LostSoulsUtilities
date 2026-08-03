/**
 * Lost Souls MUD - Affiliation Compatibility Planner
 * Application Logic & Compatibility Engine
 */

import racesById from './races.js';

document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to load button or input field for character name
    const loadButton = document.getElementById('load-button');
    if (loadButton) {
        loadButton.addEventListener('click', () => {
            const characterName = prompt("Enter the character name to load:");
            if (characterName) {
                loadProfile(characterName);
            }
        });
    }

    // Optionally, add a text input field for loading profiles
    const loadInput = document.getElementById('load-input');
    if (loadInput) {
        loadInput.addEventListener('input', (e) => {
            if (e.key === 'Enter') {
                loadProfile(e.target.value);
            }
        });
    }

    // -------------------------------------------------------------
    // 1. STATE MANAGEMENT
    // -------------------------------------------------------------
    const state = {
        selectedGuild: null,             // String: Guild ID or null
        selectedAssociations: new Set(),   // Set of Strings: Selected association IDs
        selectedRace: 'Unspecified',     // String: Selected character race (ID)
        selectedGender: 'Unspecified',   // String: Selected character gender
        characterName: '',               // String: Character's name
        guilds: [],                      // List of group objects representing guilds
        associations: [],                // List of group objects representing associations
        allTags: [],                     // List of all tag names
        tagsMeta: {},                    // Tag compatibility metadata
        groupsMap: {}                    // Map of groupID -> groupObject
    };

    // Initialize data from global database (loaded in data.js)
    if (typeof LOST_SOULS_DATA === 'undefined') {
        console.error("Database (data.js) could not be loaded!");
        return;
    }

    state.tagsMeta = LOST_SOULS_DATA.tags;
    state.allTags = Object.keys(LOST_SOULS_DATA.tags).sort();

    // Categorize groups into guilds and associations
    const groupsList = Object.values(LOST_SOULS_DATA.groups);
    state.groupsMap = LOST_SOULS_DATA.groups;

    groupsList.forEach(group => {
        if (group.type === 'guild') {
            state.guilds.push(group);
        } else {
            state.associations.push(group);
        }
    });

    // Sort groups alphabetically
    state.guilds.sort((a, b) => a.name.localeCompare(b.name));
    state.associations.sort((a, b) => a.name.localeCompare(b.name));

    // Helper to construct wiki URL from name
    function getWikiUrl(name) {
        if (!name) return '#';
        const safeName = name.replace(/ /g, '_');
        return `https://wiki.lostsouls.org/${encodeURIComponent(safeName)}`;
    }

    // -------------------------------------------------------------
    // 2. COMPATIBILITY ENGINE
    // -------------------------------------------------------------
    function validateCompatibility() {
        const conflicts = [];

        // Build list of all active selected groups
        const activeGroups = [];
        if (state.selectedGuild) {
            const guildObj = state.groupsMap[state.selectedGuild];
            if (guildObj) activeGroups.push(guildObj);
        }
        state.selectedAssociations.forEach(assocId => {
            const assocObj = state.groupsMap[assocId];
            if (assocObj) activeGroups.push(assocObj);
        });

        if (activeGroups.length === 0) {
            return conflicts;
        }

        // Tag Sources Map to track which group contributed which tag
        // tagSources[tag] = [groupName, groupName, ...]
        const tagSources = {};
        activeGroups.forEach(g => {
            g.tags.forEach(t => {
                if (!tagSources[t]) tagSources[t] = [];
                tagSources[t].push(g.name);
            });
        });

        const activeTags = Object.keys(tagSources);

        // --- RULE 1: Tag-to-Tag Incompatibilities ---
        // Compare every pair of active tags
        for (let i = 0; i < activeTags.length; i++) {
            for (let j = i + 1; j < activeTags.length; j++) {
                const tagA = activeTags[i];
                const tagB = activeTags[j];

                // Skip if both tags come from the same group
                const sourcesA = tagSources[tagA];
                const sourcesB = tagSources[tagB];
                if (sourcesA.length === 1 && sourcesB.length === 1 && sourcesA[0] === sourcesB[0]) {
                    continue;
                }

                const tagACompat = state.tagsMeta[tagA] || [];
                if (tagACompat.includes(tagB)) {
                    // Conflict found
                    const sourcesA = tagSources[tagA].map(n => `<strong>${n}</strong>`).join(', ');
                    const sourcesB = tagSources[tagB].map(n => `<strong>${n}</strong>`).join(', ');

                    conflicts.push({
                        type: 'tag_tag',
                        title: `Tag Conflict: ${tagA} & ${tagB}`,
                        desc: `Tag <strong>${tagA}</strong> (from ${sourcesA}) is incompatible with tag <strong>${tagB}</strong> (from ${sourcesB}).`
                    });
                }
            }
        }

        // --- RULE 2: Group vs Tag Preclusions ---
        // For each active group, check if any of its precluded tags are active in other groups
        activeGroups.forEach(g => {
            if (g.incompat_tags && g.incompat_tags.length > 0) {
                g.incompat_tags.forEach(precludedTag => {
                    if (tagSources[precludedTag]) {
                        // Check if the precluded tag is contributed by OTHER groups (not this one itself)
                        const foreignSources = tagSources[precludedTag].filter(name => name !== g.name);
                        if (foreignSources.length > 0) {
                            conflicts.push({
                                type: 'group_tag',
                                title: `${g.name} Tag Preclusion`,
                                desc: `<strong>${g.name}</strong> cannot be joined because you have the tag <strong>${precludedTag}</strong> (contributed by: ${foreignSources.map(n => `<strong>${n}</strong>`).join(', ')}).`
                            });
                        }
                    }
                });
            }
        });

        // --- RULE 3: Group vs Group Preclusions ---
        // For each active group, check if it directly excludes any other selected group
        activeGroups.forEach(g => {
            if (g.incompat_groups && g.incompat_groups.length > 0) {
                g.incompat_groups.forEach(precludedGroupName => {
                    const isPrecludedGuildSelected = state.selectedGuild === precludedGroupName;
                    const isPrecludedAssocSelected = state.selectedAssociations.has(precludedGroupName);

                    if (isPrecludedGuildSelected || isPrecludedAssocSelected) {
                        conflicts.push({
                            type: 'group_group',
                            title: `Direct Outlier Conflict: ${g.name} & ${precludedGroupName}`,
                            desc: `<strong>${g.name}</strong> is directly incompatible with <strong>${precludedGroupName}</strong>, bypassing general tag rules.`
                        });
                    }
                });
            }
        });

        // --- RULE 4: Race Restrictions ---
        activeGroups.forEach(g => {
            if (state.selectedRace !== 'Unspecified') {
                if (g.allowed_races && g.allowed_races.length > 0) {
                    const allowedRaceNames = g.allowed_races.map(raceId => racesById[raceId].name);
                    if (!allowedRaceNames.includes(state.selectedRace)) {
                        conflicts.push({
                            type: 'group_race',
                            title: `${g.name} Race Conflict`,
                            desc: `Tag <strong>${tagA}</strong> (from ${sourcesA}) is incompatible with tag <strong>${tagB}</strong> (from ${sourcesB}).`
                        });
                    }
                }
                if (g.excluded_races && g.excluded_races.length > 0) {
                    const excludedRaceNames = g.excluded_races.map(raceId => racesById[raceId].name);
                    if (excludedRaceNames.includes(state.selectedRace)) {
                        conflicts.push({
                            type: 'group_race',
                            title: `${g.name} Race Exclusion`,
                            desc: `<strong>${g.name}</strong> explicitly excludes these races: ${excludedRaceNames.join(', ')}. Your race is <strong>${racesById[state.selectedRace].name}</strong>.`
                        });
                    }
                }
            }
        });

        // --- RULE 5: Gender Restrictions ---
        activeGroups.forEach(g => {
            if (g.allowed_genders && g.allowed_genders.length > 0) {
                if (!g.allowed_genders.includes(state.selectedGender)) {
                    conflicts.push({
                        type: 'group_gender',
                        title: `${g.name} Gender Conflict`,
                        desc: `<strong>${g.name}</strong> only allows these genders: ${g.allowed_genders.join(', ')}. Your gender is <strong>${state.selectedGender}</strong>.`
                    });
                }
            }
        });

        return conflicts;
    }

    // -------------------------------------------------------------
    // 3. UI RENDERING & BINDINGS
    // -------------------------------------------------------------

    // Tab Switching Controller
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetSection = document.getElementById(targetTab);
            if (targetSection) targetSection.classList.add('active');
        });
    });

    // Populate Guild Selection List
    const guildListContainer = document.getElementById('guild-select-list');

    function renderGuildList(filterText = '') {
        guildListContainer.innerHTML = '';
        const search = filterText.toLowerCase();

        // Add "None" option at the top
        const noneItem = document.createElement('div');
        noneItem.className = `guild-item ${state.selectedGuild === null ? 'selected' : ''}`;
        noneItem.setAttribute('role', 'option');
        noneItem.innerHTML = '<span><em>No Guild (Unaffiliated)</em></span>';
        noneItem.addEventListener('click', () => selectGuild(null));
        guildListContainer.appendChild(noneItem);

        state.guilds.forEach(g => {
            if (search && !g.name.toLowerCase().includes(search)) {
                return; // filter out
            }

            const item = document.createElement('div');
            item.className = `guild-item ${state.selectedGuild === g.id ? 'selected' : ''}`;
            item.setAttribute('role', 'option');

            // Build item description with tags and wiki link
            let tagsHtml = g.tags.map(t => `<span class="tag-badge tag-${t.toLowerCase()}">${t}</span>`).join(' ');

            item.innerHTML = `
                <div class="group-info-col">
                    <span class="group-name-row">
                        ${g.name}
                        <a href="${getWikiUrl(g.name)}" target="_blank" class="wiki-link" title="View Wiki Page">📖</a>
                    </span>
                    <div class="group-tags">${tagsHtml}</div>
                </div>
            `;

            // Stop click propagation on the wiki link so it doesn't trigger selection
            const wikiLink = item.querySelector('.wiki-link');
            if (wikiLink) {
                wikiLink.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
            }

            item.addEventListener('click', () => selectGuild(g.id));
            guildListContainer.appendChild(item);
        });
    }

    // Helper to simulate compatibility for a single candidate association
    function testCompatibilityWithCandidate(candidateId) {
        const activeGroups = [];
        if (state.selectedGuild) {
            const guildObj = state.groupsMap[state.selectedGuild];
            if (guildObj) activeGroups.push(guildObj);
        }
        state.selectedAssociations.forEach(assocId => {
            const assocObj = state.groupsMap[assocId];
            if (assocObj) activeGroups.push(assocObj);
        });

        // Add candidate if it's not already in the active list
        if (!state.selectedAssociations.has(candidateId)) {
            const candObj = state.groupsMap[candidateId];
            if (candObj) activeGroups.push(candObj);
        }

        if (activeGroups.length === 0) {
            return [];
        }

        const conflicts = [];
        const tagSources = {};
        activeGroups.forEach(g => {
            g.tags.forEach(t => {
                if (!tagSources[t]) tagSources[t] = [];
                tagSources[t].push(g.name);
            });
        });

        const activeTags = Object.keys(tagSources);

        // 1. Tag-to-Tag Incompatibilities
        for (let i = 0; i < activeTags.length; i++) {
            for (let j = i + 1; j < activeTags.length; j++) {
                const tagA = activeTags[i];
                const tagB = activeTags[j];

                // Skip if both tags come from the same group
                const sourcesA = tagSources[tagA];
                const sourcesB = tagSources[tagB];
                if (sourcesA.length === 1 && sourcesB.length === 1 && sourcesA[0] === sourcesB[0]) {
                    continue;
                }

                const tagACompat = state.tagsMeta[tagA] || [];
                if (tagACompat.includes(tagB)) {
                    conflicts.push({
                        type: 'tag_tag',
                        reason: `Tag Conflict (${tagA} & ${tagB}) with ${sourcesA}`
                    });
                }
            }
        }

        // 2. Group vs Tag Preclusions
        activeGroups.forEach(g => {
            if (g.incompat_tags && g.incompat_tags.length > 0) {
                g.incompat_tags.forEach(precludedTag => {
                    if (tagSources[precludedTag]) {
                        const foreignSources = tagSources[precludedTag].filter(name => name !== g.name);
                        if (foreignSources.length > 0) {
                            conflicts.push({
                                type: 'group_tag',
                                reason: `Precluded tag "${precludedTag}" from ${foreignSources.join(', ')}`
                            });
                        }
                    }
                });
            }
        });

        // 3. Group vs Group Preclusions
        activeGroups.forEach(g => {
            if (g.incompat_groups && g.incompat_groups.length > 0) {
                g.incompat_groups.forEach(precludedGroupName => {
                    const isSelected = state.selectedGuild === precludedGroupName || state.selectedAssociations.has(precludedGroupName);
                    if (isSelected) {
                        conflicts.push({
                            type: 'group_group',
                            reason: `Direct conflict with ${precludedGroupName}`
                        });
                    }
                });
            }
        });

        // 4. Race Restrictions
        activeGroups.forEach(g => {
            if (state.selectedRace !== 'Unspecified') {
                if (g.allowed_races && g.allowed_races.length > 0) {
                    const allowedRaceNames = g.allowed_races.map(raceId => racesById[raceId].name);
                    if (!allowedRaceNames.includes(state.selectedRace)) {
                        conflicts.push({
                            type: 'group_race',
                            reason: `Allowed races: ${allowedRaceNames.join(', ')}. Your race is ${racesById[state.selectedRace].name}`
                        });
                    }
                }
                if (g.excluded_races && g.excluded_races.length > 0) {
                    const excludedRaceNames = g.excluded_races.map(raceId => racesById[raceId].name);
                    if (excludedRaceNames.includes(state.selectedRace)) {
                        conflicts.push({
                            type: 'group_race',
                            reason: `Excluded races: ${excludedRaceNames.join(', ')}. Your race is ${racesById[state.selectedRace].name}`
                        });
                    }
                }
            }
        });

        // 5. Gender Restrictions
        activeGroups.forEach(g => {
            if (g.allowed_genders && g.allowed_genders.length > 0) {
                if (!g.allowed_genders.includes(state.selectedGender)) {
                    conflicts.push({
                        type: 'group_gender',
                        reason: `Allowed genders: ${g.allowed_genders.join(', ')}. Your gender is ${state.selectedGender}`
                    });
                }
            }
        });

        return conflicts;
    }

    // Populate Association Checklist
    const assocListContainer = document.getElementById('assoc-checkbox-list');

    function renderAssociationList(filterText = '') {
        assocListContainer.innerHTML = '';
        const search = filterText.toLowerCase();

        // Map associations to their status
        const processed = state.associations.map(a => {
            const isChecked = state.selectedAssociations.has(a.id);
            const conflicts = isChecked ? [] : testCompatibilityWithCandidate(a.id);
            const isCompatible = conflicts.length === 0;
            return {
                assoc: a,
                isChecked,
                isCompatible,
                conflicts
            };
        });

        // Filter by search text
        const filtered = processed.filter(p => {
            return !search || p.assoc.name.toLowerCase().includes(search);
        });

        // Sort: checked first, then compatible, then incompatible, then alphabetical
        filtered.sort((x, y) => {
            if (x.isChecked && !y.isChecked) return -1;
            if (!x.isChecked && y.isChecked) return 1;
            if (x.isCompatible && !y.isCompatible) return -1;
            if (!x.isCompatible && y.isCompatible) return 1;
            return x.assoc.name.localeCompare(y.assoc.name);
        });

        filtered.forEach(p => {
            const a = p.assoc;
            const isChecked = p.isChecked;
            const isCompatible = p.isCompatible;

            const item = document.createElement('label');
            item.className = `association-item ${isChecked ? 'selected' : ''} ${!isCompatible ? 'incompatible-item' : ''}`;

            let tagsHtml = a.tags.map(t => `<span class="tag-badge tag-${t.toLowerCase()}">${t}</span>`).join(' ');

            let conflictHtml = '';
            if (!isCompatible && p.conflicts.length > 0) {
                const reasonsList = p.conflicts.map(c => c.reason).join(', ');
                conflictHtml = `<div class="association-conflict-reason">Conflicts: ${reasonsList}</div>`;
            }

            item.innerHTML = `
                <input type="checkbox" data-name="${a.name}" ${isChecked ? 'checked' : ''}>
                <div class="group-info-col">
                    <span class="group-name-row">
                        ${a.name}
                        <a href="${getWikiUrl(a.name)}" target="_blank" class="wiki-link" title="View Wiki Page">📖</a>
                    </span>
                    <div class="group-tags">${tagsHtml}</div>
                </div>
            `;

            // Stop click propagation on the wiki link so it doesn't trigger selection
            const wikiLink = item.querySelector('.wiki-link');
            if (wikiLink) {
                wikiLink.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
            }

            // Toggle checkbox click handler
            const checkbox = item.querySelector('input');
            checkbox.addEventListener('change', (e) => {
                toggleAssociation(a.id, e.target.checked);
            });

            assocListContainer.appendChild(item);
        });
    }

    // Handle Guild Selection state
    function selectGuild(guildId) {
        state.selectedGuild = guildId;
        renderGuildList(document.getElementById('guild-search').value);
        renderAssociationList(document.getElementById('assoc-search').value);
        updateCheckerResults();
    }

    // Handle Association toggle state
    function toggleAssociation(assocId, isChecked) {
        if (isChecked) {
            state.selectedAssociations.add(assocId);
        } else {
            state.selectedAssociations.delete(assocId);
        }
        renderAssociationList(document.getElementById('assoc-search').value);
        updateCheckerResults();
    }

    // Update Checker Results panel (Status Banner, Chips, Conflict alerts)
    const statusHero = document.getElementById('status-hero-banner');
    const statusHeroText = document.getElementById('status-hero-text');
    const statusHeroDesc = document.getElementById('status-hero-desc');
    const selectedChipsContainer = document.getElementById('selected-chips-container');
    const conflictsListContainer = document.getElementById('conflicts-list-container');
    const activeTagsContainer = document.getElementById('active-tags-container');
    const activeTagsList = document.getElementById('active-tags-list');

    function updateCheckerResults() {
        // 1. Render selected items as chips
        selectedChipsContainer.innerHTML = '';

        let totalSelected = 0;

        if (state.selectedGuild) {
            totalSelected++;
            const chip = document.createElement('div');
            chip.className = 'chip chip-guild';
            chip.innerHTML = `
                <span>🛡️ Guild: <strong>${state.groupsMap[state.selectedGuild].name}</strong> <a href="${getWikiUrl(state.groupsMap[state.selectedGuild].name)}" target="_blank" class="wiki-link-chip" title="View Wiki Page">📖</a></span>
                <span class="chip-remove" title="Deselect Guild">&times;</span>
            `;

            // Prevent deselecting the guild when clicking the wiki link
            const wikiLink = chip.querySelector('.wiki-link-chip');
            if (wikiLink) {
                wikiLink.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
            }

            chip.querySelector('.chip-remove').addEventListener('click', () => selectGuild(null));
            selectedChipsContainer.appendChild(chip);
        }

        state.selectedAssociations.forEach(id => {
            totalSelected++;
            const assoc = state.groupsMap[id];
            const chip = document.createElement('div');
            chip.className = 'chip chip-association';
            chip.innerHTML = `
                <span>🤝 ${assoc.name} <a href="${getWikiUrl(assoc.name)}" target="_blank" class="wiki-link-chip" title="View Wiki Page">📖</a></span>
                <span class="chip-remove" title="Deselect Association">&times;</span>
            `;

            // Prevent deselecting the association when clicking the wiki link
            const wikiLink = chip.querySelector('.wiki-link-chip');
            if (wikiLink) {
                wikiLink.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
            }

            chip.querySelector('.chip-remove').addEventListener('click', () => toggleAssociation(id, false));
            selectedChipsContainer.appendChild(chip);
        });

        // If nothing selected, show empty state
        if (totalSelected === 0) {
            statusHero.className = 'status-hero empty';
            statusHeroText.textContent = 'Empty Profile';
            statusHeroDesc.textContent = 'Select a guild or association to analyze compatibility.';

            conflictsListContainer.innerHTML = `
                <div class="empty-state-message">
                    <span>No groups selected. Add affiliations in the left panel to test compatibility.</span>
                </div>
            `;
            activeTagsContainer.style.display = 'none';
            return;
        }

        // Render possessed tags summary
        const activeGroups = [];
        if (state.selectedGuild) {
            const guildObj = state.groupsMap[state.selectedGuild];
            if (guildObj) activeGroups.push(guildObj);
        }
        state.selectedAssociations.forEach(id => {
            const assocObj = state.groupsMap[id];
            if (assocObj) activeGroups.push(assocObj);
        });

        const tagSources = {};
        activeGroups.forEach(g => {
            g.tags.forEach(t => {
                if (!tagSources[t]) tagSources[t] = [];
                tagSources[t].push(g.name);
            });
        });

        const activeTags = Object.keys(tagSources).sort();

        if (activeTags.length > 0) {
            activeTagsContainer.style.display = 'block';
            activeTagsList.innerHTML = '';
            activeTags.forEach(tag => {
                const badge = document.createElement('span');
                badge.className = `tag-badge tag-${tag.toLowerCase()}`;
                badge.textContent = tag;
                badge.title = `Contributed by: ${tagSources[tag].join(', ')}`;
                activeTagsList.appendChild(badge);
            });
        } else {
            activeTagsContainer.style.display = 'none';
        }

        // 2. Validate compatibility
        const conflicts = validateCompatibility();

        if (conflicts.length === 0) {
            // COMPATIBLE!
            statusHero.className = 'status-hero compatible';
            statusHeroText.textContent = 'Compatible';

            let desc = '';
            if (state.selectedGuild && state.selectedAssociations.size > 0) {
                desc = `Your guild (${state.groupsMap[state.selectedGuild].name}) and all ${state.selectedAssociations.size} selected associations are fully compatible!`;
            } else if (state.selectedGuild) {
                desc = `Guild (${state.groupsMap[state.selectedGuild].name}) is compatible. Select associations to build your profile.`;
            } else {
                desc = `All ${state.selectedAssociations.size} associations are fully compatible with each other!`;
            }
            statusHeroDesc.textContent = desc;

            conflictsListContainer.innerHTML = `
                <div class="no-conflicts-message">
                    <h3>⚔️ No Conflicts Detected</h3>
                    <p style="margin-top: 0.5rem; font-size: 0.95rem;">All selected affiliations can be joined concurrently on a single character.</p>
                </div>
            `;
        } else {
            // INCOMPATIBLE!
            statusHero.className = 'status-hero incompatible';
            statusHeroText.textContent = 'Incompatible';
            statusHeroDesc.textContent = `Found ${conflicts.length} conflict(s) in your profile. See details below.`;

            // Render conflicts
            conflictsListContainer.innerHTML = '';
            conflicts.forEach(c => {
                const confCard = document.createElement('div');
                confCard.className = 'conflict-card';

                let icon = '❌';
                if (c.type === 'tag_tag') icon = '📜 Tag Conflict';
                else if (c.type === 'group_tag') icon = '🛡️ Tag Preclusion';
                else if (c.type === 'group_group') icon = '⚠️ Outlier Exception';
                else if (c.type === 'race_warning') icon = '👤 Race Verification Required';
                else if (c.type === 'group_race') icon = '🧬 Race Restriction';
                else if (c.type === 'gender_warning') icon = '👥 Gender Verification Required';
                else if (c.type === 'group_gender') icon = '⚧️ Gender Restriction';

                confCard.innerHTML = `
                    <div class="conflict-card-title">
                        <span>${icon}: ${c.title}</span>
                    </div>
                    <div class="conflict-card-desc">${c.desc}</div>
                `;
                conflictsListContainer.appendChild(confCard);
            });
        }
    }

    // -------------------------------------------------------------
    // 4. MATRICES GENERATORS
    // -------------------------------------------------------------

    // Guild Tags Matrix generator
    const guildMatrixTable = document.getElementById('guild-matrix-table');
    const guildMatrixSearch = document.getElementById('guild-matrix-search');

    function renderGuildMatrix(filterText = '') {
        guildMatrixTable.innerHTML = '';

        // Find tags that are actually used by at least one guild in our list to make table cleaner
        const usedGuildTagsSet = new Set();
        state.guilds.forEach(g => {
            g.tags.forEach(t => usedGuildTagsSet.add(t));
        });
        const usedGuildTags = Array.from(usedGuildTagsSet).sort();

        // 1. Create table headers
        const headerRow = document.createElement('tr');
        const originHeader = document.createElement('th');
        originHeader.className = 'origin-header';
        originHeader.textContent = 'Guild / Affiliation Tags';
        headerRow.appendChild(originHeader);

        usedGuildTags.forEach(tag => {
            const th = document.createElement('th');
            th.textContent = tag;
            headerRow.appendChild(th);
        });
        guildMatrixTable.appendChild(headerRow);

        // 2. Create table rows (Guilds)
        const search = filterText.toLowerCase();
        state.guilds.forEach((g, rowIdx) => {
            if (search && !g.name.toLowerCase().includes(search)) {
                return;
            }

            const tr = document.createElement('tr');

            // Row Header (Guild Name)
            const rowHeader = document.createElement('th');
            rowHeader.className = 'row-header';
            rowHeader.textContent = g.name;
            tr.appendChild(rowHeader);

            // Cells (Presence indicators)
            usedGuildTags.forEach((tag, colIdx) => {
                const td = document.createElement('td');
                td.className = 'cell-tag';

                const hasTag = g.tags.includes(tag);
                if (hasTag) {
                    td.className += ' present';
                    td.innerHTML = '✔';
                    td.title = `${g.name} has the "${tag}" tag`;
                } else {
                    td.className += ' empty-cell';
                    td.innerHTML = '·';
                }

                // Crosshair hover highlighting
                setupMatrixHover(td, tr, colIdx + 1); // colIdx + 1 because column 0 is rowHeader

                tr.appendChild(td);
            });

            guildMatrixTable.appendChild(tr);
        });
    }

    // Tag Compatibility Matrix generator
    const tagMatrixTable = document.getElementById('tag-matrix-table');

    function renderTagMatrix() {
        tagMatrixTable.innerHTML = '';

        // Find tags that have at least one incompatibility so that table is not giant
        const conflictingTags = state.allTags.filter(tag => {
            const incompats = state.tagsMeta[tag] || [];
            return incompats.length > 0;
        });

        // 1. Headers
        const headerRow = document.createElement('tr');
        const originHeader = document.createElement('th');
        originHeader.className = 'origin-header';
        originHeader.textContent = 'Tags Conflict Grid';
        headerRow.appendChild(originHeader);

        conflictingTags.forEach(tag => {
            const th = document.createElement('th');
            th.textContent = tag;
            th.title = "Click to inspect tag description";
            th.style.cursor = 'pointer';
            th.addEventListener('click', () => alertTagDescription(tag));
            headerRow.appendChild(th);
        });
        tagMatrixTable.appendChild(headerRow);

        // 2. Rows
        conflictingTags.forEach((tagA, rowIdx) => {
            const tr = document.createElement('tr');

            const rowHeader = document.createElement('th');
            rowHeader.className = 'row-header';
            rowHeader.textContent = tagA;
            rowHeader.title = "Click to inspect tag description";
            rowHeader.style.cursor = 'pointer';
            rowHeader.addEventListener('click', () => alertTagDescription(tagA));
            tr.appendChild(rowHeader);

            conflictingTags.forEach((tagB, colIdx) => {
                const td = document.createElement('td');
                td.className = 'cell-tag';

                if (tagA === tagB) {
                    td.innerHTML = '—';
                    td.style.color = 'var(--text-secondary)';
                } else {
                    const tagACompat = state.tagsMeta[tagA] || [];
                    const isIncompat = tagACompat.includes(tagB);

                    if (isIncompat) {
                        td.className += ' incompatible-cell';
                        td.innerHTML = '❌';
                        td.title = `${tagA} is INCOMPATIBLE with ${tagB}`;
                    } else {
                        td.className += ' compatible-cell';
                        td.innerHTML = '✔';
                        td.title = `${tagA} is compatible with ${tagB}`;
                    }
                }

                setupMatrixHover(td, tr, colIdx + 1);

                tr.appendChild(td);
            });

            tagMatrixTable.appendChild(tr);
        });
    }

    // Helper for crosshair highlights on matrix tables
    function setupMatrixHover(cell, row, colIndex) {
        cell.addEventListener('mouseenter', () => {
            row.classList.add('hovered-row');

            // Highlight cells in the same column across all rows in the same table
            const table = row.closest('table');
            const rows = table.querySelectorAll('tr');
            rows.forEach(r => {
                const cells = r.querySelectorAll('th, td');
                if (cells[colIndex]) {
                    cells[colIndex].classList.add('hovered-col');
                }
            });
        });

        cell.addEventListener('mouseleave', () => {
            row.classList.remove('hovered-row');

            const table = row.closest('table');
            const cells = table.querySelectorAll('.hovered-col');
            cells.forEach(c => c.classList.remove('hovered-col'));
        });
    }

    // Modal popup to read tag description
    function alertTagDescription(tagName) {
        const desc = state.tagsMeta[tagName] && state.tagsMeta[tagName].description 
            ? state.tagsMeta[tagName].description.replace('id="bodyContent">', '').trim()
            : "No description available.";

        // A clean styled alert or confirm modal can be used. Since we want an interactive premium design, we'll display a small banner or alert.
        const cleanDesc = desc.replace(/From LSWiki.*/i, '').trim();
        alert(`🏷️ Tag: ${tagName}\n\n${cleanDesc}`);
    }

    // -------------------------------------------------------------
    // 5. EXCEPTIONS DIRECTORY GENERATOR
    // -------------------------------------------------------------
    const guildExceptionsContainer = document.getElementById('guild-exceptions-list');
    const assocExceptionsContainer = document.getElementById('assoc-exceptions-list');

    function renderExceptions(guildFilter = '', assocFilter = '') {
        guildExceptionsContainer.innerHTML = '';
        assocExceptionsContainer.innerHTML = '';

        const gSearch = guildFilter.toLowerCase();
        const aSearch = assocFilter.toLowerCase();

        // Separate groups with preclusions
        const groups = Object.values(state.groupsMap);

        groups.forEach(g => {
            // Check if group has any outlier rules
            const hasTagPreclusions = g.incompat_tags && g.incompat_tags.length > 0;
            const hasGroupExceptions = g.incompat_groups && g.incompat_groups.length > 0;

            if (!hasTagPreclusions && !hasGroupExceptions) {
                return; // skip if it's completely standard
            }

            const item = document.createElement('div');
            item.className = 'exception-list-item';

            // Build body clauses
            let bodyHtml = '';

            if (hasTagPreclusions) {
                bodyHtml += `
                    <div class="exception-tag-clause">
                        🚫 Incompatible with tags: ${g.incompat_tags.map(t => `<strong>${t}</strong>`).join(', ')}
                    </div>
                `;
            }

            if (hasGroupExceptions) {
                bodyHtml += `
                    <div class="exception-group-clause">
                        ⚠️ Mutual exclusivity with: ${g.incompat_groups.map(gn => `<strong>${gn} <a href="${getWikiUrl(gn)}" target="_blank" class="wiki-link" style="font-size: 0.75rem; margin-left: 0.15rem;" title="View Wiki Page">📖</a></strong>`).join(', ')}
                    </div>
                `;
            }

            item.innerHTML = `
                <div class="exception-item-header">
                    <span class="exception-item-name">
                        ${g.name}
                        <a href="${getWikiUrl(g.name)}" target="_blank" class="wiki-link" title="View Wiki Page">📖</a>
                    </span>
                    <span class="exception-item-type">${g.type}</span>
                </div>
                <div class="exception-item-body">
                    ${bodyHtml}
                </div>
            `;

            if (g.type === 'guild') {
                if (!gSearch || g.name.toLowerCase().includes(gSearch)) {
                    guildExceptionsContainer.appendChild(item);
                }
            } else {
                if (!aSearch || g.name.toLowerCase().includes(aSearch)) {
                    assocExceptionsContainer.appendChild(item);
                }
            }
        });

        // Add empty states if no items match
        if (guildExceptionsContainer.children.length === 0) {
            guildExceptionsContainer.innerHTML = '<div style="padding: 2rem; text-align: center; color: var(--text-secondary);">No matching guild outliers.</div>';
        }
        if (assocExceptionsContainer.children.length === 0) {
            assocExceptionsContainer.innerHTML = '<div style="padding: 2rem; text-align: center; color: var(--text-secondary);">No matching association outliers.</div>';
        }
    }

    // -------------------------------------------------------------
    // 6. EVENT SEARCH BINDINGS
    // -------------------------------------------------------------

    // Guild Search input in Checker
    const guildSearchInput = document.getElementById('guild-search');
    guildSearchInput.addEventListener('input', (e) => {
        renderGuildList(e.target.value);
    });

    // Association Search input in Checker
    const assocSearchInput = document.getElementById('assoc-search');
    assocSearchInput.addEventListener('input', (e) => {
        renderAssociationList(e.target.value);
    });

    // -------------------------------------------------------------
    // 6.5 RACE AND GENDER POPULATION & LISTENERS
    // -------------------------------------------------------------
    const raceSelect = document.getElementById('race-select');
    if (raceSelect) {
        Object.values(racesById).sort((a, b) => a.name.localeCompare(b.name)).forEach(race => {
            const opt = document.createElement('option');
            opt.value = race.id;
            opt.textContent = race.name;
            raceSelect.appendChild(opt);
        });

        raceSelect.addEventListener('change', (e) => {
            state.selectedRace = e.target.value;
            renderGuildList(document.getElementById('guild-search').value);
            renderAssociationList(document.getElementById('assoc-search').value);
            updateCheckerResults();
        });
    }

    const nameInput = document.getElementById('character-name');
    if (nameInput) {
        nameInput.addEventListener('blur', (e) => {
            state.characterName = e.target.value;
        });

        const genderSelect = document.getElementById('gender-select');
        if (genderSelect) {
            genderSelect.addEventListener('change', (e) => {
                state.selectedGender = e.target.value;
                renderGuildList(document.getElementById('guild-search').value);
                renderAssociationList(document.getElementById('assoc-search').value);
                updateCheckerResults();
            });
        }
    }

    // -------------------------------------------------------------
    // 7. APP START / INITIAL RENDER
    // -------------------------------------------------------------
    const initialLoad = localStorage.getItem('initialLoad');
    if (initialLoad) {
        loadProfile(initialLoad);
        localStorage.removeItem('initialLoad'); // Clear the flag after loading
    } else {
        renderGuildList();
        renderAssociationList();
        updateCheckerResults();
    }

    // Populate Profile Dropdown
    const profileSelect = document.getElementById('profile-select');
    if (profileSelect) {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key !== 'initialLoad') {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = key;
                profileSelect.appendChild(option);
            }
        }

        profileSelect.addEventListener('change', (e) => {
            const selectedProfile = e.target.value;
            if (selectedProfile) {
                loadProfile(selectedProfile);
            }
        });
    }

    // -------------------------------------------------------------
    // 8. DOCUMENTATION FOR data.js
    // -------------------------------------------------------------
    /**
     * Documentation for data.js
     *
     * The `LOST_SOULS_DATA` object contains the guild and association data for the Lost Souls MUD.
     * It has two main properties: `tags` and `groups`.
     *
     * 1. tags:
     *    - An object where each key is a tag name (string) and the value is an array of tags that are incompatible with it.
     *    Example:
     *    ```
     *    "Agent": [
     *        "Champion"
     *    ],
     *    ```
     *
     * 2. groups:
     *    - An object where each key is a group ID (string) and the value is an object representing the group.
     *    Each group object has the following properties:
     *      - name: string
     *      - alias: string or null
     *      - type: "guild" or "association"
     *      - tags: array of strings (tags associated with the group)
     *      - incompat_groups: array of strings (group IDs that are incompatible with this group)
     *      - incompat_tags: array of strings (tags that are incompatible with this group)
     *      - id: string (unique identifier for the group)
     *
     * Example:
     * ```
     * "adventurers_guild": {
     *    "name": "Adventurer's Guild",
     *    "alias": null,
     *    "type": "guild",
     *    "tags": [],
     *    "incompat_groups": [],
     *    "incompat_tags": [],
     *    "id": "adventurers_guild"
     * },
     * ```
     */

    // -------------------------------------------------------------
    // 9. SAVE FUNCTIONALITY
    // -------------------------------------------------------------
    const saveButton = document.getElementById('save-button');
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            if (!state.characterName) {
                alert('Please enter a character name to save.');
                return;
            }

            const saveState = {
                selectedGuild: state.selectedGuild,
                selectedRace: state.selectedRace,
                selectedGender: state.selectedGender,
                characterName: state.characterName,
                selectedAssociations: [...state.selectedAssociations]
            }

            const savedState = JSON.stringify(saveState);
            localStorage.setItem(state.characterName, savedState);
            alert(`Character profile for "${state.characterName}" has been saved.`);
        });
    }

    // Function to load a profile from local storage
    function loadProfile(characterName) {
        if (!characterName) {
            console.error("No character name provided to load.");
            return;
        }

        const savedState = localStorage.getItem(characterName);
        if (savedState) {
            try {
                const loadedState = JSON.parse(savedState);
                Object.assign(state, loadedState);
                // Ensure selectedAssociations is a Set
                state.selectedAssociations = new Set(loadedState.selectedAssociations || []);
                renderGuildList();
                renderAssociationList();
                updateCheckerResults();
                alert(`Character profile for "${characterName}" has been loaded.`);
            } catch (error) {
                console.error("Error loading profile:", error);
                alert(`Failed to load character profile for "${characterName}".`);
            }
        } else {
            alert(`No saved profile found for "${characterName}".`);
        }
    }
});
