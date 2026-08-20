/**
 * Race restriction tests.
 *
 * Regression coverage for the reported bug: "I can join Hawkmen without being
 * a Hawkman." Root cause: allowed_races / excluded_races store race IDs while
 * the engine compared them against race *names*, so no race ever matched.
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { LOST_SOULS_DATA } from './helpers/load-data.js';
import { checkCompatibility, buildActiveGroups } from '../engine.js';

const groups = LOST_SOULS_DATA.groups;

/** Run the engine exactly like the app does for a selection of guilds + associations. */
function checkFor(assocIds = [], raceId = 'Unspecified', guildIds = []) {
    const active = buildActiveGroups(
        groups,
        new Set(guildIds),
        new Set(assocIds),
    );
    return checkCompatibility(active, raceId, 'Unspecified');
}

const raceConflicts = conflicts => conflicts.filter(c => c.type === 'group_race');

describe('race restrictions', () => {
    test('REGRESSION: Hawkmen cannot be joined by a non-Hawkman (human)', () => {
        const conflicts = checkFor(['hawkmen'], 'human');
        assert.ok(
            raceConflicts(conflicts).some(c => c.reason === 'Race restricted'),
            `expected a race restriction for human + Hawkmen, got: ${JSON.stringify(conflicts)}`,
        );
    });

    test('REGRESSION: Aviar (the Hawkman race) CAN join Hawkmen', () => {
        const conflicts = checkFor(['hawkmen'], 'aviar');
        assert.deepEqual(
            raceConflicts(conflicts),
            [],
            `Aviar should be allowed into Hawkmen, got: ${JSON.stringify(conflicts)}`,
        );
    });

    test('hawkmen + no race selected (Unspecified) skips the race check', () => {
        const conflicts = checkFor(['hawkmen'], 'Unspecified');
        assert.deepEqual(raceConflicts(conflicts), []);
    });

    test('allowed race still reports OTHER unrelated conflicts', () => {
        // Aviar + Hawkmen + Equites Serpentina (Guard tag) conflicts via assoc rules,
        // but must NOT produce a race conflict.
        const conflicts = checkFor(['hawkmen', 'equites_serpentina'], 'aviar');
        assert.deepEqual(raceConflicts(conflicts), []);
        assert.ok(conflicts.length > 0, 'expected unrelated non-race conflicts');
    });

    test('hellwalkers require urga', () => {
        assert.deepEqual(raceConflicts(checkFor(['hellwalkers'], 'urga')), []);
        assert.ok(
            raceConflicts(checkFor(['hellwalkers'], 'aviar')).some(c => c.reason === 'Race restricted'),
            'aviar should be rejected from hellwalkers',
        );
    });

    test('deep_ones require urln', () => {
        assert.deepEqual(raceConflicts(checkFor(['deep_ones'], 'urln')), []);
        assert.ok(raceConflicts(checkFor(['deep_ones'], 'human')).length > 0);
    });

    test('mhezlekai require shoggoth', () => {
        assert.deepEqual(raceConflicts(checkFor(['mhezlekai'], 'shoggoth')), []);
        assert.ok(raceConflicts(checkFor(['mhezlekai'], 'drow')).length > 0);
    });

    test('ghaunadauri require drow', () => {
        assert.deepEqual(raceConflicts(checkFor(['ghaunadauri'], 'drow')), []);
        assert.ok(raceConflicts(checkFor(['ghaunadauri'], 'aviar')).length > 0);
    });

    test('synodia_lykouros allow garou, human, and kitsune', () => {
        for (const race of ['garou', 'human', 'kitsune']) {
            assert.deepEqual(
                raceConflicts(checkFor(['synodia_lykouros'], race)),
                [],
                `race ${race} should be allowed into synodia_lykouros`,
            );
        }
        assert.ok(raceConflicts(checkFor(['synodia_lykouros'], 'drow')).length > 0);
    });

    test('storm_walkers require zuth', () => {
        assert.deepEqual(raceConflicts(checkFor(['storm_walkers'], 'zuth')), []);
        assert.ok(raceConflicts(checkFor(['storm_walkers'], 'aviar')).length > 0);
    });

    test('ygellethites allow drochnei, drow, and rachnei', () => {
        for (const race of ['drochnei', 'drow', 'rachnei']) {
            assert.deepEqual(raceConflicts(checkFor(['ygellethites'], race)), []);
        }
        assert.ok(raceConflicts(checkFor(['ygellethites'], 'human')).length > 0);
    });

    test('guilds are restricted too: battleragers allow eolon but not aviar', () => {
        assert.deepEqual(raceConflicts(checkFor([], 'eolon', ['battleragers'])), []);
        assert.ok(raceConflicts(checkFor([], 'aviar', ['battleragers'])).length > 0);
    });

    test('guilds are restricted too: shapeshifters require kentaur', () => {
        assert.deepEqual(raceConflicts(checkFor([], 'kentaur', ['shapeshifters'])), []);
        assert.ok(raceConflicts(checkFor([], 'human', ['shapeshifters'])).length > 0);
    });

    test('excluded_races: synousia_algesis excludes duergar but allows aviar', () => {
        const duergar = raceConflicts(checkFor(['synousia_algesis'], 'duergar'));
        assert.ok(
            duergar.some(c => c.reason === 'Race excluded'),
            `expected an exclusion conflict for duergar, got: ${JSON.stringify(duergar)}`,
        );
        assert.deepEqual(raceConflicts(checkFor(['synousia_algesis'], 'aviar')), []);
    });

    test('race ID missing from races.js does not crash the engine (quessae)', () => {
        // knights_of_the_round_table lists "quessae" in allowed_races but races.js
        // has no such race; the name lookup must fall back to the raw ID.
        assert.deepEqual(raceConflicts(checkFor([], 'quessae', ['knights_of_the_round_table'])), []);
        const conflicts = checkFor([], 'aviar', ['knights_of_the_round_table']);
        const race = raceConflicts(conflicts);
        assert.equal(race.length, 1);
        assert.match(race[0].desc, /quessae/);
    });

    test('Adventurer\'s Guild (default) imposes no race restrictions', () => {
        for (const race of ['aviar', 'human', 'drow', 'urga']) {
            assert.deepEqual(raceConflicts(checkFor([], race)), [], `default guild + ${race}`);
        }
    });
});
