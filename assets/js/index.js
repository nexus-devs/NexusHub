// General Site Functions
// ------------------------------

// Bug Hunters + js
$(document).ready(function () {

    var itemNames = ["Nezha",
                     "Ash Prime",
                     "Ember Prime",
                     "Frost Prime",
                     "Loki Prime",
                     "Mag Prime",
                     "Nova Prime",
                     "Nyx Prime",
                     "Rhino Prime",
                     "Saryn Prime",
                     "Trinity Prime",
                     "Vauban Prime",
                     "Volt Prime",
                     "Boar Prime",
                     "Boltor Prime",
                     "Braton Prime",
                     "Burston Prime",
                     "Latron Prime",
                     "Paris Prime",
                     "Soma Prime",
                     "Vectis Prime",
                     "Akbronco Prime",
                     "Akstiletto Prime",
                     "Bronco Prime",
                     "Hikou Prime",
                     "Lex Prime",
                     "Sicarus Prime",
                     "Spira Prime",
                     "Vasto Prime",
                     "Ankyros Prime",
                     "Bo Prime",
                     "Dakra Prime",
                     "Dual Kamas Prime",
                     "Fang Prime",
                     "Fragor Prime",
                     "Glaive Prime",
                     "Nikana Prime",
                     "Orthos Prime",
                     "Reaper Prime",
                     "Scindo Prime",
                     "Carrier Prime",
                     "Wyrm Prime",
                     "Kavasa Prime Collar",
                     "Odonata Prime",
                     "Arcane Scorpion Helmet",
                     "Arcane Locust Helmet",
                     "Arcane Reverb Helmet",
                     "Arcane Chrous Helmet",
                     "Arcane Phoenix Helmet",
                     "Arcane Backdraft Helmet",
                     "Arcane Avalon Helmet",
                     "Arcane Pendragon Helmet",
                     "Arcane Aurora Helmet",
                     "Arcane Squall Helmet",
                     "Arcane Essence Helmet",
                     "Arcane Swindle Helmet",
                     "Arcane Coil Helmet",
                     "Arcane Gauss Helmet",
                     "Arcane Flux Helmet",
                     "Arcane Menticide Helmet",
                     "Arcane Vespa Helmet",
                     "Arcane Thrak Helmet",
                     "Arcane Vanguard Helmet",
                     "Arcane Hemlock Helmet",
                     "Arcane Chlora Helmet",
                     "Arcane Aura Helmet",
                     "Arcane Meridian Helmet",
                     "Arcane Esprit Helmet",
                     "Arcane Gambit Helmet",
                     "Arcane Storm Helmet",
                     "Arcane Pulse Helmet",
                     "Prisma Skana",
                     "Prisma Dual Cleavers",
                     "Prisma Gorgon",
                     "Prisma Grakata",
                     "Prisma Veritux",
                     "Prisma Shade",
                     "Arcane Acceleration",
                     "Arcane Aegis",
                     "Arcane Agility",
                     "Arcane Arachne",
                     "Arcane Avenger",
                     "Arcane Awakening",
                     "Arcane Barrier",
                     "Arcane Consequence",
                     "Arcane Deflection",
                     "Arcane Energize",
                     "Arcane Eruption",
                     "Arcane Fury",
                     "Arcane Grace",
                     "Arcane Guardian",
                     "Arcane Healing",
                     "Arcane Ice",
                     "Arcane Momentum",
                     "Arcane Nullifier",
                     "Arcane Phantasm",
                     "Arcane Precision",
                     "Arcane Rage",
                     "Arcane Resistance",
                     "Arcane Strike",
                     "Arcane Tempo",
                     "Arcane Trickery",
                     "Arcane Ultimatum",
                     "Arcane Velocity",
                     "Arcane Victory",
                     "Arcane Warmth",
                     "Smeeta Kavat",
                     "Adarza Kavat",
                     "Life Strike",
                     "Quickening",
                     "Corrupt Charge",
                     "Blind Rage",
                     "Vengeful Revenant",
                     "Fleeting Expertise",
                     "Narrow Minded",
                     "Overextended",
                     "Transient Fortitude",
                     "Critical Delay",
                     "Heavy Caliber",
                     "Vile Precision",
                     "Tainted Mag",
                     "Vile Acceleration",
                     "Depleted Reload",
                     "Burdened Magazine",
                     "Vicious Spread",
                     "Tainted Shell",
                     "Frail Momentum",
                     "Critical Deceleration",
                     "Anemic Agility",
                     "Creeping Bullseye",
                     "Hollow Point",
                     "Magnum Force",
                     "Tainted Clip",
                     "Spoiled Strike",
                     "Power Drift",
                     "Coaction Drift",
                     "Cunning Drift",
                     "Speed Drift",
                     "Endurance Drift",
                     "Agility Drift",
                     "Stealth Drift",
                     "Body Count",
                     "Focused Defense",
                     "Blood Rush",
                     "Weeping Wounds",
                     "Maiming Strike",
                     "Argon Scope",
                     "Bladed Rounds",
                     "Catalyzer Link",
                     "Guided Ordnance",
                     "Spring-Loaded Chamber",
                     "Shrapnel Shot",
                     "Laser Sight",
                     "Repeater Clip",
                     "Nano-Applicator",
                     "Narrow Barrel",
                     "Hydraulic Crosshairs",
                     "Embedded Catalyzer",
                     "Sharpened Bullets",
                     "Targeting Subsystem",
                     "Pressurized Magazine",
                     "Primed Continuity",
                     "Primed Flow",
                     "Primed Vigor",
                     "Primed Fury",
                     "Primed Pressure Point",
                     "Primed Reach",
                     "Primed Point Blank",
                     "Primed Ravage",
                     "Primed Morphic Transformer",
                     "Primed Pistol Gambit",
                     "Primed Heavy Trauma",
                     "Primed Target Cracker",
                     "Primed Fast Hands",
                     "Primed Heated Charge",
                     "Primed Bane of Infested",
                     "Primed Rifle Ammo Mutation",
                     "Primed Pistol Mutation",
                     "Primed Slip Magazine",
                     "Primed Shotgun Ammo Mutation",
                     "Primed Ammo Stock",
                     "Tempo Royale",
                     "Shred",
                     "Buzz Kill",
                     "Primed Chamber",
                     "High Voltage",
                     "Rime Rounds",
                     "Thermite Rounds",
                     "Jolt",
                     "Piercing Caliber",
                     "Fanged Fusillade",
                     "Shell Shock",
                     "Voltaic Strike",
                     "Malignant Force",
                     "Sweeping Serration",
                     "Frigid Blast",
                     "Volcanic Edge",
                     "Virulent Scourge",
                     "Vicious Frost",
                     "Frostbite",
                     "Auger Strike",
                     "Collision Force",
                     "Magma Chamber",
                     "Pistol Pestilence",
                     "Toxic Barrage",
                     "Aviator",
                     "Bore",
                     "Breach Loader",
                     "Pummel",
                     "Crash Course",
                     "Full Contact",
                     "Searing Steel",
                     "Maim",
                     "Vaykor Hek",
                     "Vaykor Marelok",
                     "Telos Boltor",
                     "Telos Akbolto",
                     "Synoid Simulor",
                     "Synoid Gammacor",
                     "Secura Penta",
                     "Secura Dual Cestra",
                     "Rakta Cernos",
                     "Rakta Ballistica",
                     "Sancti Tigris",
                     "Sancti Castanas",
                     "Mara Detron",
                     "Cyngas",
                     "Crimson Dervish",
                     "Crushing Ruin",
                     "Cleaving Whirlwind",
                     "Final Harbinger",
                     "Decisive Judgement",
                     "Tranquil Cleave",
                     "Blind Justice",
                     "High Noon",
                     "Swirling Tiger",
                     "Rending Crane",
                     "Iron Phoenix",
                     "Astral Twilight",
                     "Defiled Snapdragon",
                     "Vulpine Mask",
                     "Shimmering Blight",
                     "Crossing Snakes",
                     "Bleeding Willow",
                     "Atlantis Vulcan",
                     "Eleventh Storm",
                     "Four Riders",
                     "Stalking Fan",
                     "Pointed Wind",
                     "Gnashing Payara",
                     "Spinning Needle",
                     "Flailing Breach",
                     "Vermilion Storm",
                     "Brutlal Tide",
                     "Gleaming Talon",
                     "Gaia's Tragedy",
                     "Seismic Palm",
                     "Coiling Viper",
                     "Malicious Raptor",
                     "Clashing Forest",
                     "Reaping Spiral",
                     "Homing Fang",
                     "Gemini Cross",
                     "Grim Fury",
                     "Fateful Truth",
                     "Sinking Talon",
                     "Sundering Weave",
                     "Burning Wasp",
                     "Fracturing Wind",
                     "Rising Steel",
                     "Nekros Prime",
                     "Galatine Prime",
                     "Tigris Prime",
                     "Telos Boltace",
                     "Synoid Heliocor",
                     "Sancti Magistar",
                     "Secura Lecta",
                     "Rakta Dark Dagger",
                     "Vaykor Sydon",
                     "Legendary Core",
                     "Valkyr Prime",
                     "Cernos Prime",
                     "Venka Prime",
                     "Orvius"
                    ]


    console.log('Find any bugs or security issues? Contact us on https://github.com/Mads-Jakobsen/WarframeNexus/issues . We greatly appreciate your help :)')
    $('.top-nav-search > input').css('opacity', '1');

    // Typeahead
    $('.search').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    }, {
        name: 'Items',
        source: substringMatcher(itemNames)
    });

    // Auto focus search
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {} else {
        $('#search').focus()
    }
})



