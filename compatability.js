// From https://wiki.lostsouls.org/Category:Affiliation_types
// Likely some are missing but attributed to direct guild incompatabilities.
export const tagIncompatibilityPairs = [
    { tags: ["Agent", "Champion"] },
    { tags: ["Altruist", "Evil"] },
    { tags: ["Altruist", "Malevolent"] },
    { tags: ["Altruist", "Neutral"] },
    { tags: ["Atheist", "Devotional"] },
    { tags: ["Atheist", "Priest"] },
    { tags: ["Chaotic", "Neutral"] },
    { tags: ["Chaotic", "Ordered"] },
    { tags: ["Drunkard", "Ascetic"] },
    { tags: ["Good", "Malevolent"] },
    { tags: ["Good", "Evil"] },
    { tags: ["Guard", "Outlaw"] },
    { tags: ["Healer", "Destroyer"] },
    { tags: ["Hedonist", "Ascetic"] },
    { tags: ["Libertine", "Ascetic"] },
    { tags: ["Magician", "Psychic"] },
    { tags: ["Mystic", "Scientist"] },
    { tags: ["Neutral", "Evil"] },
    { tags: ["Neutral", "Good"] },
    { tags: ["Neutral", "Malevolent"] },
    { tags: ["Neutral", "Ordered"] },
    { tags: ["Wanderer", "Guard"] }
    // Maybe warrior/soldier?
    // Mostly devotional/devotional?
    // Mostly soldier/soldier?
];

export const associationTagIncompatabilities = [
    { association: "aliavelyrae", tag: "Soldier", description: "" },
    { association: "battleragers", tag: "Warrior", description: "" },
    { association: "coven", tag: "Good", description: "" },
    { association: "justicars_of_axa", tag: "Avaricious", description: "" },
    { association: "justicars_of_axa", tag: "Chaotic", description: "" },
    { association: "justicars_of_axa", tag: "Evil", description: "" },
    { association: "justicars_of_axa", tag: "Fanatic", description: "" },
    { association: "justicars_of_axa", tag: "Magician", description: "" },
    { association: "justicars_of_axa", tag: "Neutral", description: "" },
    { association: "lightbringers", tag: "Destroyer", description: "" },
    { association: "lightbringers", tag: "Evil", description: "" },
    { association: "lightbringers", tag: "Libertine", description: "" },
    { association: "lightbringers", tag: "Mercenary", description: "" },
    { association: "lightbringers", tag: "Neutral", description: "" }, // Duplicate altruist?
    { association: "lightbringers", tag: "Outlaw", description: "" },
    { association: "ordo_verbus_glacialis", tag: "Devotional", description: "" }, // TODO - Atheist?
    { association: "ordo_verbus_glacialis", tag: "Priest", description: "" },
    { association: "reapers", tag: "Protector", description: "" }, // Protector/Destroyer?
    { association: "reapers", tag: "Soldier", description: "" },
    { association: "ringwielders", tag: "Initiate", description: "" },
    { association: "ulfhednar", tag: "Neutral", description: "" }, // TODO - But they are neutral?
    { association: "ulfhednar", tag: "Servant", description: "" },
    { association: "verynvelyrae", tag: "Fanatic", description: "" },
    { association: "warbreakers", tag: "Agent", description: "" }, // TODO - Probably just champion
    { association: "warbreakers", tag: "Servant", description: "" },
    { association: "warbreakers", tag: "Malevolent", description: "" },
    { association: "apollonian_disciples", tag: "Hedonist", description: "" },
    { association: "aristeia", tag: "Nihilist", description: "" },
    { association: "the_attuned", tag: "Destroyer", description: "" },
    { association: "the_attuned", tag: "Fanatic", description: "" },
    { association: "the_attuned", tag: "Initiate", description: "" }, // But they are initiates
    { association: "chosen_of_vashanka", tag: "Healer", description: "" },
    { association: "chosen_of_vashanka", tag: "Rogue", description: "" },
    { association: "fianna", tag: "Fanatic", description: "" },
    { association: "fianna", tag: "Nihilist", description: "" },
    { association: "fianna", tag: "Racist", description: "" },
    { association: "gauric_legion", tag: "Nihilist", description: "" },// TODO - Probably all tags?
    { association: "gauric_legion", tag: "Sexist", description: "" },
    { association: "gauric_legion", tag: "Atheist", description: "" },
    { association: "ghaunadauri", tag: "Hedonist", description: "" },
    { association: "hawkmen", tag: "Guard", description: "" },
    { association: "maidens_of_the_spear", tag: "Drunkard", description: "" },
    { association: "maidens_of_the_spear", tag: "Hedonist", description: "" },
    { association: "maidens_of_the_spear", tag: "Soldier", description: "" },
    { association: "questors_of_axa", tag: "Deceiver", description: "" }, // Why aren't they just Ascetic?
    { association: "questors_of_axa", tag: "Drunkard", description: "" },
    { association: "questors_of_axa", tag: "Furtive", description: "" },
    { association: "questors_of_axa", tag: "Hedonist", description: "" },
    { association: "questors_of_axa", tag: "Libertine", description: "" },
    { association: "steel_serpents", tag: "Soldier", description: "" },
    { association: "synodia_lykouros", tag: "shemsu_sutekh", description: "" },
    { association: "the_stalkers_of_the_gate", tag: "Fanatic", description: "" },
    { association: "the_stalkers_of_the_gate", tag: "Servant", description: "" },
    { association: "weapons_of_vengeance", tag: "Guard", description: "" },
    { association: "the_syndicate", tag: "Protector", description: "" },
    { association: "followers_of_apollo", tag: "Hedonist", description: "" },
    { association: "", tag: "", description: "" },
    { association: "", tag: "", description: "" },


]

