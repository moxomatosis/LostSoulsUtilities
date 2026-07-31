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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [
        "You are spiritually disjoined, and cannot will benisons in such a state."
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
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": [],
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

      "raw_incompat_lines": [
        "Celeborn states, &lt;= You cannot join the Aliavelyrae because you are a soldier. =&gt;",
        "Gray-skinned male dana states, &lt;= I'm sorry, Drisanna, but a drow cannot become an Aliavelyr. =&gt; to you in Sperethiel."
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
      "raw_incompat_lines": [
        "These are in addition to the requirements to be  Attuned , as one cannot be Aligned without also being Attuned."
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
      "incompat_groups": [],
      "incompat_tags": [
        "Warrior"
      ],
      "allowed_races": [
        "thond", "domandan", "lothar", "eolon", "duergar"
      ],
      "raw_incompat_lines": [
        "will increase.  Be aware, however, that even the best warrior cannot sustain",
        "You cannot see anything."
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [
        "6   Incompatible Affiliations and Other Restrictions",
        "Sisters of the Coven have the ability to bond with avian totemic familiars via witchcraft. It is a good idea to  trust  your familiar upon bonding, to be sure it is able to keep up with you while moving. Note that this does not help if your character is flying and the familiar cannot, or in some oth...",
        "Incompatible Affiliations and Other Restrictions",
        "Coven members are also barred from wearing heavy armor, so while one can be a member of the  Hawkmen  one cannot wear the helmet."
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [
        "You cannot join Faradrim il'Avathar because you are a practitioner of deception. - Shadow Brethren may not join"
      ],
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
      "raw_incompat_lines": [
        "Praying to Kali at her altar below  Jhan  (syntax 'pray to kali' case sensitive, presumed a bug that you cannot 'pray to Kali') at various levels of favour will grant you various boons."
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
      "raw_incompat_lines": [
        "The price of such power, such righteous might, is not cheap.  Upon enlistment with the Justicars, one ceases to be an individual.  All the Justicars are a lesser part of a whole, something which is much larger then themselves.  Each Justicar is expected to follow the orders of those above them in th...",
        "Lord Marshall Strom Thromgald says, -You cannot wield a Shield of Axa, and are therefore unfit to become a Justicar.- to you.",
        "The following Affiliations are incompatible with Justies, some you could technically join but they would prevent you from using Justicar abilities due to (mostly) God conflicts",
        "Incompatible with  magicians  specifically. Justicars are  fanatics  and thus incompatible with the  Attuned . Also incompatible with  Avaricious  types ( Gatherers ).",
        "Incompatible with  Lightbringers : \"The golden-skinned male human says, -You cannot wield a Shield of Axa, and are therefore unfit to become a Justicar.- to you.\""
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
      "raw_incompat_lines": [
        "Incompatible Associations",
        "Kazaraks cannot receive  Travelers ' challenges.",
        "Shoggoths cannot change their sentience with Hurgkthorg"
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
      "raw_incompat_lines": [
        "true Knight.  I... cannot gainsay that any longer.'"
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
      "raw_incompat_lines": [
        "Exclusive with neutral, evil, sadist, mercenary, outlaw, destroyer, and libertine affiliation types.",
        "You cannot join the Lightbringers because you are a libertine."
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [
        "9   Incompatible Associations",
        "OVG is currently hardcoded to be incompatible with the Priest affiliation type, but allows the Devotional affiliation type.",
        "Incompatible Associations",
        "The white-skinned male human says, [/\\ You cannot join  The Stalkers of the Gate  because you are a proponent of order. \\/] to you."
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [
        "Malaclypse the Younger growls, =You cannot join the Paratheo-Anametamystikhood of Eris Esoteric"
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
      "incompat_tags": [
        "Protector",
        "Soldier"
      ],
      "raw_incompat_lines": [
        "You cannot join the Reapers because you are a protector. ( Mhezlekai )",
        "Xar states, \"As a Reaper, you could not become a soldier by joining the Weapons of Vengeance, reaper.\" in Siglaryn.",
        " Janid intones, [- As a Reaper, you could not become a scholar by joining the Crafty Linguists. -] to you.",
        "The priest of Jinx says, $As a Reaper, you could not become a seeker of gold by joining the Jinxian Plutocracy.$ to you."
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [
        "Rings can resize if you grow/shrink, in order to trigger the resizing, \"will my ring of power to adjust to my shape\". The effect should cost 100 spiritual points to initiate, and cannot be performed when Ahrikol is not in possession of the One Ring or if the RW is in a no-magic area."
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
      "raw_incompat_lines": [],
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
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": [
        "5   Incompatible Associations",
        "Incompatible Associations"
      ],
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
      "raw_incompat_lines": [
        "calm state to invoke Ganesha; you cannot invoke him while moving around or",
        "obstacle and a requirement, but also a taboo and a forfeit.  The taboo is something that must not be",
        "Pilgrimage ( Level 25+ ) - The Temple of Ganesha relocates to a random mountain range, you get teleported to a location which you cannot teleport to or from and you are enchanted to prevent all teleporting in your immediate vicinity.  The goal is to locate the temple.",
        "Unarmed - You cannot wield weapons of any type"
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
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [
        "Ulfhednar are a neutral aligned guild, which means they cannot join any order/chaos or good/evil associations, which rules out choices like  Attuned ,  Gauric Legion ,  Questors of Axa ,  Weapons of Vengeance  etc.",
        "They cannot be servants and therefore cannot join  The Stalkers of the Gate :"
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
      "raw_incompat_lines": [
        "Mhezlekai  - \"You cannot join the Verynvelyrae because you are a fanatic.\""
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
      "raw_incompat_lines": [
        "Aviar and advenus cannot join.",
        "Warbreakers cannot have a second master. This excludes them from being  agents  or  servants   to anyone else (like  The Stalkers of the Gate  or  Weapons of Vengeance ).",
        "Warbreakers cannot join  Questors of Axa  because Warbreakers are furtive."
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
      "raw_incompat_lines": [
        "The opalescent-white-skinned imp quietly sez to Gwale something you cannot",
        "The opalescent-white-skinned male imp quietly sez to Tlatzazoca something you cannot hear in Nilasnai.",
        "The opalescent-white-skinned male imp quietly sez to Tlatzazoca something you cannot hear in halting, squeakingly-accented Nilasnai.",
        "Determining the exact mechanism for discovering new morphologies, a comprehensive list of morphologies, and the criteria for unlocking each of them is a work in progress. Initial observations indicate that morphology discoveries are triggered by bond growth events that occur while the zetesai meets ..."
      ],
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
      "raw_incompat_lines": [
        "Incompatible with  Erisian Liberation Front .",
        "Cannot join  Shemsu Sutekh",
        "Apollo states, |- You cannot join the Apollonian Disciples because you are a hedonist. -|",
        "Apollo states, |- The worship of Apollo does not allow the veneration of Cthulhu, so you cannot",
        "Apollo states, |- The worship of Aristes does not allow the veneration of Apollo, so you cannot"
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
      "raw_incompat_lines": [
        "Aedarene : Homer says, .+\\ +> The worship of Aeda does not allow the veneration of Aristes, so you cannot join Aristeia. &lt;+ /+. to you.",
        "Apollonian Disciples : Homer says, .+\\ +&gt; The worship of Apollo does not allow the veneration of Aristes, so you cannot join Aristeia. &lt;+ /+. to you.",
        "Chosen of Vashanka : Homer says, .+\\ +&gt; The worship of Aristes does not allow the veneration of Vashanka, so you cannot join Aristeia. &lt;+ /+. to you.",
        "Haruspices : Homer says, .+\\ +&gt; The worship of Athena does not allow the veneration of Aristes, so you cannot join Aristeia. &lt;+ /+. to you.",
        "Infucted : Homer says, .+\\ +&gt; You cannot join Aristeia because you are a nihilist. &lt;+ /+. to you.",
        "Synodia Lykouros : Homer says, .+\\ +&gt; The worship of Aeda does not allow the veneration of Aristes, so you cannot join Aristeia. &lt;+ /+. to you.",
        "Reaper : Homer says, .+\\ +&gt; You cannot join Aristeia because you are a proponent of malevolence. &lt;+ /+. to you.",
        "There are certain achievements that mess up your ability to fight effectively while also granting at least somewhat useful rewards. So why not combine them all and suffer efficiently? Analgesia can easily be induced via opiate abuse. Carrying a large amount of weight is trivial to achieve and can be..."
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
      "raw_incompat_lines": [
        "One cannot cease being attuned while that attunement is affording one a measure of demonic blood.",
        "One cannot simply will away attunement in a moment; one must first work it out of one's essence.",
        "Cannot be  destroyers  or  fanatics .",
        "Clerics are prohibited from joining, as they are incompatible with the Initiate affiliation type."
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [
        "Molin says, &lt;| The worship of Athena does not allow the veneration of Ares, so you cannot join the Chosen of Vashanka. |&gt; to you.",
        "Molin says, &lt;| You cannot join the Chosen of Vashanka because you are a healer. |&gt; to you.",
        "Molin says, \"You cannot join the Chosen of Vashanka because you are a practitioner of deception and a rogue.\" to you. ( Hantaka )",
        "Vashanka, so you cannot join the Chosen of Vashanka.\" to Sir Vetius. ( Aristeia )"
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [],
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
      "incompat_groups": [
        "fianna"
      ],
      "incompat_tags": [],
      "raw_incompat_lines": [
        "Eaerandyl states, &gt;&gt;-&gt; You cannot join the Cuar Faernae because you are a proponent of chaos. &lt;-&lt;&lt; to you."
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
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [
        "5   Incompatibilities",
        "Incompatibilities",
        "You cannot join if you are a member of a  nihilist ,  racist , or  fanatic  association."
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
      "raw_incompat_lines": [
        "4   Incompatibilities",
        "Incompatibilities"
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
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": [
        "However, while in debt, the second method cannot be used."
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
      "incompat_groups": [
        "aliavelyrae",
        "aligned",
        "coven"
      ],
      "incompat_tags": [
        "Soldier"
      ],
      "raw_incompat_lines": [
        "in ways that ordinary mortals cannot fathom.  In particular, Gauric Legionnaires pursue harmony and balance of both body and spirit",
        "9   Exclusions",
        "Exclusions",
        "Aliavelyrae ,  Coven , and  Aligned  cannot become soldiers and thus cannot join the Gauric Legion."
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
      "raw_incompat_lines": [
        "You cannot specialize in ownership:",
        "Ralgor asserts, [| You cannot join the Ghaunadauri because you are a hedonist. |] to you in Zadjalin. -- Cannot join as a member of the Coven"
      ],
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
      "raw_incompat_lines": [
        "Note: Step 3 cannot be specified in \"without\" because the parser splits on \"and\"",
        "\"You cannot cast nihilsphaera creo because you already have a nihilsphaera.\"",
        "\"You cannot cast nihilsphaera creo because your fresh mutilated giant spider corpse is not a spinneret.\"",
        "\"You cannot cast nihilsphaera creo because your fresh spinneret is not large enough of a spinneret.\"",
        "\"You cannot cast nihilsphaera recro because your nihilsphaera is already extant.\""
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
      "incompat_groups": [],
      "incompat_tags": [
        "Guard",
        "Outlaw",
        "Wanderer"
      ],
      "raw_incompat_lines": [
        "Hawkmen are  Guards  and therefore are incompatible with  Outlaw  and  Wanderer  affiliations.  (This precludes many guilds and associations so double-check compatibles before you create an incarnos!)"
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [],
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
      "incompat_tags": [
        "Chaotic",
        "Good"
      ],
      "raw_incompat_lines": [
        "Joining the Inducted is challenging and requires a significant amount of effort, and is permanent.  Once you join, you are forever bound in servitude to  Tukrr  - the process warps one's mind and spirit in ways that cannot be undone.",
        "The Inducted are forbidden to specialize in  Sephirotic Affinity , and are exclusive with Chaotic and Good affiliation types."
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
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": [
        "It can also blast you with energy, which zots chakras, debuff you, sap your SP, and all of the above things plus these also happen when you do not feed it enough (if at all; that happens when you cannot wield it, for example).",
        "The blade is a lesser kazar and cannot bond to a greater kazar.",
        "You cannot bond with a blade so unwieldy to use."
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
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [
        "being that you cannot marry or be married while a Maiden.  If you ever do get",
        "Discipline \t\t\t1..+5\t\tWillpower (might be removed, cannot verify on an Aligned)",
        "Awareness \t\t\t1..+5\t\tPerception (might be removed, cannot verify on an Aligned)",
        "Sulin says, ++[ You cannot join the Maidens of the Spear because you are a hedonist. ]++ to you.",
        "Sulin says, ++[ You cannot join the Maidens of the Spear because you are a drunkard. ]++ to you.",
        "Maidens are incompatible with  soldier  affiliations."
      ],
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [],
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
        "tzakazhar"
      ],
      "incompat_tags": [
        "Deceiver",
        "Drunkard",
        "Furtive",
        "Hedonist",
        "Libertine"
      ],
      "raw_incompat_lines": [
        "=You cannot join the Questors of Axa because you are a hedonist.",
        "=You cannot join the Questors of Axa because you are a drunkard, a hedonist, and a libertine.",
        "=You cannot join the Questors of Axa because you are a practitioner of deception.",
        "=You cannot join the Questors of Axa because you are a user of furtive means.",
        "=The worship of Yehovah does not allow the veneration of any other deity; you cannot join the Questors of Axa because you would then also worship Axa.",
        "=The worship of Axa does not allow the veneration of Isskarazh, so you cannot join the Questors of Axa.(no Heth Karad, but Tzakazhar fine.)"
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [],
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
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": [
        "Note that Lupines cannot join this association:",
        "sho you cannot join the SHodality of the Nine-SHpoked Wheel.) at you."
      ],
      "id": "sodality_of_the_nine_spoked_wheel"
    },
    "soulburners": {
      "name": "Soulburners",
      "alias": null,
      "type": "association",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [
        "Being  soldiers ,  Aliavelyrae  will not allow Steel Serpents among their order (cannot join SS or join Aliavelyrae if already a SS)."
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
      "incompat_groups": [],
      "incompat_tags": [],
      "allowed_races": ["garou", "human", "kitsune"],
      "raw_incompat_lines": [
        "5   Incompatibilities",
        "Incompatibilities",
        "The gray-streaked brown male garou growls, 'The worship of Aeda does not allow the veneration of Sutekh, so you cannot"
      ],
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
      "raw_incompat_lines": [
        "Apparently, there is a list of forbidden races. I am unsure about the other races, but  Svirfneblin  &amp;  Llelimin  cannot join. If you try, you will get the above message."
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [
        "1   Affiliation Incompatibilities",
        "Affiliation Incompatibilities",
        "Kalyxes says, [/\\ You cannot join the Stalkers of the Gate because you are a fanatic. \\/] to you.",
        "Kalyxes says, [/\\ You cannot join the Stalkers of the Gate because you are a proponent of order. \\/] to you.",
        "Kalyxes says, [/\\ You cannot become a Stalker of the Gate without a head. \\/] to you.",
        "Kalyxes says, [/\\ You cannot join the Stalkers of the Gate because you are a servant and a"
      ],
      "id": "the_stalkers_of_the_gate"
    },
    "the_touched": {
      "name": "The Touched",
      "alias": null,
      "type": "association",
      "tags": [
        "Drunkard",
        "Psychic"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": [
        "Set a nickname on a random autonomon, try to sense them by nickname, get \"You concentrate on sensing the latent wild talents within Mindblaster Bez.\" // \"You cannot perceive mindblaster bez.\" - since `for` prefers to use nicknames, this makes batch-sensing difficult."
      ],
      "id": "the_touched"
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
      "raw_incompat_lines": [
        "You have to be a size that can actually wield wands - if you're too big to hold a wand you cannot join. If you're a sneaky snake and shrink yourself to join, it will kick you out when you next log in!",
        "Please remove any vigils that cannot be set -- vigils closer to the bottom are largely speculative"
      ],
      "id": "wandslingers"
    },
    "wardens": {
      "name": "Wardens",
      "alias": null,
      "type": "association",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": [],
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
        "Good",
        "Guard"
      ],
      "raw_incompat_lines": [
        "With the advent of some of the more recent WoV changes your runes can now lash out at your opponent while you are fighting, while good (who doesn't love extra damage!) this can and probably  WILL  kill you and destroy a significant amount of your equipment if your opponent has an   Amulet of Magick ...",
        "Xar states, \"You cannot join the Weapons of Vengeance because you are a guard, kielleth.\" in Siglaryn."
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
      "raw_incompat_lines": [],
      "id": "ygellethites"
    },
    "ordo_purus_magicae": {
      "name": "Ordo Purus Magicae",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": [],
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
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": [
        "4   Incompatible Associations",
        "Incompatible Associations"
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
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": [],
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
        "shemsu_sutekh"
      ],
      "incompat_tags": [
        "Hedonist"
      ],
      "raw_incompat_lines": [
        "Incompatible with  Erisian Liberation Front .",
        "Cannot join  Shemsu Sutekh",
        "Apollo states, |- You cannot join the Apollonian Disciples because you are a hedonist. -|",
        "Apollo states, |- The worship of Apollo does not allow the veneration of Cthulhu, so you cannot",
        "Apollo states, |- The worship of Aristes does not allow the veneration of Apollo, so you cannot"
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [],
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
      "raw_incompat_lines": [],
      "id": "cult_of_decay"
    }
  }
};
