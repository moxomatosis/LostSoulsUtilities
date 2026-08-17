/**
 * Lost Souls MUD - Affiliation Compatibility Planner
 * Application Logic & Compatibility Engine
 */

import racesById from './races.js';
import { tagIncompatibilityPairs, associationTagIncompatibilities, associationAssociationIncompatibilities } from './compatibility.js';

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

    // Add event listener for clear button
    const clearButton = document.getElementById('clear-button');
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            state.selectedGuilds.clear();
            state.selectedAssociations.clear();
            state.selectedRace = 'Unspecified';
            state.selectedGender = 'Unspecified';
            state.characterName = '';

            // Reset UI elements
            document.getElementById('character-name').value = '';
            document.getElementById('race-select').value = 'Unspecified';
            document.getElementById('gender-select').value = 'Unspecified';

            renderGuildList();
            renderAssociationList();
            updateCheckerResults();
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
        selectedGuilds: new Set(),             // Set of Strings: Selected guild IDs
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

    // Helper to get group display name by ID
    function getGroupNameById(groupId) {
        const group = state.groupsMap[groupId];
        return group ? group.name : groupId;
    }

    // -------------------------------------------------------------
    // 2. COMPATIBILITY ENGINE
    // -------------------------------------------------------------

    function checkCompatibility(groups) {
        const conflicts = [];

        // Tag Sources Map to track which group contributed which tag
        const tagSources = {};
        groups.forEach(g => {
            g.tags.forEach(t => {
                if (!tagSources[t]) tagSources[t] = [];
                tagSources[t].push(g);
            });
        });

        const activeTags = Object.keys(tagSources);

        // --- RULE 1: Tag-to-Tag Incompatibilities ---
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

                // Check against incompatibility pairs
                const isCompatible = !tagIncompatibilityPairs.some(pair =>
                    pair.tags.includes(tagA) && pair.tags.includes(tagB)
                );

                if (!isCompatible) {
                    // Conflict found
                    const sourcesA = tagSources[tagA].map(n => n.name).map(n => `<strong>${n}</strong>`).join(', ');
                    const sourcesB = tagSources[tagB].map(n => n.name).map(n => `<strong>${n}</strong>`).join(', ');

                    let description = '';
                    const conflictingPair = tagIncompatibilityPairs.find(pair =>
                        pair.tags.includes(tagA) && pair.tags.includes(tagB)
                    );
                    if (conflictingPair && conflictingPair.description) {
                        description = ` (${conflictingPair.description})`;
                    }

                    conflicts.push({
                        type: 'tag_tag',
                        title: `Tag Conflict: ${tagA} & ${tagB}`,
                        desc: `Tag <strong>${tagA}</strong> (from ${sourcesA}) is incompatible with tag <strong>${tagB}</strong> (from ${sourcesB})${description}.`,
                        reason: `Tag ${tagA}/${tagB} conflict`
                    });
                }
            }
        }

        // --- RULE 2: Association vs Tag Preclusions ---
        groups.forEach(g => {
            // FIXED: Use .filter() instead of .find() to catch multiple tag incompatibilities per group
            const assocTagIncompatibilities = associationTagIncompatibilities.filter(item => item.association === g.id);

            if (assocTagIncompatibilities.length > 0) {
                assocTagIncompatibilities.forEach(incompat => {
                    if (incompat.tag) {
                        // Filter out conflicts with our own guild/association, since that is a thing.
                        const conflictSources = (tagSources[incompat.tag] || []).filter(s => s.id !== g.id);
                        if (conflictSources.length > 0) {
                            conflicts.push({
                                type: 'assoc_tag',
                                title: `${g.name} Tag Preclusion`,
                                desc: `<strong>${g.name}</strong> cannot be joined because you have the tag <strong>${incompat.tag}</strong>. ${incompat.description ? ` (${incompat.description})` : ''}`,
                                reason: `Precluded by tag ${incompat.tag}`
                            });
                        }
                    }
                });
            }
        });

        // --- RULE 3: Association vs Association Preclusions ---
        for (let i = 0; i < groups.length; i++) {
            for (let j = i + 1; j < groups.length; j++) {
                const assocA = groups[i];
                const assocB = groups[j];

                // Skip self-compatibility check
                if (assocA.id === assocB.id) continue;

                // FIXED: Use .filter() instead of .find() to catch multiple association conflicts between the same pair
                const assocAssocIncompatibilities = associationAssociationIncompatibilities.filter(item =>
                    item.associations.includes(assocA.id) && item.associations.includes(assocB.id)
                );

                if (assocAssocIncompatibilities.length > 0) {
                    assocAssocIncompatibilities.forEach(incompat => {
                        conflicts.push({
                            type: 'assoc_assoc',
                            title: `Association Conflict: ${assocA.name} & ${assocB.name}`,
                            desc: `<strong>${assocA.name}</strong> and <strong>${assocB.name}</strong> cannot be joined together. ${incompat.description ? ` (${incompat.description})` : ''}`,
                            reason: `${assocA.name} & ${assocB.name} conflict`
                        });
                    });
                }
            }
        }

        // --- RULE 4: Race Restrictions ---
        groups.forEach(g => {
            if (state.selectedRace !== 'Unspecified') {
                if (g.allowed_races && g.allowed_races.length > 0) {
                    const allowedRaceNames = g.allowed_races.map(raceId => racesById[raceId].name);
                    if (!allowedRaceNames.includes(state.selectedRace)) {
                        conflicts.push({
                            type: 'group_race',
                            title: `${g.name} Race Conflict`,
                            desc: `<strong>${g.name}</strong> only allows these races: ${allowedRaceNames.join(', ')}. Your race is <strong>${racesById[state.selectedRace].name}</strong>.`,
                            reason: 'Race restricted'
                        });
                    }
                }
                if (g.excluded_races && g.excluded_races.length > 0) {
                    const excludedRaceNames = g.excluded_races.map(raceId => racesById[raceId].name);
                    if (excludedRaceNames.includes(state.selectedRace)) {
                        conflicts.push({
                            type: 'group_race',
                            title: `${g.name} Race Exclusion`,
                            desc: `<strong>${g.name}</strong> explicitly excludes these races: ${excludedRaceNames.join(', ')}. Your race is <strong>${racesById[state.selectedRace].name}</strong>.`,
                            reason: 'Race excluded'
                        });
                    }
                }
            }
        });

        // --- RULE 5: Gender Restrictions ---
        groups.forEach(g => {
            if (g.allowed_genders && g.allowed_genders.length > 0) {
                if (!g.allowed_genders.includes(state.selectedGender)) {
                    conflicts.push({
                        type: 'group_gender',
                        title: `${g.name} Gender Conflict`,
                        desc: `<strong>${g.name}</strong> only allows these genders: ${g.allowed_genders.join(', ')}. Your gender is <strong>${state.selectedGender}</strong>.`,
                        reason: 'Gender restricted'
                    });
                }
            }
        });

        return conflicts;
    }

    function validateCompatibility() {
        const activeGroups = [];
        if (state.selectedGuilds.size > 0) {
            state.selectedGuilds.forEach(guildId => {
                const guildObj = state.groupsMap[guildId];
                if (guildObj) activeGroups.push(guildObj);
            });
        } else {
            const defaultGuild = state.groupsMap['adventurers_guild'];
            if (defaultGuild) activeGroups.push(defaultGuild);
        }
        state.selectedAssociations.forEach(assocId => {
            const assocObj = state.groupsMap[assocId];
            if (assocObj) activeGroups.push(assocObj);
        });

        const conflicts = checkCompatibility(activeGroups);
        const warnings = [];

        if (state.selectedGuilds.size > 1) {
            warnings.push({
                type: 'warning',
                title: 'Multi-Guild Compatibility Warning',
                desc: 'Selecting multiple guilds is not well documented or tested. Compatibility rules between multiple guilds may not be fully accurate.'
            });
        }

        activeGroups.forEach(g => {
            if (g.warning) {
                warnings.push({
                    type: 'warning',
                    title: `${g.name} Warning`,
                    desc: g.warning
                });
            }
        });

        return { conflicts, warnings };
    }

    // Helper to simulate compatibility for a candidate group (guild or association)
    function testCompatibilityWithCandidate(candidateId) {
        const activeGroups = [];

        // Build the simulated set of selected guilds
        const simulatedGuilds = new Set(state.selectedGuilds);
        if (state.groupsMap[candidateId] && state.groupsMap[candidateId].type === 'guild') {
            if (simulatedGuilds.has(candidateId)) {
                simulatedGuilds.delete(candidateId);
            } else {
                simulatedGuilds.add(candidateId);
            }
        }

        // Build the simulated set of selected associations
        const simulatedAssocs = new Set(state.selectedAssociations);
        if (state.groupsMap[candidateId] && state.groupsMap[candidateId].type === 'association') {
            if (simulatedAssocs.has(candidateId)) {
                simulatedAssocs.delete(candidateId);
            } else {
                simulatedAssocs.add(candidateId);
            }
        }

        // Add simulated guilds or default to Adventurer's Guild
        if (simulatedGuilds.size > 0) {
            simulatedGuilds.forEach(guildId => {
                const guildObj = state.groupsMap[guildId];
                if (guildObj) activeGroups.push(guildObj);
            });
        } else {
            const defaultGuild = state.groupsMap['adventurers_guild'];
            if (defaultGuild) activeGroups.push(defaultGuild);
        }

        // Add simulated associations
        simulatedAssocs.forEach(assocId => {
            const assocObj = state.groupsMap[assocId];
            if (assocObj) activeGroups.push(assocObj);
        });

        return checkCompatibility(activeGroups);
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

        // Add "Adventurer's Guild" option at the top as the default
        const noneItem = document.createElement('div');
        noneItem.className = `guild-item ${state.selectedGuilds.size === 0 || state.selectedGuilds.has('adventurers_guild') ? 'selected' : ''}`;
        noneItem.setAttribute('role', 'option');
        noneItem.innerHTML = '<span><em>Adventurer\'s Guild (Default)</em></span>';
        noneItem.addEventListener('click', () => toggleGuild(null));
        guildListContainer.appendChild(noneItem);

        // Map guilds to their status, filtering out the Adventurer's Guild from the search list
        const processed = state.guilds
            .filter(g => g.id !== 'adventurers_guild')
            .map(g => {
                const isChecked = state.selectedGuilds.has(g.id);
                const conflicts = isChecked ? [] : testCompatibilityWithCandidate(g.id);
                const isCompatible = conflicts.length === 0;
                return {
                    guild: g,
                    isChecked,
                    isCompatible,
                    conflicts
                };
            });

        // Filter by search text
        const filtered = processed.filter(p => {
            return !search || p.guild.name.toLowerCase().includes(search);
        });

        // Sort: checked first, then compatible, then incompatible, then alphabetical
        filtered.sort((x, y) => {
            if (x.isChecked && !y.isChecked) return -1;
            if (!x.isChecked && y.isChecked) return 1;
            if (x.isCompatible && !y.isCompatible) return -1;
            if (!x.isCompatible && y.isCompatible) return 1;
            return x.guild.name.localeCompare(y.guild.name);
        });

        filtered.forEach(p => {
            const g = p.guild;
            const isChecked = p.isChecked;
            const isCompatible = p.isCompatible;

            const item = document.createElement('div');
            item.className = `guild-item ${isChecked ? 'selected' : ''} ${!isCompatible ? 'incompatible-item' : ''}`;
            item.setAttribute('role', 'option');

            // Build item description with tags and wiki link
            let tagsHtml = g.tags.map(t => `<span class="tag-badge tag-${t.toLowerCase()}">${t}</span>`).join(' ');

            let conflictHtml = '';
            if (!isCompatible && p.conflicts.length > 0) {
                const reasonsList = p.conflicts.map(c => c.reason || c.title).join(', ');
                conflictHtml = `<div class="guild-conflict-reason">Conflicts: ${reasonsList}</div>`;
            }

            item.innerHTML = `
                <div class="group-info-col">
                    <span class="group-name-row">
                        ${g.name}
                        <a href="${getWikiUrl(g.name)}" target="_blank" class="wiki-link" title="View Wiki Page">📖</a>
                    </span>
                    <div class="group-tags">${tagsHtml}</div>
                    ${conflictHtml}
                </div>
            `;

            // Stop click propagation on the wiki link so it doesn't trigger selection
            const wikiLink = item.querySelector('.wiki-link');
            if (wikiLink) {
                wikiLink.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
            }

            item.addEventListener('click', () => toggleGuild(g.id));
            guildListContainer.appendChild(item);
        });
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
                const reasonsList = p.conflicts.map(c => c.reason || c.title).join(', ');
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
                    ${conflictHtml}
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
    // Handle Guild toggle state
    function toggleGuild(guildId, forceState) {
        if (guildId === null) {
            state.selectedGuilds.clear();
        } else {
            if (forceState !== undefined) {
                if (forceState) {
                    state.selectedGuilds.add(guildId);
                } else {
                    state.selectedGuilds.delete(guildId);
                }
            } else {
                if (state.selectedGuilds.has(guildId)) {
                    state.selectedGuilds.delete(guildId);
                } else {
                    state.selectedGuilds.add(guildId);
                }
            }
        }
        renderGuildList(document.getElementById('guild-search').value);
        renderAssociationList(document.getElementById('assoc-search').value);
        updateCheckerResults();
    }

    // Handle Association toggle state
    function toggleAssociation(assocId, isChecked) {
        if (isChecked) {
            // Check if the association is already selected
            if (!state.selectedAssociations.has(assocId)) {
                state.selectedAssociations.add(assocId);
            }
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

        if (state.selectedGuilds.size > 0) {
            state.selectedGuilds.forEach(guildId => {
                totalSelected++;
                const guild = state.groupsMap[guildId];
                if (!guild) return;
                const chip = document.createElement('div');
                chip.className = 'chip chip-guild';
                chip.innerHTML = `
                    <span>🛡️ Guild: <strong>${guild.name}</strong> <a href="${getWikiUrl(guild.name)}" target="_blank" class="wiki-link-chip" title="View Wiki Page">📖</a></span>
                    <span class="chip-remove" title="Deselect Guild">&times;</span>
                `;

                // Prevent deselecting the guild when clicking the wiki link
                const wikiLink = chip.querySelector('.wiki-link-chip');
                if (wikiLink) {
                    wikiLink.addEventListener('click', (e) => {
                        e.stopPropagation();
                    });
                }

                chip.querySelector('.chip-remove').addEventListener('click', () => toggleGuild(guildId, false));
                selectedChipsContainer.appendChild(chip);
            });
        } else {
            // Default to Adventurer's Guild
            const guild = state.groupsMap['adventurers_guild'];
            if (guild) {
                totalSelected++;
                const chip = document.createElement('div');
                chip.className = 'chip chip-guild';
                chip.innerHTML = `
                    <span>🛡️ Guild: <strong>${guild.name}</strong> <a href="${getWikiUrl(guild.name)}" target="_blank" class="wiki-link-chip" title="View Wiki Page">📖</a></span>
                `;
                selectedChipsContainer.appendChild(chip);
            }
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

        // If no user selections, show empty state
        if (state.selectedGuilds.size === 0 && state.selectedAssociations.size === 0) {
            statusHero.className = 'status-hero empty';
            statusHeroText.textContent = 'Empty Profile';
            statusHeroDesc.textContent = 'Select a guild or association to analyze compatibility.';

            conflictsListContainer.innerHTML = `
                <div class="empty-state-message">
                    <span>No groups selected. Add affiliations in the left panel to test compatibility.</span>
                </div>
            `;
            activeTagsContainer.style.display = 'none';
            selectedChipsContainer.innerHTML = '';
            return;
        }

        // Render possessed tags summary
        const activeGroups = [];
        if (state.selectedGuilds.size > 0) {
            state.selectedGuilds.forEach(id => {
                const guildObj = state.groupsMap[id];
                if (guildObj) activeGroups.push(guildObj);
            });
        } else {
            const defaultGuild = state.groupsMap['adventurers_guild'];
            if (defaultGuild) activeGroups.push(defaultGuild);
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
        const { conflicts, warnings } = validateCompatibility();

        if (conflicts.length === 0 && warnings.length === 0) {
            // COMPATIBLE!
            statusHero.className = 'status-hero compatible';
            statusHeroText.textContent = 'Compatible';

            let desc = '';
            const guildNames = state.selectedGuilds.size > 0 
                ? Array.from(state.selectedGuilds).map(id => state.groupsMap[id].name).join(', ')
                : "Adventurer's Guild";
            
            if (state.selectedAssociations.size > 0) {
                desc = `Your guild(s) (${guildNames}) and all ${state.selectedAssociations.size} selected associations are fully compatible!`;
            } else {
                desc = `Guild(s) (${guildNames}) are compatible. Select associations to build your profile.`;
            }
            statusHeroDesc.textContent = desc;

            conflictsListContainer.innerHTML = `
                <div class="no-conflicts-message">
                    <h3>⚔️ No Conflicts Detected</h3>
                    <p style="margin-top: 0.5rem; font-size: 0.95rem;">All selected affiliations can (probably) be joined concurrently on a single character.</p>
                    <sub>In theory, but things might not work, and you might not be able to join.</sub>
                </div>
            `;
        } else {
            // Either hard conflicts or warnings (or both) exist!
            if (conflicts.length > 0) {
                // INCOMPATIBLE! (Hard conflict takes precedence)
                statusHero.className = 'status-hero incompatible';
                statusHeroText.textContent = 'Incompatible';
                statusHeroDesc.textContent = `Found ${conflicts.length} conflict(s) in your profile. See details below.`;
            } else {
                // Compatible but with warnings!
                statusHero.className = 'status-hero warning';
                statusHeroText.textContent = 'Compatible with Warnings';
                statusHeroDesc.textContent = `Profile is compatible, but has ${warnings.length} warning(s). See details below.`;
            }

            // Render conflicts & warnings
            conflictsListContainer.innerHTML = '';

            // Render hard conflicts first
            conflicts.forEach(c => {
                const confCard = document.createElement('div');
                confCard.className = 'conflict-card';

                let icon = '❌';
                if (c.type === 'tag_tag') icon = '📜 Tag Conflict';
                else if (c.type === 'assoc_tag') icon = '🏷️ Association Tag Preclusion';
                else if (c.type === 'assoc_assoc') icon = '🤝 Association Conflict';
                else if (c.type === 'group_race') icon = '🧬 Race Restriction';
                else if (c.type === 'group_gender') icon = '⚧️ Gender Restriction';

                confCard.innerHTML = `
                    <div class="conflict-card-title">
                        <span>${icon}: ${c.title}</span>
                    </div>
                    <div class="conflict-card-desc">${c.desc}</div>
                `;
                conflictsListContainer.appendChild(confCard);
            });

            // Render warnings second
            warnings.forEach(w => {
                const warnCard = document.createElement('div');
                warnCard.className = 'conflict-card warning-card';

                warnCard.innerHTML = `
                    <div class="conflict-card-title" style="color: var(--accent-gold);">
                        <span>⚠️ ${w.title}</span>
                    </div>
                    <div class="conflict-card-desc">${w.desc}</div>
                `;
                conflictsListContainer.appendChild(warnCard);
            });
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
     *      - allowed_races: array of race IDs that are allowed for this group
     *      - excluded_races: array of race IDs that are excluded from this group
     *      - allowed_genders: array of genders that are allowed for this group
     *      - id: string (unique identifier for the group)
     *
     * Example:
     * ```
     * "adventurers_guild": {
     *    "name": "Adventurer's Guild",
     *    "alias": null,
     *    "type": "guild",
     *    "tags": [],
     *    "allowed_races": [],
     *    "excluded_races": [],
     *    "allowed_genders": [],
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
                selectedGuilds: [...state.selectedGuilds],
                selectedRace: state.selectedRace,
                selectedGender: state.selectedGender,
                characterName: state.characterName,
                selectedAssociations: [...state.selectedAssociations]
            }

            const savedState = JSON.stringify(saveState);
            localStorage.setItem(state.characterName, savedState);
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

                // Migrate legacy selectedGuild or load selectedGuilds Set
                if (loadedState.selectedGuilds) {
                    state.selectedGuilds = new Set(loadedState.selectedGuilds);
                } else if (loadedState.selectedGuild) {
                    state.selectedGuilds = new Set([loadedState.selectedGuild]);
                } else {
                    state.selectedGuilds = new Set();
                }

                // Ensure selectedAssociations is a Set
                state.selectedAssociations = new Set(loadedState.selectedAssociations || []);

                // Update UI elements
                document.getElementById('character-name').value = state.characterName;
                document.getElementById('race-select').value = state.selectedRace;
                document.getElementById('gender-select').value = state.selectedGender;

                renderGuildList();
                renderAssociationList();
                updateCheckerResults();
            } catch (error) {
                console.error("Error loading profile:", error);
                alert(`Failed to load character profile for "${characterName}".`);
            }
        } else {
            alert(`No saved profile found for "${characterName}".`);
        }
    }
});