export const associationAssociationIncompatabilities = [
    { associations: ["coven", "hawkmen"], description: "" },
    { associations: ["faradrim_ilavathar", "shadow_brethren"], description: "" },
    { associations: ["justicars_of_axa", "the_attuned"], description: "" },
    { associations: ["justicars_of_axa", "agnihotri"], description: "Assumed due to God conflict" },
    { associations: ["justicars_of_axa", "aristeia"], description: "Can maybe join but will block Justie abilities (see God conflict)" },
    { associations: ["justicars_of_axa", "blades_of_scyria"], description: "Assumed due to God conflict" },
    { associations: ["justicars_of_axa", "brotherhood_of_wine_and_song"] },
    { associations: ["justicars_of_axa", "chosen_of_vashanka"], description: "Can join but will block Justie abilities (see God conflict)" },
    { associations: ["justicars_of_axa", "collegium_magistrorum"] },
    { associations: ["justicars_of_axa", "cuar_faernae"] },
    { associations: ["justicars_of_axa", "fianna"] },
    { associations: ["justicars_of_axa", "followers_of_apollo"], description: "Assumed due to God conflict" },
    { associations: ["justicars_of_axa", "ghaunadauri"], description: "Assumed due to God conflict" },
    { associations: ["justicars_of_axa", "glomerates"] },
    { associations: ["justicars_of_axa", "haruspices"], description: "Assumed due to God conflict" },
    { associations: ["justicars_of_axa", "inducted"] },
    { associations: ["justicars_of_axa", "maidens_of_the_spear"] },
    { associations: ["justicars_of_axa", "ollin_tonatiuh"], description: "Assumed due to God conflict" },
    { associations: ["justicars_of_axa", "pantarchic_church"], description: "Assumed due to God conflict" },
    { associations: ["justicars_of_axa", "shadow_brethren"], description: "Assumed due to God conflict" },
    { associations: ["justicars_of_axa", "synodia_lykouros"], description: "Assumed due to God conflict" },
    { associations: ["justicars_of_axa", "synousia_algesis"], description: "Assumed due to God conflict" },
    { associations: ["justicars_of_axa", "ygellethites"], description: "Assumed due to God conflict" },
    { associations: ["ordo_verbus_glacialis", "the_stalkers_of_the_gate"], description: "" }, // TODO - Probably just from ordered/neutral
    { associations: ["shemsu_sutekh", "hellwalkers"], description: "" },
    { associations: ["travelers", "aristeia"], description: "" }, // TODO - Probably a tag?
    { associations: ["ulfhednar", "aligned"], description: "" }, // TODO - Might all just be Neutral?
    { associations: ["ulfhednar", "gauric_legion"], description: "" },
    { associations: ["ulfhednar", "questors_of_axa"], description: "" },
    { associations: ["ulfhednar", "the_stalkers_of_the_gate"], description: "" },
    { associations: ["ulfhednar", "weapons_of_vengeance"], description: "" },
    { associations: ["verynvelyrae", "mhezlekai"], description: "" },
    { associations: ["warbreakers", "questors_of_axa"], description: "" }, // TODO - Probably all just champion <> agent
    { associations: ["warbreakers", "the_stalkers_of_the_gate"], description: "" },
    { associations: ["warbreakers", "weapons_of_vengeance"], description: "" },
    { associations: ["apollonian_disciples", "shemsu_sutekh"], description: "" }, // TODO - Probably just order/good
    { associations: ["aristeia", "aedarene"], description: "" },
    { associations: ["aristeia", "apollonian_disciples"], description: "" },
    { associations: ["aristeia", "chosen_of_vashanka"], description: "" },
    { associations: ["aristeia", "haruspices"], description: "" },
    { associations: ["aristeia", "synodia_lykouros"], description: "" },
    { associations: ["aristeia", "travelers"], description: "" },
    { associations: ["chosen_of_vashanka", "hantaka"], description: "" },
    { associations: ["gauric_legion", "aliavelyrae"], description: "" }, // TODO - Probably all tags
    { associations: ["gauric_legion", "aligned"], description: "" },
    { associations: ["gauric_legion", "coven"], description: "" },
    { associations: ["ghaunadauri", "coven"], description: "" },
    { associations: ["maidens_of_the_spear", "aligned"], description: "" }, //TODO - Tag?
    { associations: ["sodality_of_the_nine_spoked_wheel", "aedarene"], description: "" },
    { associations: ["sodality_of_the_nine_spoked_wheel", "synodia_lykouros"], description: "" },
    { associations: ["steel_serpents", "aliavelyrae"], description: "" },
    { associations: ["the_syndicate", "aristeia"], description: "" },
    { associations: ["followers_of_apollo", "apollonian_disciples"], description: "" },
    { associations: ["followers_of_apollo", "erisian_liberation_front"], description: "" }, // TODO - order/chaos
    { associations: ["followers_of_apollo", "shemsu_sutekh"], description: "" },// TODO - order/chaos
    { associations: ["followers_of_apollo", "aristeia"], description: "" },
    { associations: ["followers_of_apollo", ""], description: "" },
    { associations: ["", ""], description: "" },
    { associations: ["", ""], description: "" },
]
