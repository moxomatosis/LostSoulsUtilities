/**
 * Lost Souls MUD - Affiliation Compatibility Planner
 * Pure compatibility engine (DOM-free, unit-testable).
 *
 * All rules live here so they can be validated with `node --test` without
 * a browser. app.js imports these functions and wires them to the UI.
 */

import racesById from './races.js';
import {
    tagIncompatibilityPairs,
    associationTagIncompatibilities,
    associationAssociationIncompatibilities,
} from './compatibility.js';

export const DEFAULT_GUILD_ID = 'adventurers_guild';

/** Display name for a race ID, falling back to the raw ID if unknown. */
function raceName(raceId) {
    return racesById[raceId] ? racesById[raceId].name : raceId;
}

/**
 * Build the list of active group objects from the current selection.
 * Falls back to the Adventurer's Guild when no guild is selected.
 *
 * @param {object} groupsMap            Map of groupID -> group object (LOST_SOULS_DATA.groups)
 * @param {Set|string[]} selectedGuilds       Selected guild IDs
 * @param {Set|string[]} selectedAssociations Selected association IDs
 * @param {string} [defaultGuildId]     Guild to use when selectedGuilds is empty
 * @returns {object[]} Active group objects
 */
export function buildActiveGroups(groupsMap, selectedGuilds, selectedAssociations, defaultGuildId = DEFAULT_GUILD_ID) {
    const activeGroups = [];
    const guildIds = selectedGuilds instanceof Set ? [...selectedGuilds] : (selectedGuilds || []);

    if (guildIds.length > 0) {
        guildIds.forEach(guildId => {
            const guildObj = groupsMap[guildId];
            if (guildObj) activeGroups.push(guildObj);
        });
    } else {
        const defaultGuild = groupsMap[defaultGuildId];
        if (defaultGuild) activeGroups.push(defaultGuild);
    }

    const assocIds = selectedAssociations instanceof Set ? [...selectedAssociations] : (selectedAssociations || []);
    assocIds.forEach(assocId => {
        const assocObj = groupsMap[assocId];
        if (assocObj) activeGroups.push(assocObj);
    });

    return activeGroups;
}

/**
 * Check a set of active groups for compatibility conflicts.
 *
 * @param {object[]} groups          Active group objects (see buildActiveGroups)
 * @param {string} [selectedRace]    Race ID of the character ('Unspecified' skips race checks)
 * @param {string} [selectedGender]  Gender of the character
 * @returns {object[]} Conflicts: { type, title, desc, reason }
 */
export function checkCompatibility(groups, selectedRace = 'Unspecified', selectedGender = 'Unspecified') {
    const conflicts = [];

    // Tag Sources Map to track which group contributed which tag
    const tagSources = {};
    groups.forEach(g => {
        (g.tags || []).forEach(t => {
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
                const sourceNamesA = sourcesA.map(n => `<strong>${n.name}</strong>`).join(', ');
                const sourceNamesB = sourcesB.map(n => `<strong>${n.name}</strong>`).join(', ');

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
                    desc: `Tag <strong>${tagA}</strong> (from ${sourceNamesA}) is incompatible with tag <strong>${tagB}</strong> (from ${sourceNamesB})${description}.`,
                    reason: `Tag ${tagA}/${tagB} conflict`
                });
            }
        }
    }

    // --- RULE 2: Association vs Tag Preclusions ---
    groups.forEach(g => {
        // Use .filter() instead of .find() to catch multiple tag incompatibilities per group
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

            // Use .filter() instead of .find() to catch multiple association conflicts between the same pair
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
    // NOTE: allowed_races / excluded_races store race IDs (not names); the
    // selected race from the UI is also an ID, so comparisons are by ID.
    groups.forEach(g => {
        if (selectedRace !== 'Unspecified') {
            if (g.allowed_races && g.allowed_races.length > 0) {
                if (!g.allowed_races.includes(selectedRace)) {
                    const allowedRaceNames = g.allowed_races.map(raceName).join(', ');
                    conflicts.push({
                        type: 'group_race',
                        title: `${g.name} Race Conflict`,
                        desc: `<strong>${g.name}</strong> only allows these races: ${allowedRaceNames}. Your race is <strong>${raceName(selectedRace)}</strong>.`,
                        reason: 'Race restricted'
                    });
                }
            }
            if (g.excluded_races && g.excluded_races.length > 0) {
                if (g.excluded_races.includes(selectedRace)) {
                    const excludedRaceNames = g.excluded_races.map(raceName).join(', ');
                    conflicts.push({
                        type: 'group_race',
                        title: `${g.name} Race Exclusion`,
                        desc: `<strong>${g.name}</strong> explicitly excludes these races: ${excludedRaceNames}. Your race is <strong>${raceName(selectedRace)}</strong>.`,
                        reason: 'Race excluded'
                    });
                }
            }
        }
    });

    // --- RULE 5: Gender Restrictions ---
    groups.forEach(g => {
        if (g.allowed_genders && g.allowed_genders.length > 0) {
            if (!g.allowed_genders.includes(selectedGender)) {
                conflicts.push({
                    type: 'group_gender',
                    title: `${g.name} Gender Conflict`,
                    desc: `<strong>${g.name}</strong> only allows these genders: ${g.allowed_genders.join(', ')}. Your gender is <strong>${selectedGender}</strong>.`,
                    reason: 'Gender restricted'
                });
            }
        }
    });

    return conflicts;
}

/**
 * Full profile validation: builds active groups, checks conflicts,
 * and collects soft warnings.
 *
 * @param {object} groupsMap            Map of groupID -> group object
 * @param {Set|string[]} selectedGuilds       Selected guild IDs
 * @param {Set|string[]} selectedAssociations Selected association IDs
 * @param {object} [options]            { selectedRace, selectedGender }
 * @returns {{ conflicts: object[], warnings: object[] }}
 */
export function validateCompatibility(groupsMap, selectedGuilds, selectedAssociations, options = {}) {
    const activeGroups = buildActiveGroups(groupsMap, selectedGuilds, selectedAssociations);
    const conflicts = checkCompatibility(activeGroups, options.selectedRace, options.selectedGender);
    const warnings = [];

    const guildCount = selectedGuilds instanceof Set ? selectedGuilds.size : (selectedGuilds || []).length;
    if (guildCount > 1) {
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
