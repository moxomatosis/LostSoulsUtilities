/* Lost Souls MUD Guild and Association Compatibility Database */
const LOST_SOULS_DATA = {
  "tags": [
    "Aesthete",
    "Agent",
    "Altruist",
    "Artist",
    "Atheist",
    "Avaricious",
    "Caretaker",
    "Champion",
    "Chaotic",
    "Conspecific",
    "Deceiver",
    "Destroyer",
    "Devotional",
    "Drunkard",
    "Evil",
    "Fanatic",
    "Furtive",
    "Good",
    "Guard",
    "Healer",
    "Hedonist",
    "Initiate",
    "Invested",
    "Libertine",
    "Ligatory",
    "Magician",
    "Malevolent",
    "Mercenary",
    "Mystic",
    "Neutral",
    "Nihilist",
    "Ordered",
    "Outlaw",
    "Pariah",
    "Philosopher",
    "Priest",
    "Protector",
    "Psychic",
    "Racist",
    "Rogue",
    "Ruler",
    "Scholar",
    "Scientist",
    "Secret",
    "Servant",
    "Sexist",
    "Soldier",
    "Vigilante",
    "Wanderer",
    "Warrior",
    "Worker",
    "Writer",
    "Ascetic",
    "Discordian"
  ],
  "groups": {
    "adventurers_guild": {
      "name": "Adventurer's Guild",
      "alias": null,
      "type": "guild",
      "tags": [],
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
      "id": "reapers"
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
      "id": "shemsu_sutekh"
    },
    "travelers": {
      "name": "Travelers",
      "warning": "Forbids the worship of deities Ganesha does not have a prior connection with.",
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
      "id": "zetesai"
    },
    "apollonian_disciples": {
      "name": "Apollonian Disciples",
      "alias": "Followers Of Apollo",
      "type": "association",
      "tags": [
        "Devotional",
        "Good",
        "Healer",
        "Invested",
        "Ordered"
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
      "id": "chosen_of_vashanka"
    },
    "collegium_magistrorum": {
      "name": "Collegium Magistrorum",
      "alias": null,
      "type": "association",
      "tags": [
        "Initiate"
      ],
      "id": "collegium_magistrorum"
    },
    "crafty_linguists": {
      "name": "Crafty Linguists",
      "alias": null,
      "type": "association",
      "tags": [
        "Scholar"
      ],
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
      "allowed_races": ["aviar"],
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
      "id": "inducted"
    },
    "kazarzeth": {
      "name": "Kazarzeth",
      "alias": null,
      "type": "association",
      "tags": [
        "Servant"
      ],
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
      "id": "mhezlekai"
    },
    "ollin_tonatiuh": {
      "name": "Ollin Tonatiuh",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Evil"
      ],
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
      "id": "questors_of_axa"
    },
    "rebels_of_syllyac": {
      "name": "Rebels of Syllyac",
      "alias": null,
      "type": "association",
      "tags": [
        "Secret"
      ],
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
      "id": "sodality_of_the_nine_spoked_wheel"
    },
    "soulburners": {
      "name": "Soulburners",
      "alias": null,
      "type": "association",
      "tags": [],
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
      "id": "the_explorers"
    },
    "pantarchic_church": {
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
      "id": "pantarchic_church"
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
      "id": "wandslingers"
    },
    "wardens": {
      "name": "Wardens",
      "alias": null,
      "type": "association",
      "tags": [],
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
      "id": "ygellethites"
    },
    "ordo_purus_magicae": {
      "name": "Ordo Purus Magicae",
      "alias": null,
      "type": "guild",
      "tags": [],
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
      "id": "the_syndicate"
    },
    "archmagus": {
      "name": "Archmagus",
      "alias": null,
      "type": "association",
      "tags": [
        "Magician"
      ],
      "id": "archmagus"
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
      "id": "cult_of_decay"
    }
  }
};
