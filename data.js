// Lost Souls MUD Guild and Association Compatibility Database
const LOST_SOULS_DATA = {
  "tags": {
    "Aesthete": [],
    "Agent": [],
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
    "Champion": [],
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
    "Adventurer's Guild": {
      "name": "Adventurer's Guild",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Aedarene": {
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
      ]
    },
    "Aisenshi": {
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
      "raw_incompat_lines": []
    },
    "Aliavelyrae": {
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
      "raw_incompat_lines": [
        "Celeborn states, &lt;= You cannot join the Aliavelyrae because you are a soldier. =&gt;",
        "Gray-skinned male dana states, &lt;= I'm sorry, Drisanna, but a drow cannot become an Aliavelyr. =&gt; to you in Sperethiel."
      ]
    },
    "Aligned": {
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
      ]
    },
    "Battleragers": {
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
      "raw_incompat_lines": [
        "will increase.  Be aware, however, that even the best warrior cannot sustain",
        "You cannot see anything."
      ]
    },
    "Brute Squad": {
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
      "raw_incompat_lines": []
    },
    "Coven": {
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
        "Hawkmen"
      ],
      "incompat_tags": [
        "Good"
      ],
      "raw_incompat_lines": [
        "6   Incompatible Affiliations and Other Restrictions",
        "Sisters of the Coven have the ability to bond with avian totemic familiars via witchcraft. It is a good idea to  trust  your familiar upon bonding, to be sure it is able to keep up with you while moving. Note that this does not help if your character is flying and the familiar cannot, or in some oth...",
        "Incompatible Affiliations and Other Restrictions",
        "Coven members are also barred from wearing heavy armor, so while one can be a member of the  Hawkmen  one cannot wear the helmet."
      ]
    },
    "Deep Whisperers": {
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
      "raw_incompat_lines": []
    },
    "Equites Serpentina": {
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
      "raw_incompat_lines": []
    },
    "Erisian Liberation Front": {
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
      "raw_incompat_lines": []
    },
    "Faradrim il'Avathar": {
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
        "Shadow Brethren"
      ],
      "incompat_tags": [],
      "raw_incompat_lines": [
        "You cannot join Faradrim il'Avathar because you are a practitioner of deception. - Shadow Brethren may not join"
      ]
    },
    "Hantaka": {
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
        "Jhan"
      ],
      "incompat_tags": [],
      "raw_incompat_lines": [
        "Praying to Kali at her altar below  Jhan  (syntax 'pray to kali' case sensitive, presumed a bug that you cannot 'pray to Kali') at various levels of favour will grant you various boons."
      ]
    },
    "Justicars of Axa": {
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
        "Gatherers",
        "Lightbringers",
        "The Attuned"
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
      ]
    },
    "Kazarak": {
      "name": "Kazarak",
      "alias": null,
      "type": "guild",
      "tags": [
        "Destroyer",
        "Evil",
        "Servant"
      ],
      "incompat_groups": [
        "Travelers"
      ],
      "incompat_tags": [],
      "raw_incompat_lines": [
        "Incompatible Associations",
        "Kazaraks cannot receive  Travelers ' challenges.",
        "Shoggoths cannot change their sentience with Hurgkthorg"
      ]
    },
    "Knights of the Round Table": {
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
      "raw_incompat_lines": [
        "true Knight.  I... cannot gainsay that any longer.'"
      ]
    },
    "Lightbringers": {
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
      ]
    },
    "Nglethk N'keh Fl'hlgath": {
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
      "raw_incompat_lines": []
    },
    "Ordo Ignis Aeternis": {
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
      "raw_incompat_lines": []
    },
    "Ordo Verbus Glacialis": {
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
        "The Stalkers of the Gate"
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
      ]
    },
    "Ordo Zephyrius Mutatoris": {
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
      "raw_incompat_lines": []
    },
    "Paratheo-Anametamystikhood of Eris Esoteric": {
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
      ]
    },
    "Reapers": {
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
      "incompat_groups": [
      ],
      // These are likely all undocumented tag compatibilities, but hard to debug.
      "incompat_tags": [
        "Protector",
        "Soldier" 
      ],
      "raw_incompat_lines": [
        "You cannot join the Reapers because you are a protector. ( Mhezlekai )",
        "Xar states, \"As a Reaper, you could not become a soldier by joining the Weapons of Vengeance, reaper.\" in Siglaryn.",
        " Janid intones, [- As a Reaper, you could not become a scholar by joining the Crafty Linguists. -] to you.",
        "The priest of Jinx says, $As a Reaper, you could not become a seeker of gold by joining the Jinxian Plutocracy.$ to you."
      ]
    },
    "Riddlemasters": {
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
      "raw_incompat_lines": []
    },
    "Ringwielders": {
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
      ]
    },
    "Shapeshifters": {
      "name": "Shapeshifters",
      "alias": null,
      "type": "guild",
      "tags": [
        "Conspecific",
        "Initiate"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Shemsu Sutekh": {
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
      ]
    },
    "Travelers": {
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
      ]
    },
    "Tzakazhar": {
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
      "raw_incompat_lines": []
    },
    "Ulfhednar": {
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
        "Aligned",
        "Gauric Legion",
        "Questors of Axa",
        "The Stalkers of the Gate",
        "Weapons of Vengeance"
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
      ]
    },
    "Verynvelyrae": {
      "name": "Verynvelyrae",
      "alias": null,
      "type": "guild",
      "tags": [
        "Caretaker",
        "Initiate",
        "Ligatory"
      ],
      "incompat_groups": [
        "Mhezlekai"
      ],
      "incompat_tags": [
        "Fanatic"
      ],
      "raw_incompat_lines": [
        "Mhezlekai  - \"You cannot join the Verynvelyrae because you are a fanatic.\""
      ]
    },
    "Warbreakers": {
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
        "Questors of Axa",
        "The Stalkers of the Gate",
        "Weapons of Vengeance"
      ],
      "incompat_tags": [
        "Agent",
        "Furtive",
        "Servant"
      ],
      "raw_incompat_lines": [
        "Aviar and advenus cannot join.",
        "Warbreakers cannot have a second master. This excludes them from being  agents  or  servants   to anyone else (like  The Stalkers of the Gate  or  Weapons of Vengeance ).",
        "Warbreakers cannot join  Questors of Axa  because Warbreakers are furtive."
      ]
    },
    "Zetesai": {
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
      ]
    },
    "Apollonian Disciples": {
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
        "Erisian Liberation Front",
        "Shemsu Sutekh"
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
      ]
    },
    "Aristeia": {
      "name": "Aristeia",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Warrior"
      ],
      "incompat_groups": [
        "Aedarene",
        "Apollonian Disciples",
        "Chosen of Vashanka",
        "Haruspices",
        "Synodia Lykouros"
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
      ]
    },
    "The Attuned": {
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
      ]
    },
    "Blades of Scyria": {
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
      "raw_incompat_lines": []
    },
    "Brotherhood of Wine and Song": {
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
      "raw_incompat_lines": []
    },
    "Chosen of Vashanka": {
      "name": "Chosen of Vashanka",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Warrior"
      ],
      "incompat_groups": [
        "Aristeia",
        "Hantaka"
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
      ]
    },
    "Collegium Magistrorum": {
      "name": "Collegium Magistrorum",
      "alias": null,
      "type": "association",
      "tags": [
        "Initiate"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Crafty Linguists": {
      "name": "Crafty Linguists",
      "alias": null,
      "type": "association",
      "tags": [
        "Scholar"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Cuar Faernae": {
      "name": "Cuar Faernae",
      "alias": null,
      "type": "association",
      "tags": [
        "Good",
        "Magician",
        "Protector"
      ],
      "incompat_groups": [
        "Fianna",
        "Valathyr"
      ],
      "incompat_tags": [],
      "raw_incompat_lines": [
        "You have to have fey blood and thus cannot have demonic blood. Fianna-granted fey blood can bridge the gap.  You can join by visiting the headmaster in  Valathyr  and say 'pledge me to the Cuar Faernae'.  Be aware that the dana may not be too keen on letting you in the palace area.  One may have to ...",
        "Eaerandyl states, &gt;&gt;-&gt; You cannot join the Cuar Faernae because you are a proponent of chaos. &lt;-&lt;&lt; to you."
      ]
    },
    "Cult of Sacrifice": {
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
      "raw_incompat_lines": []
    },
    "Deep Ones": {
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
      "raw_incompat_lines": []
    },
    "Fianna": {
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
      ]
    },
    "Garrik's Assassins": {
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
      ]
    },
    "Gatherers": {
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
      ]
    },
    "Gauric Legion": {
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
        "Aliavelyrae",
        "Aligned",
        "Coven"
      ],
      "incompat_tags": [
        "Soldier"
      ],
      "raw_incompat_lines": [
        "in ways that ordinary mortals cannot fathom.  In particular, Gauric Legionnaires pursue harmony and balance of both body and spirit",
        "9   Exclusions",
        "Exclusions",
        "Aliavelyrae ,  Coven , and  Aligned  cannot become soldiers and thus cannot join the Gauric Legion."
      ]
    },
    "Ghaunadauri": {
      "name": "Ghaunadauri",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Furtive",
        "Racist"
      ],
      "incompat_groups": [
        "Coven"
      ],
      "incompat_tags": [
        "Hedonist"
      ],
      "raw_incompat_lines": [
        "You cannot specialize in ownership:",
        "Ralgor asserts, [| You cannot join the Ghaunadauri because you are a hedonist. |] to you in Zadjalin. -- Cannot join as a member of the Coven"
      ]
    },
    "Glomerates": {
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
      ]
    },
    "Hawkmen": {
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
      ]
    },
    "Hellwalkers": {
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
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Hethar Karad": {
      "name": "Hethar Karad",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Racist"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Inducted": {
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
        "Tukrr"
      ],
      "incompat_tags": [
        "Chaotic",
        "Good"
      ],
      "raw_incompat_lines": [
        "Joining the Inducted is challenging and requires a significant amount of effort, and is permanent.  Once you join, you are forever bound in servitude to  Tukrr  - the process warps one's mind and spirit in ways that cannot be undone.",
        "The Inducted are forbidden to specialize in  Sephirotic Affinity , and are exclusive with Chaotic and Good affiliation types."
      ]
    },
    "Kazarzeth": {
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
      ]
    },
    "Legion of Dynamic Discord": {
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
      "raw_incompat_lines": []
    },
    "Losthaven Guard": {
      "name": "Losthaven Guard",
      "alias": null,
      "type": "association",
      "tags": [
        "Guard",
        "Protector"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Maidens of the Spear": {
      "name": "Maidens of the Spear",
      "alias": null,
      "type": "association",
      "tags": [
        "Sexist",
        "Wanderer",
        "Warrior"
      ],
      "incompat_groups": [
        "Aligned"
      ],
      "incompat_tags": [
        "Drunkard",
        "Hedonist",
        "Soldier"
      ],
      "raw_incompat_lines": [
        "being that you cannot marry or be married while a Maiden.  If you ever do get",
        "Discipline \t\t\t1..+5\t\tWillpower (might be removed, cannot verify on an Aligned)",
        "Awareness \t\t\t1..+5\t\tPerception (might be removed, cannot verify on an Aligned)",
        "Sulin says, ++[ You cannot join the Maidens of the Spear because you are a hedonist. ]++ to you.",
        "Sulin says, ++[ You cannot join the Maidens of the Spear because you are a drunkard. ]++ to you.",
        "Maidens are incompatible with  soldier  affiliations."
      ]
    },
    "Mhezlekai": {
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
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Minerva's Haruspices": {
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
      "raw_incompat_lines": []
    },
    "Ollin Tonatiuh": {
      "name": "Ollin Tonatiuh",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Evil"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Questors of Axa": {
      "name": "Questors of Axa",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Ordered"
      ],
      "incompat_groups": [
        "Tzakazhar"
      ],
      "incompat_tags": [
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
      ]
    },
    "Rebels of Syllyac": {
      "name": "Rebels of Syllyac",
      "alias": null,
      "type": "association",
      "tags": [
        "Secret"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Shadow Brethren": {
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
      "raw_incompat_lines": []
    },
    "Sodality of the Nine-Spoked Wheel": {
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
      ]
    },
    "Soulburners": {
      "name": "Soulburners",
      "alias": null,
      "type": "association",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Steel Serpents": {
      "name": "Steel Serpents",
      "alias": null,
      "type": "association",
      "tags": [
        "Guard",
        "Protector",
        "Soldier"
      ],
      "incompat_groups": [
        "Aliavelyrae"
      ],
      "incompat_tags": [
        "Soldier"
      ],
      "raw_incompat_lines": [
        "Being  soldiers ,  Aliavelyrae  will not allow Steel Serpents among their order (cannot join SS or join Aliavelyrae if already a SS)."
      ]
    },
    "Synodia Lykouros": {
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
      "raw_incompat_lines": [
        "5   Incompatibilities",
        "Incompatibilities",
        "The gray-streaked brown male garou growls, 'The worship of Aeda does not allow the veneration of Sutekh, so you cannot"
      ]
    },
    "Synousia Algesis": {
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
      "raw_incompat_lines": [
        "Apparently, there is a list of forbidden races. I am unsure about the other races, but  Svirfneblin  &amp;  Llelimin  cannot join. If you try, you will get the above message."
      ]
    },
    "The Agnihotri": {
      "name": "The Agnihotri",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "The Explorers": {
      "name": "The Explorers",
      "alias": null,
      "type": "association",
      "tags": [
        "Wanderer",
        "Writer"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "The Pantarchic Church of Yehovah": {
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
      "raw_incompat_lines": []
    },
    "The Stalkers of the Gate": {
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
      ]
    },
    "The Touched": {
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
      ]
    },
    "Wandslingers": {
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
      ]
    },
    "Wardens": {
      "name": "Wardens",
      "alias": null,
      "type": "association",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Weapons of Vengeance": {
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
      ]
    },
    "Ygellethites": {
      "name": "Ygellethites",
      "alias": null,
      "type": "association",
      "tags": [
        "Devotional",
        "Furtive",
        "Libertine",
        "Racist"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Valathyr": {
      "name": "Valathyr",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Fezzik": {
      "name": "Fezzik",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Gardagh": {
      "name": "Gardagh",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Byundi": {
      "name": "Byundi",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Sinister Dexter": {
      "name": "Sinister Dexter",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Shadow Tower": {
      "name": "Shadow Tower",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Ivory Tower": {
      "name": "Ivory Tower",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Ebiria": {
      "name": "Ebiria",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Liathyr": {
      "name": "Liathyr",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "shoggothim": {
      "name": "shoggothim",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": [
        "available vorgaal is determined by your size and the state of your health; damaged carculgnath cannot be used to form flgathu.  This also means that your"
      ]
    },
    "Devonshire": {
      "name": "Devonshire",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Ordo Purus Magicae": {
      "name": "Ordo Purus Magicae",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Tenochlan": {
      "name": "Tenochlan",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Leah's Hill": {
      "name": "Leah's Hill",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Yevath": {
      "name": "Yevath",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Othrys": {
      "name": "Othrys",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "The Syndicate": {
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
      ]
    },
    "Cimbra": {
      "name": "Cimbra",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Ordo Maleficus": {
      "name": "Ordo Maleficus",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Ordo Undine Proeliatori": {
      "name": "Ordo Undine Proeliatori",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": [
        "ocean, so deep that light cannot penetrate that deeply.  A few, however, live",
        "uses can gorge the caster and deplete the host to the point where the host cannot support the feeding any longer.  As a result, if the caster is caught, the host may not much less appreciative of losing large amounts of nutrients than if the",
        "places that it cannot follow its victims.  This invocation of the Mollusk",
        "through the digestive system.  Items and particulates that cannot be digested",
        "the caster's vocal aparatus into the local medium, with such power that it can stun a nearby opponent.  The raw force of the blast is usually enough to stun even opponent who cannot hear, as the shockwaves penetrate through their physical form",
        "relative wind moves aft. A vessel downwind of another, however, in attempting to attack upwind, is constrained to trim sail as the relative wind moves forward and cannot point too far into the wind for fear of being headed. In sailing warfare,",
        "results cannot be overlooked.  Repeated exposure to healing waters has been"
      ]
    },
    "Outsiders": {
      "name": "Outsiders",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Rainbow Magi": {
      "name": "Rainbow Magi",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Red Magi": {
      "name": "Red Magi",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Sentinels": {
      "name": "Sentinels",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": [
        "Remember to put the armour on. You cannot drop the armor by any means (including death!) if you are in the guild, so you may as well have it on.",
        "Races that are not anthropic cannot join because their extra limbs will not fit in the suit."
      ]
    },
    "White Magi": {
      "name": "White Magi",
      "alias": null,
      "type": "guild",
      "tags": [],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Devonshire Clerics": {
      "name": "Devonshire Clerics",
      "alias": null,
      "type": "guild",
      "tags": [
        "Good",
        "Healer",
        "Invested",
        "Ordered",
        "Priest"
      ],
      "incompat_groups": [
        "Devonshire"
      ],
      "incompat_tags": [
        "Initiate"
      ],
      "raw_incompat_lines": [
        "Thromdan intones, [ You cannot join the Devonshire Clerics because you are an initiate into"
      ]
    },
    "ELF Guild": {
      "name": "ELF Guild",
      "alias": null,
      "type": "guild",
      "tags": [
        "Chaotic",
        "Devotional",
        "Initiate",
        "Invested",
        "Libertine",
        "Magician",
        "Priest"
      ],
      "incompat_groups": [
        "Sinister Dexter"
      ],
      "incompat_tags": [],
      "raw_incompat_lines": [
        "Sinister Dexter murmurs something you cannot hear in Latin.",
        "Sinister Dexter purports something you cannot hear in Latin."
      ]
    },
    "Archmagus": {
      "name": "Archmagus",
      "alias": null,
      "type": "association",
      "tags": [
        "Magician"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Followers of Apollo": {
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
        "Apollonian Disciples",
        "Erisian Liberation Front",
        "Shemsu Sutekh"
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
      ]
    },
    "Haruspices": {
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
      "raw_incompat_lines": []
    },
    "Storm Walkers": {
      "name": "Storm Walkers",
      "alias": null,
      "type": "association",
      "tags": [
        "Conspecific",
        "Initiate",
        "Warrior"
      ],
      "incompat_groups": [],
      "incompat_tags": [],
      "raw_incompat_lines": []
    },
    "Cult of Decay": {
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
      "raw_incompat_lines": []
    }
  }
};