// Show Search Bar when scrolling
$(window).on('scroll', function () {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 450;

    if (y_scroll_pos > scroll_pos_test) {
        $('.top-nav-search > input').css('opacity', '1');
    }

});







// Define Chart Options
// -----------------------------

options = {
    colors: ['#34b083', '#65b5ba', '#acbace', '#449ce7', '#915ed7', '#64E572',
             '#FF9655', '#FFF263', '#fff'],
    chart: {
        backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, 'rgba(0,0,0,0)'],
                [1, 'rgba(0,0,0,0)']
            ]
        },
    },
    tooltip: {
        backgroundColor: '#2e3540',
        borderRadius: 0,
        borderWidth: 2
    },

    title: {
        style: {
            color: '#000',
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }
    },
    subtitle: {
        style: {
            color: '#8ea1ac',
            font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
        },
    }
};







// Typeahead
// -----------------------------

var substringMatcher = function (strs) {
    return function findMatches(q, cb) {
        var matches, substringRegex;

        // an array that will be populated with substring matches
        matches = [];

        // regex used to determine if a string contains the substring `q`
        substrRegex = new RegExp(q, 'i');

        // iterate through the pool of strings and for any string that
        // contains the substring `q`, add it to the `matches` array
        $.each(strs, function (i, str) {
            if (substrRegex.test(str)) {
                matches.push(str);
            }
        });

        cb(matches);
    };
};



