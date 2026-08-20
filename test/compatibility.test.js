/**
 * Core compatibility engine tests: tag conflicts, association preclusions,
 * gender restrictions, warnings, and active-group assembly.
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { LOST_SOULS_DATA } from './helpers/load-data.js';
import {
    checkCompatibility,
    validateCompatibility,
    buildActiveGroups,
    DEFAULT_GUILD_ID,
} from '../engine.js';

const groups = LOST_SOULS_DATA.groups;

const ofType = (conflicts, type) => conflicts.filter(c => c.type === type);

describe('tag-tag incompatibilities', () => {
    test('Good + Evil groups conflict (faradrim_ilavathar + kazarak)', () => {
        const conflicts = checkCompatibility(
            [groups['faradrim_ilavathar'], groups['kazarak']],
            'Unspecified',
            'Unspecified',
        );
        assert.ok(
            ofType(conflicts, 'tag_tag').some(c => c.reason === 'Tag Good/Evil conflict'),
            `expected Good/Evil tag conflict, got: ${JSON.stringify(conflicts)}`,
        );
    });

    test('a single group with a self-incompatible tag pair does NOT self-conflict (aliavelyrae: Atheist+Devotional)', () => {
        const conflicts = checkCompatibility([groups['aliavelyrae']], 'Unspecified', 'Unspecified');
        assert.deepEqual(
            ofType(conflicts, 'tag_tag'),
            [],
            `aliavelyrae's own Atheist+Devotional tags must not conflict, got: ${JSON.stringify(conflicts)}`,
        );
    });

    test('a single group with a self-incompatible tag pair does NOT self-conflict (warbreakers: Agent+Champion)', () => {
        const conflicts = checkCompatibility([groups['warbreakers']], 'Unspecified', 'Unspecified');
        assert.deepEqual(ofType(conflicts, 'tag_tag'), []);
    });

    test('the same incompatible pair across two groups still conflicts', () => {
        // Coven contributes Agent? No - use two groups that jointly hold Agent + Champion.
        // warbreakers holds Agent; find a Champion holder to pair with it.
        const championGroup = Object.values(groups).find(g => g.tags && g.tags.includes('Champion'));
        assert.ok(championGroup, 'expected a group with the Champion tag');
        const conflicts = checkCompatibility(
            [groups['warbreakers'], championGroup],
            'Unspecified',
            'Unspecified',
        );
        assert.ok(
            ofType(conflicts, 'tag_tag').some(c => c.reason === 'Tag Agent/Champion conflict'),
            `expected Agent/Champion conflict, got: ${JSON.stringify(conflicts)}`,
        );
    });
});

describe('association-tag preclusions', () => {
    test('aliavelyrae cannot be joined while another group contributes Soldier', () => {
        const soldierGroup = Object.values(groups).find(
            g => g.id !== 'aliavelyrae' && g.tags && g.tags.includes('Soldier'),
        );
        assert.ok(soldierGroup, 'expected a non-aliavelyrae group with the Soldier tag');
        const conflicts = checkCompatibility(
            [groups['aliavelyrae'], soldierGroup],
            'Unspecified',
            'Unspecified',
        );
        assert.ok(
            ofType(conflicts, 'assoc_tag').some(c => c.reason === 'Precluded by tag Soldier'),
            `expected Soldier preclusion for aliavelyrae, got: ${JSON.stringify(conflicts)}`,
        );
    });

    test('aliavelyrae alone produces no assoc_tag preclusion (no self-preclusion)', () => {
        const conflicts = checkCompatibility([groups['aliavelyrae']], 'Unspecified', 'Unspecified');
        assert.deepEqual(ofType(conflicts, 'assoc_tag'), []);
    });

    test('reapers cannot be joined while another group contributes Protector', () => {
        const protectorGroup = Object.values(groups).find(
            g => g.id !== 'reapers' && g.tags && g.tags.includes('Protector'),
        );
        const conflicts = checkCompatibility(
            [groups['reapers'], protectorGroup],
            'Unspecified',
            'Unspecified',
        );
        assert.ok(
            ofType(conflicts, 'assoc_tag').some(c => c.reason === 'Precluded by tag Protector'),
            `expected Protector preclusion for reapers, got: ${JSON.stringify(conflicts)}`,
        );
    });
});

describe('association-association preclusions', () => {
    test('coven + hawkmen conflict', () => {
        const conflicts = checkCompatibility([groups['coven'], groups['hawkmen']], 'Unspecified', 'Unspecified');
        assert.ok(
            ofType(conflicts, 'assoc_assoc').some(c => c.reason === 'Coven & Hawkmen conflict'),
            `expected Coven & Hawkmen conflict, got: ${JSON.stringify(conflicts)}`,
        );
    });

    test('justicars_of_axa + the_attuned conflict', () => {
        const conflicts = checkCompatibility(
            [groups['justicars_of_axa'], groups['the_attuned']],
            'Unspecified',
            'Unspecified',
        );
        assert.ok(
            ofType(conflicts, 'assoc_assoc').some(c => c.reason === 'Justicars of Axa & The Attuned conflict'),
            `expected Justicars & Attuned conflict, got: ${JSON.stringify(conflicts)}`,
        );
    });

    test('non-conflicting pair produces no assoc_assoc conflict (hawkmen + hellwalkers)', () => {
        const conflicts = checkCompatibility([groups['hawkmen'], groups['hellwalkers']], 'Unspecified', 'Unspecified');
        assert.deepEqual(
            ofType(conflicts, 'assoc_assoc'),
            [],
            `hawkmen + hellwalkers should not conflict directly, got: ${JSON.stringify(conflicts)}`,
        );
    });
});

describe('gender restrictions', () => {
    test('maidens_of_the_spear allows Female only', () => {
        const maiden = groups['maidens_of_the_spear'];
        assert.deepEqual(
            ofType(checkCompatibility([maiden], 'Unspecified', 'Female'), 'group_gender'),
            [],
        );
        assert.ok(
            ofType(checkCompatibility([maiden], 'Unspecified', 'Male'), 'group_gender').length > 0,
            'Male should be rejected from maidens_of_the_spear',
        );
    });

    test('gender check still runs when gender is Unspecified (existing behavior)', () => {
        const maiden = groups['maidens_of_the_spear'];
        assert.ok(
            ofType(checkCompatibility([maiden], 'Unspecified', 'Unspecified'), 'group_gender').length > 0,
        );
    });
});

describe('validateCompatibility (full profile)', () => {
    test('empty selection falls back to the Adventurer\'s Guild with no conflicts', () => {
        const { conflicts, warnings } = validateCompatibility(groups, new Set(), new Set(), {
            selectedRace: 'Unspecified',
            selectedGender: 'Unspecified',
        });
        assert.deepEqual(conflicts, []);
        assert.deepEqual(warnings, []);
    });

    test('multiple guilds produce the multi-guild warning', () => {
        const { warnings } = validateCompatibility(groups, new Set(['battleragers', 'shapeshifters']), new Set(), {
            selectedRace: 'Unspecified',
            selectedGender: 'Unspecified',
        });
        assert.ok(
            warnings.some(w => w.title === 'Multi-Guild Compatibility Warning'),
            `expected multi-guild warning, got: ${JSON.stringify(warnings)}`,
        );
    });

    test('per-group warning metadata is surfaced (kazarak, travelers)', () => {
        for (const id of ['kazarak', 'travelers']) {
            const { warnings } = validateCompatibility(groups, new Set(), new Set([id]), {
                selectedRace: 'Unspecified',
                selectedGender: 'Unspecified',
            });
            assert.ok(
                warnings.some(w => w.title === `${groups[id].name} Warning`),
                `expected a warning for ${id}, got: ${JSON.stringify(warnings)}`,
            );
        }
    });
});

describe('buildActiveGroups', () => {
    test('defaults to the Adventurer\'s Guild when no guild is selected', () => {
        const active = buildActiveGroups(groups, new Set(), new Set());
        assert.deepEqual(active.map(g => g.id), [DEFAULT_GUILD_ID]);
    });

    test('combines selected guilds and associations in order', () => {
        const active = buildActiveGroups(groups, new Set(['battleragers']), new Set(['hawkmen']));
        assert.deepEqual(active.map(g => g.id), ['battleragers', 'hawkmen']);
    });

    test('drops unknown IDs; no default fallback once a guild is "selected"', () => {
        // Matches app behavior: the default Adventurer's Guild is only used
        // when NO guild is selected at all.
        const active = buildActiveGroups(groups, new Set(['does_not_exist']), new Set(['also_missing']));
        assert.deepEqual(active.map(g => g.id), []);
    });

    test('unknown association IDs are dropped while the default guild remains', () => {
        const active = buildActiveGroups(groups, new Set(), new Set(['also_missing']));
        assert.deepEqual(active.map(g => g.id), [DEFAULT_GUILD_ID]);
    });

    test('accepts plain arrays as well as Sets', () => {
        const active = buildActiveGroups(groups, ['battleragers'], ['hawkmen']);
        assert.deepEqual(active.map(g => g.id), ['battleragers', 'hawkmen']);
    });
});
