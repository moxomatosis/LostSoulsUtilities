/* Lost Souls MUD Guild and Association Compatibility Database */
const LOST_SOULS_DATA = {
  "tags": {
    "Aesthete": [],
    "Agent": [
      "Champion"
    ],
    "Altruist": [
      "Evil",
      "Malevolent",
      "Neutral"
    ],
    "Artist": [],
    "Atheist": [
      "Devotional",
      "Priest"
    ],
    "Avaricious": [],
    "Caretaker": [],
    "Champion": [
      "Agent"
    ],
    "Chaotic": [
      "Neutral",
      "Ordered"
    ],
    "Conspecific": [],
    "Deceiver": [],
    "Destroyer": [],
    "Devotional": [
      "Atheist"
    ],
    "Drunkard": [
      "Ascetic"
    ],
    "Evil": [
      "Altruist",
      "Good",
      "Neutral"
    ],
    "Fanatic": [],
    "Furtive": [],
    "Good": [
      "Evil",
      "Malevolent",
      "Neutral"
    ],
    "Guard": [
      "Outlaw",
      "Wanderer"
    ],
    "Healer": [],
    "Hedonist": [
      "Ascetic"
    ],
    "Initiate": [],
    "Invested": [],
    "Libertine": [
      "Ascetic"
    ],
    "Ligatory": [],
    "Magician": [],
    "Malevolent": [
      "Altruist",
      "Good",
      "Neutral"
    ],
    "Mercenary": [],
    "Mystic": [],
    "Neutral": [
      "Altruist",
      "Chaotic",
      "Evil",
      "Good",
      "Malevolent",
      "Ordered"
    ],
    "Nihilist": [],
    "Ordered": [
      "Chaotic",
      "Neutral"
    ],
    "Outlaw": [
      "Guard"
    ],
    "Pariah": [],
    "Philosopher": [],
    "Priest": [
      "Atheist"
    ],
    "Protector": [],
    "Psychic": [],
    "Racist": [],
    "Rogue": [],
    "Ruler": [],
    "Scholar": [],
    "Scientist": [],
    "Secret": [],
    "Servant": [],
    "Sexist": [],
    "Soldier": [],
    "Vigilante": [],
    "Wanderer": [
      "Guard"
    ],
    "Warrior": [],
    "Worker": [],
    "Writer": [],
    "Ascetic": [
      "Drunkard",
      "Hedonist",
      "Libertine"
    ],
    "Discordian": []
  },
  "groups": {
    "adventurers_guild": {
      "name": "Adventurer's Guild",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "adventurers_guild"
    },
    "aedarene": {
      "name": "Aedarene",
      "alias": null,
      "type": "guild",
      "tags": [
        "Caretaker",
        "Devotional",
        "Healer",
        "Invested",
        "Priest"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "id": "aedarene"
    },
    "aisenshi": {
      "name": "Aisenshi",
      "alias": null,
      "type": "guild",
      "tags": [
        "Aesthete",
        "Mystic",
        "Ordered",
        "Warrior"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "aisenshi"
    },
    "aliavelyrae": {
      "name": "Aliavelyrae",
      "alias": null,
      "type": "guild",
      "tags": [
        "Altruist",
        "Atheist",
        "Devotional",
        "Initiate",
        "Magician",
        "Ordered",
        "Racist",
        "Warrior"
      ],
      "incompat_groups": [],
      "incompat_tags": [
        "Soldier"
      ],
      "allowed_races": [
        "dana",
        "kielleth",
        "phaethon",
        "tuatha",
        "quess",
        "lunaeala",
      ],
      "id": "aliavelyrae"
    },
    "aligned": {
      "name": "Aligned",
      "alias": null,
      "type": "guild",
      "tags": [
        "Aesthete",
        "Artist",
        "Initiate",
        "Magician",
        "Ordered",
        "Philosopher",
        "Scholar",
        "Scientist",
        "Wanderer"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "id": "aligned"
    },
    "battleragers": {
      "name": "Battleragers",
      "alias": null,
      "type": "guild",
      "tags": [
        "Devotional",
        "Fanatic",
        "Racist",
        "Warrior"
      ],
      "incompat_groups": [],
      "incompat_tags": [
        "Warrior"
      ],
      "allowed_races": [
        "thond", "domandan", "lothar", "eolon", "duergar"
      ],
      "id": "battleragers"
    },
    "brute_squad": {
      "name": "Brute Squad",
      "alias": null,
      "type": "guild",
      "tags": [
        "Drunkard",
        "Hedonist",
        "Warrior"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "brute_squad"
    },
    "coven": {
      "name": "Coven",
      "alias": null,
      "type": "guild",
      "tags": [
        "Hedonist",
        "Initiate",
        "Ligatory",
        "Magician",
        "Protector",
        "Racist",
        "Sexist"
      ],
      "incompat_groups": [
        "hawkmen"
      ],
      "incompat_tags": [
        "Good"
      ],
      "allowed_races": [
        "advenus",
        "amberite",
        "ardhalokh",
        "aviar",
        "chaosborn",
        "dana",
        "drow",
        "gezuuni",
        "human",
        "iaman",
        "kitsune",
        "kielleth",
        "quess",
        "sekh",
        "tuatha",
        "zenun"
      ],
      "id": "coven"
    },
    "deep_whisperers": {
      "name": "Deep Whisperers",
      "alias": null,
      "type": "guild",
      "tags": [
        "Ligatory",
        "Psychic",
        "Scientist"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "deep_whisperers"
    },
    "equites_serpentina": {
      "name": "Equites Serpentina",
      "alias": null,
      "type": "guild",
      "tags": [
        "Agent",
        "Guard",
        "Initiate",
        "Ligatory",
        "Protector",
        "Soldier",
        "Warrior"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "equites_serpentina"
    },
    "erisian_liberation_front": {
      "name": "Erisian Liberation Front",
      "alias": null,
      "type": "guild",
      "tags": [
        "Chaotic",
        "Devotional",
        "Discordian",
        "Initiate",
        "Invested",
        "Libertine",
        "Magician",
        "Priest"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "erisian_liberation_front"
    },
    "faradrim_ilavathar": {
      "name": "Faradrim il'Avathar",
      "alias": null,
      "type": "guild",
      "tags": [
        "Agent",
        "Good",
        "Magician",
        "Racist",
        "Rogue",
        "Secret"
      ],
      "incompat_groups": [
        "shadow_brethren"
      ],
      "incompat_tags": [],
      // TODO - All races with valathyr
      // "allowed_races": [],
      "id": "faradrim_ilavathar"
    },
    "hantaka": {
      "name": "Hantaka",
      "alias": null,
      "type": "guild",
      "tags": [
        "Deceiver",
        "Devotional",
        "Evil",
        "Mystic",
        "Rogue"
      ],
      "incompat_groups": [
        "jhan"
      ],
      "incompat_tags": [],
      "id": "hantaka"
    },
    "justicars_of_axa": {
      "name": "Justicars of Axa",
      "alias": null,
      "type": "guild",
      "tags": [
        "Devotional",
        "Fanatic",
        "Invested",
        "Ordered",
        "Soldier",
        "Warrior"
      ],
      "incompat_groups": [
        "gatherers",
        "lightbringers",
        "the_attuned"
      ],
      "incompat_tags": [
        "Avaricious",
        "Chaotic",
        "Evil",
        "Fanatic",
        "Magician",
        "Neutral"
      ],
      "id": "justicars_of_axa"
    },
    "kazarak": {
      "name": "Kazarak",
      "alias": null,
      "type": "guild",
      "tags": [
        "Destroyer",
        "Evil",
        "Servant"
      ],
      "incompat_groups": [
        "travelers"
      ],
      "incompat_tags": [],
      "id": "kazarak"
    },
    "knights_of_the_round_table": {
      "name": "Knights of the Round Table",
      "alias": null,
      "type": "guild",
      "tags": [
        "Altruist",
        "Devotional",
        "Invested",
        "Ordered",
        "Racist",
        "Warrior"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "allowed_races": [
        "amberite",
        "chaosborn",
        "advenus",
        "drow",
        "thond",
        "dana",
        "kedeth",
        "kielleth",
        "human",
        "lothar",
        "domandan",
        "quessae",
        "tuatha",
      ],
      "id": "knights_of_the_round_table"
    },
    "lightbringers": {
      "name": "Lightbringers",
      "alias": null,
      "type": "guild",
      "tags": [
        "Altruist",
        "Champion"
      ],
      "incompat_groups": [],
      "incompat_tags": [
        "Destroyer",
        "Evil",
        "Libertine",
        "Mercenary",
        "Neutral",
        "Outlaw"
      ],
      "id": "lightbringers"
    },
    "nglethk": {
      "name": "Nglethk N'keh Fl'hlgath",
      "alias": null,
      "type": "guild",
      "tags": [
        "Artist",
        "Evil",
        "Outlaw",
        "Scholar",
        "Scientist"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "nglethk"
    },
    "ordo_ignis_aeternis": {
      "name": "Ordo Ignis Aeternis",
      "alias": null,
      "type": "guild",
      "tags": [
        "Initiate",
        "Magician",
        "Scholar"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "ordo_ignis_aeternis"
    },
    "ordo_verbus_glacialis": {
      "name": "Ordo Verbus Glacialis",
      "alias": null,
      "type": "guild",
      "tags": [
        "Initiate",
        "Magician",
        "Ordered",
        "Scholar"
      ],
      "incompat_groups": [
        "the_stalkers_of_the_gate"
      ],
      "incompat_tags": [
        "Devotional",
        "Priest"
      ],
      "id": "ordo_verbus_glacialis"
    },
    "ordo_zephyrius_mutatoris": {
      "name": "Ordo Zephyrius Mutatoris",
      "alias": null,
      "type": "guild",
      "tags": [
        "Chaotic",
        "Initiate",
        "Magician",
        "Scholar"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "ordo_zephyrius_mutatoris"
    },
    "poee": {
      "name": "Paratheo-Anametamystikhood of Eris Esoteric",
      "alias": "POEE",
      "type": "guild",
      "tags": [
        "Aesthete",
        "Chaotic",
        "Devotional",
        "Initiate",
        "Libertine",
        "Magician",
        "Mystic",
        "Philosopher"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "id": "poee"
    },
    "reapers": {
      "name": "Reapers",
      "alias": null,
      "type": "guild",
      "tags": [
        "Destroyer",
        "Devotional",
        "Evil",
        "Fanatic",
        "Malevolent",
        "Outlaw",
        "Pariah",
        "Servant",
        "Warrior"
      ],
      "incompat_tags": [
        "Protector",
        "Soldier"
      ],
      "id": "reapers",
      "incompat_groups": []
    },
    "riddlemasters": {
      "name": "Riddlemasters",
      "alias": null,
      "type": "guild",
      "tags": [
        "Initiate",
        "Magician",
        "Scholar"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "riddlemasters"
    },
    "ringwielders": {
      "name": "Ringwielders",
      "alias": null,
      "type": "guild",
      "tags": [
        "Agent",
        "Initiate",
        "Magician"
      ],
      "incompat_groups": [],
      "incompat_tags": [
        "Initiate"
      ],
      "id": "ringwielders"
    },
    "shapeshifters": {
      "name": "Shapeshifters",
      "alias": null,
      "type": "guild",
      "tags": [
        "Conspecific",
        "Initiate"
      ],
      "allowed_races": [
        "kentaur"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "shapeshifters"
    },
    "shemsu_sutekh": {
      "name": "Shemsu Sutekh",
      "alias": null,
      "type": "guild",
      "tags": [
        "Devotional",
        "Invested",
        "Ligatory"
      ],
      "incompat_groups": ["hellwalkers"],
      "incompat_tags": [],
      "id": "shemsu_sutekh"
    },
    "travelers": {
      "name": "Travelers",
      "alias": null,
      "type": "guild",
      "tags": [
        "Altruist",
        "Devotional",
        "Invested",
        "Mystic",
        "Ordered",
        "Priest",
        "Wanderer",
        "Warrior"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "id": "travelers"
    },
    "tzakazhar": {
      "name": "Tzakazhar",
      "alias": null,
      "type": "guild",
      "tags": [
        "Initiate",
        "Ligatory",
        "Racist"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "tzakazhar"
    },
    "ulfhednar": {
      "name": "Ulfhednar",
      "alias": null,
      "type": "guild",
      "tags": [
        "Champion",
        "Devotional",
        "Mystic",
        "Neutral",
        "Warrior"
      ],
      "incompat_groups": [
        "aligned",
        "gauric_legion",
        "questors_of_axa",
        "the_stalkers_of_the_gate",
        "weapons_of_vengeance"
      ],
      "incompat_tags": [
        "Evil",
        "Good",
        "Neutral",
        "Servant"
      ],
      "id": "ulfhednar"
    },
    "verynvelyrae": {
      "name": "Verynvelyrae",
      "alias": null,
      "type": "guild",
      "tags": [
        "Caretaker",
        "Initiate",
        "Ligatory"
      ],
      "incompat_groups": [
        "mhezlekai"
      ],
      "incompat_tags": [
        "Fanatic"
      ],
      "id": "verynvelyrae"
    },
    "warbreakers": {
      "name": "Warbreakers",
      "alias": null,
      "type": "guild",
      "tags": [
        "Agent",
        "Caretaker",
        "Champion",
        "Conspecific",
        "Furtive",
        "Initiate",
        "Racist",
        "Rogue",
        "Warrior"
      ],
      "incompat_groups": [
        "questors_of_axa",
        "the_stalkers_of_the_gate",
        "weapons_of_vengeance"
      ],
      "incompat_tags": [
        "Agent",
        "Servant",
        "Malevolent"
      ],
      "allowed_races": [
        "human", "ardhalokh", "domandan", "kielleth", "narja", "urlnlek"
      ],
      "id": "warbreakers"
    },
    "zetesai": {
      "name": "Zetesai",
      "alias": null,
      "type": "guild",
      "tags": [
        "Initiate",
        "Ligatory",
        "Scholar",
        "Scientist",
        "Wanderer"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "id": "zetesai"
    },
    "apollonian_disciples": {
      "name": "Apollonian Disciples",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Good",
        "Healer",
        "Invested",
        "Ordered"
      ],
      "incompat_groups": [
        "erisian_liberation_front",
        "shemsu_sutekh"
      ],
      "incompat_tags": [
        "Hedonist"
      ],
      "id": "apollonian_disciples"
    },
    "aristeia": {
      "name": "Aristeia",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Warrior"
      ],
      "incompat_groups": [
        "aedarene",
        "apollonian_disciples",
        "chosen_of_vashanka",
        "haruspices",
        "synodia_lykouros"
      ],
      "incompat_tags": [
        "Nihilist"
      ],
      "id": "aristeia"
    },
    "the_attuned": {
      "name": "The Attuned",
      "alias": null,
      "type": "association",
      "tags": [
        "Initiate",
        "Ordered"
      ],
      "incompat_groups": [],
      "incompat_tags": [
        "Destroyer",
        "Fanatic",
        "Initiate"
      ],
      "id": "the_attuned"
    },
    "blades_of_scyria": {
      "name": "Blades of Scyria",
      "alias": null,
      "type": "association",
      "tags": [
        "Aesthete",
        "Caretaker",
        "Evil",
        "Furtive",
        "Initiate",
        "Secret"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "blades_of_scyria"
    },
    "brotherhood_of_wine_and_song": {
      "name": "Brotherhood of Wine and Song",
      "alias": null,
      "type": "association",
      "tags": [
        "Aesthete",
        "Drunkard",
        "Hedonist",
        "Libertine",
        "Rogue",
        "Wanderer"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "brotherhood_of_wine_and_song"
    },
    "chosen_of_vashanka": {
      "name": "Chosen of Vashanka",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Warrior"
      ],
      "incompat_groups": [
        "aristeia",
        "hantaka"
      ],
      "incompat_tags": [
        "Healer",
        "Rogue"
      ],
      "id": "chosen_of_vashanka"
    },
    "collegium_magistrorum": {
      "name": "Collegium Magistrorum",
      "alias": null,
      "type": "association",
      "tags": [
        "Initiate"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "collegium_magistrorum"
    },
    "crafty_linguists": {
      "name": "Crafty Linguists",
      "alias": null,
      "type": "association",
      "tags": [
        "Scholar"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "crafty_linguists"
    },
    "cuar_faernae": {
      "name": "Cuar Faernae",
      "alias": null,
      "type": "association",
      "tags": [
        "Good",
        "Magician",
        "Protector"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "id": "cuar_faernae"
    },
    "cult_of_sacrifice": {
      "name": "Cult of Sacrifice",
      "alias": null,
      "type": "association",
      "tags": [
        "Agent",
        "Deceiver",
        "Destroyer",
        "Evil",
        "Fanatic",
        "Mystic",
        "Servant"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "cult_of_sacrifice"
    },
    "deep_ones": {
      "name": "Deep Ones",
      "alias": null,
      "type": "association",
      "tags": [
        "Agent",
        "Deceiver",
        "Destroyer",
        "Devotional",
        "Evil",
        "Fanatic",
        "Furtive",
        "Mystic",
        "Racist",
        "Servant"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "allowed_races": ["urln"],
      "id": "deep_ones"
    },
    "fianna": {
      "name": "Fianna",
      "alias": null,
      "type": "association",
      "tags": [
        "Artist",
        "Mystic",
        "Warrior"
      ],
      "incompat_groups": [],
      "incompat_tags": [
        "Fanatic",
        "Nihilist",
        "Racist"
      ],
      "id": "fianna"
    },
    "garriks_assassins": {
      "name": "Garrik's Assassins",
      "alias": null,
      "type": "association",
      "tags": [
        "Agent",
        "Deceiver",
        "Furtive",
        "Mercenary",
        "Rogue"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "id": "garriks_assassins"
    },
    "gatherers": {
      "name": "Gatherers",
      "alias": null,
      "type": "association",
      "tags": [
        "Avaricious",
        "Devotional",
        "Evil",
        "Priest"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "id": "gatherers"
    },
    "gauric_legion": {
      "name": "Gauric Legion",
      "alias": null,
      "type": "association",
      "tags": [
        "Altruist",
        "Good",
        "Initiate",
        "Ordered",
        "Philosopher",
        "Protector",
        "Soldier"
      ],
      "incompat_groups": [
        "aliavelyrae",
        "aligned",
        "coven"
      ],
      "incompat_tags": [
        "Soldier",
        "Nihilist",
        "Sexist",
        "Atheist"
      ],
      "id": "gauric_legion"
    },
    "ghaunadauri": {
      "name": "Ghaunadauri",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Furtive",
        "Racist"
      ],
      "incompat_groups": [
        "coven"
      ],
      "incompat_tags": [
        "Hedonist"
      ],
      "allowed_races":["drow"],
      "id": "ghaunadauri"
    },
    "glomerates": {
      "name": "Glomerates",
      "alias": null,
      "type": "association",
      "tags": [
        "Caretaker",
        "Initiate",
        "Magician",
        "Secret"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "id": "glomerates"
    },
    "hawkmen": {
      "name": "Hawkmen",
      "alias": null,
      "type": "association",
      "tags": [
        "Guard",
        "Protector",
        "Racist"
      ],
      "incompat_groups": [],
      "incompat_tags": [
        "Guard",
        "Outlaw",
        "Wanderer"
      ],
      "id": "hawkmen"
    },
    "hellwalkers": {
      "name": "Hellwalkers",
      "alias": null,
      "type": "association",
      "tags": [
        "Atheist",
        "Conspecific",
        "Initiate",
        "Ordered",
        "Outlaw",
        "Pariah",
        "Wanderer"
      ],
      "allowed_races": ["urga"],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "hellwalkers"
    },
    "hethar_karad": {
      "name": "Hethar Karad",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Racist"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "hethar_karad"
    },
    "inducted": {
      "name": "Inducted",
      "alias": null,
      "type": "association",
      "tags": [
        "Evil",
        "Initiate",
        "Magician",
        "Mystic",
        "Nihilist",
        "Ordered"
      ],
      "incompat_groups": [
        "tukrr"
      ],
      "incompat_tags": [],
      "id": "inducted"
    },
    "kazarzeth": {
      "name": "Kazarzeth",
      "alias": null,
      "type": "association",
      "tags": [
        "Servant"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "id": "kazarzeth"
    },
    "legion_of_dynamic_discord": {
      "name": "Legion of Dynamic Discord",
      "alias": null,
      "type": "association",
      "tags": [
        "Chaotic",
        "Devotional",
        "Libertine"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "legion_of_dynamic_discord"
    },
    "losthaven_guard": {
      "name": "Losthaven Guard",
      "alias": null,
      "type": "association",
      "tags": [
        "Guard",
        "Protector"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "losthaven_guard"
    },
    "maidens_of_the_spear": {
      "name": "Maidens of the Spear",
      "alias": null,
      "type": "association",
      "tags": [
        "Sexist",
        "Wanderer",
        "Warrior"
      ],
      "incompat_groups": [
        "aligned"
      ],
      "incompat_tags": [
        "Drunkard",
        "Hedonist",
        "Soldier"
      ],
      "allowed_genders": ["Female"],
      "id": "maidens_of_the_spear"
    },
    "mhezlekai": {
      "name": "Mhezlekai",
      "alias": null,
      "type": "association",
      "tags": [
        "Conspecific",
        "Devotional",
        "Fanatic",
        "Protector",
        "Servant"
      ],
      "allowed_races": ["shoggoth"],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "mhezlekai"
    },
    "minervas_haruspices": {
      "name": "Minerva's Haruspices",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Magician",
        "Ordered",
        "Secret"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "minervas_haruspices"
    },
    "ollin_tonatiuh": {
      "name": "Ollin Tonatiuh",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Evil"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "ollin_tonatiuh"
    },
    "questors_of_axa": {
      "name": "Questors of Axa",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Ordered"
      ],
      "incompat_groups": [
      ],
      "incompat_tags": [
        "Deceiver",
        "Drunkard",
        "Furtive",
        "Hedonist",
        "Libertine"
      ],
      "id": "questors_of_axa"
    },
    "rebels_of_syllyac": {
      "name": "Rebels of Syllyac",
      "alias": null,
      "type": "association",
      "tags": [
        "Secret"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "rebels_of_syllyac"
    },
    "shadow_brethren": {
      "name": "Shadow Brethren",
      "alias": null,
      "type": "association",
      "tags": [
        "Deceiver",
        "Devotional",
        "Furtive",
        "Rogue",
        "Secret"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "shadow_brethren"
    },
    "sodality_of_the_nine_spoked_wheel": {
      "name": "Sodality of the Nine-Spoked Wheel",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Drunkard",
        "Evil"
      ],
      "incompat_groups": ["aedarene", "synodia_lykouros"],
      "incompat_tags": [],
      "id": "sodality_of_the_nine_spoked_wheel"
    },
    "soulburners": {
      "name": "Soulburners",
      "alias": null,
      "type": "association",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "soulburners"
    },
    "steel_serpents": {
      "name": "Steel Serpents",
      "alias": null,
      "type": "association",
      "tags": [
        "Guard",
        "Protector",
        "Soldier"
      ],
      "incompat_groups": [
        "aliavelyrae"
      ],
      "incompat_tags": [
        "Soldier"
      ],
      "id": "steel_serpents"
    },
    "synodia_lykouros": {
      "name": "Synodia Lykouros",
      "alias": null,
      "type": "association",
      "tags": [
        "Caretaker",
        "Conspecific",
        "Devotional",
        "Initiate",
        "Mystic",
        "Protector",
        "Warrior"
      ],
      "incompat_groups": ["shemsu_sutekh"],
      "incompat_tags": [],
      "allowed_races": ["garou", "human", "kitsune"],
      "id": "synodia_lykouros"
    },
    "synousia_algesis": {
      "name": "Synousia Algesis",
      "alias": null,
      "type": "association",
      "tags": [
        "Aesthete",
        "Devotional",
        "Hedonist",
        "Malevolent",
        "Racist",
        "Sexist"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "excluded_races": [
        "duergar",
        "nyloc",
        "srazh",
        "ardhalokh",
        "rachnei",
        "svirfneblin",
        "llelimin"
      ],
      "id": "synousia_algesis"
    },
    "the_agnihotri": {
      "name": "The Agnihotri",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "the_agnihotri"
    },
    "the_explorers": {
      "name": "The Explorers",
      "alias": null,
      "type": "association",
      "tags": [
        "Wanderer",
        "Writer"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "the_explorers"
    },
    "the_pantarchic_church_of_yehovah": {
      "name": "The Pantarchic Church of Yehovah",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Good",
        "Ordered",
        "Racist",
        "Sexist"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "allowed_races": [
        "advenus",
        "amberite",
        "aviar",
        "chaosborn",
        "dana",
        "domandan",
        "drow",
        "duergar",
        "gnome",
        "human",
        "kedeth",
        "kielleth",
        "llelimin",
        "lothar",
        "lunaeala",
        "phaethon",
        "quess",
        "svirfneblin",
        "thond",
        "tuatha",
        "iaman"
      ],
      "id": "the_pantarchic_church_of_yehovah"
    },
    "the_stalkers_of_the_gate": {
      "name": "The Stalkers of the Gate",
      "alias": null,
      "type": "association",
      "tags": [
        "Agent",
        "Neutral",
        "Servant"
      ],
      "incompat_groups": [],
      "incompat_tags": [
        "Fanatic",
        "Servant"
      ],
      "id": "the_stalkers_of_the_gate"
    },
    "wandslingers": {
      "name": "Wandslingers",
      "alias": null,
      "type": "association",
      "tags": [
        "Protector",
        "Vigilante"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "id": "wandslingers"
    },
    "wardens": {
      "name": "Wardens",
      "alias": null,
      "type": "association",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "wardens"
    },
    "weapons_of_vengeance": {
      "name": "Weapons of Vengeance",
      "alias": null,
      "type": "association",
      "tags": [
        "Evil",
        "Servant",
        "Soldier"
      ],
      "incompat_groups": [],
      "incompat_tags": [
        "Guard"
      ],
      "id": "weapons_of_vengeance"
    },
    "ygellethites": {
      "name": "Ygellethites",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Furtive",
        "Libertine",
        "Racist"
      ],
      "allowed_races": ["drochnei", "drow", "rachnei"],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "ygellethites"
    },
    "ordo_purus_magicae": {
      "name": "Ordo Purus Magicae",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "ordo_purus_magicae"
    },
    "the_syndicate": {
      "name": "The Syndicate",
      "alias": null,
      "type": "guild",
      "tags": [
        "Deceiver",
        "Furtive",
        "Outlaw",
        "Rogue",
        "Secret"
      ],
      "incompat_groups": ["aristeia"],
      "incompat_tags": ["Protector"],
      "id": "the_syndicate"
    },
    "archmagus": {
      "name": "Archmagus",
      "alias": null,
      "type": "association",
      "tags": [
        "Magician"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "archmagus"
    },
    "followers_of_apollo": {
      "name": "Followers of Apollo",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Good",
        "Healer",
        "Invested",
        "Ordered"
      ],
      "incompat_groups": [
        "apollonian_disciples",
        "erisian_liberation_front",
        "shemsu_sutekh",
        "aristeia"
      ],
      "incompat_tags": [
        "Hedonist"
      ],
      "id": "followers_of_apollo"
    },
    "haruspices": {
      "name": "Haruspices",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Magician",
        "Ordered",
        "Secret"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "haruspices"
    },
    "storm_walkers": {
      "name": "Storm Walkers",
      "alias": null,
      "type": "association",
      "tags": [
        "Conspecific",
        "Initiate",
        "Warrior"
      ],
      "allowed_races": ["zuth"],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "storm_walkers"
    },
    "cult_of_decay": {
      "name": "Cult of Decay",
      "alias": null,
      "type": "association",
      "tags": [
        "Chaotic",
        "Destroyer",
        "Devotional",
        "Malevolent",
        "Outlaw",
        "Pariah",
        "Secret"
      ],
      "incompat_groups": [],
      "incompat_tags": [],

      "id": "cult_of_decay"
    }
  }
};
