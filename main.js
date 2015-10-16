var items = [
    "Empty",
    "Monster Candy",
    "Croquet Roll",
    "Stick",
    "Bandage",
    "Rock Candy",
    "Pumpkin Rings",
    "Spider Donut",
    "Stoic Onion",
    "Ghost Fruit",
    "Spider Cider",
    "Butterscotch Pie",
    "Faded Ribbon",
    "Toy Knife",
    "Tough Glove",
    "Manly Bandana",
    "Snowman Piece",
    "Nice Cream",
    "Puppydough Icecream",
    "Bisicle",
    "Unisicle",
    "Cinnamon Bun",
    "Temmie Flakes",
    "Abandoned Quiche",
    "Old Tutu",
    "Ballet Shoes",
    "Punch Card",
    "Annoying Dog",
    "Dog Salad",
    "Dog Residue (1)",
    "Dog Residue (2)",
    "Dog Residue (3)",
    "Dog Residue (4)",
    "Dog Residue (5)",
    "Dog Residue (6)",
    "Astronaut Food",
    "Instant Noodles",
    "Crab Apple",
    "Hot Dog...?",
    "Hot Cat",
    "Glamburger",
    "Sea Tea",
    "Starfait",
    "Legendary Hero",
    "Cloudy Glasses",
    "Torn Notebook",
    "Stained Apron",
    "Burnt Pan",
    "Cowboy hat",
    "Empty Gun",
    "Heart Locket",
    "Worn Dagger",
    "Real Knife",
    "The Locket",
    "Bad Memory",
    "Dream",
    "Undyne's Letter",
    "Undyne Letter EX",
    "Potato Chisps",
    "Junk Food",
    "Mystery Key",
    "Face Steak",
    "Hush Puppy",
    "Snail Pie",
    "temy armor",
    "<invalid>"
];

var cellOpts = {
    201: "Say Hello",
    203: "About Yourself",
    204: "Call Her \"Mom\"",
    205: "Flirt",
    206: "Toriel's Phone",
    210: "Papyrus's Phone"
};

var weaponAts = {
    3: 0, // stick
    13: 3,
    16: 5,
    52: 99,
    47: 10,
    25: 7,
    45: 2,
    49: 12,
    51: 15,
};

var ArmorDfs = {
    4: 0, // bandage
    12: 3, // faded ribbon
    15: 7, // manly bandana
    44: 5, // clouded glasses
    46: 11, // stained apron
    50: 15, // heart locket
    53: 99, // The Locket
    64: 20 // temy armor
};

var rooms = {
    4: "Ruins - Starting point",
    5: "Ruins - Flowey spot",
    6: "Ruins - Entrance [SAVE]",
    7: "Ruins - Toriel stepping tile puzzle",
    8: "Ruins - Switch puzzle",
    9: "Ruins - Dummy room",
    10: "Ruins - Spike puzzle",
    11: "Ruins - Long corridor",
    12: "Ruins - Leaf Pile [SAVE]",
    13: "Ruins - Candy pillar",
    14: "Ruins - Mandatory fall trapdoor",
    15: "Ruins - First stone pushing puzzle",
    16: "Ruins - Trapdoor corridor puzzle",
    17: "Ruins - Talkback rock",
    18: "Ruins - Mouse Hole [SAVE]",
    19: "Ruins - Napstablook",
    20: "Ruins - Spider Bake Sale",
    21: "Ruins - 2 frogs",
    22: "Ruins - Switch hidden under trapdoor puzzle",
    23: "Ruins - 3 Pillars room 1",
    24: "Ruins - 3 Pillars room 2",
    25: "Ruins - 3 Pillars room 3",
    26: "Ruins - 3 Pillars room 4",
    27: "Ruins - Pillars room pit",
    28: "Ruins - 3-way fork",
    29: "Ruins - Toriel gossip frog",
    30: "Ruins - Toy knife room",
    31: "Ruins - Home [SAVE]",
    32: "Toriel's House: Entrance",
    33: "Toriel's House: Reading room",
    34: "Toriel's House: Corridor",
    35: "Toriel's House: Toriel's Room",
    36: "Toriel's House: Your Room",
    37: "Toriel's House: Kitchen",
    38: "Toriel's Basement 1",
    39: "Toriel's Basement 2",
    40: "Toriel's Basement 3",
    41: "Toriel's Basement: Toriel Boss Battle",
    42: "Toriel's Basement: Corridor to Flowey",
    43: "Toriel's Basement: Flowey",
    44: "Snowdin - Ruin exit",
    45: "Snowdin - Dark forest path",
    46: "Snowdin - Box Road [SAVE]",
    47: "Snowdin - Fishing rod",
    48: "Snowdin - Papyrus' Sentry Station",
    49: "Snowdin - Doggo",
    50: "Snowdin - Compass sign",
    51: "Snowdin - Snowman",
    52: "Snowdin - Electricity Maze",
    53: "Snowdin - Snow golf",
    54: "Snowdin - 2 guard dog houses",
    55: "Snowdin - Monster Kidz Word Search",
    56: "Snowdin - Spaghetti [SAVE]",
    57: "Snowdin - Warning: Dog Marriage",
    58: "Snowdin - XO puzzle 1",
    59: "Snowdin - XO puzzle 2",
    60: "Snowdin - Color tile puzzle",
    61: "Snowdin - Dog House [SAVE]",
    62: "Snowdin - Snow Papyrus & Sans",
    63: "Snowdin - Sliding XO puzzle",
    64: "Snowdin - Teleporting Sans",
    65: "Snowdin - Ice Cave entrance",
    66: "Snowdin - Snow poffs (Greater Dog)",
    67: "Snowdin - Gauntlet of Deadly Terror",
    68: "Snowdin - Town [SAVE]",
    69: "Snowdin Town: Ice haul wolf",
    70: "Snowdin Town: Boat harbor",
    71: "Snowdin Town: Inn lobby",
    73: "Snowdin Town: Grillby's",
    74: "Snowdin Town: Library",
    81: "Snowdin - Papyrus Battle",
    82: "Waterfall - Entrance",
    83: "Waterfall - Checkpoint [SAVE]",
    84: "Waterfall - Falling rocks",
    86: "Waterfall - Hallway [SAVE]",
    87: "Waterfall - Lily pad bridge",
    88: "Waterfall - Lily pad vertical bridge",
    90: "Waterfall - Telescope",
    91: "Waterfall - Boat plank",
    92: "Waterfall - Undyne Spear dodging 1",
    93: "Waterfall - Bush after spear dodging",
    94: "Waterfall - Crystal [SAVE]",
    95: "Waterfall - Sans Telescope",
    96: "Waterfall - Nice Cream Stand",
    97: "Waterfall - Split Pathway",
    98: "Waterfall - Ballet shoes",
    99: "Waterfall - Duck",
    100: "Waterfall - Onionsan",
    101: "Waterfall - Artifact hub",
    102: "Waterfall - Piano",
    103: "Waterfall - Legendary Artifact",
    104: "Waterfall - Rainy Statue",
    105: "Waterfall - Umbrellas",
    106: "Waterfall - Rainy Path 1",
    107: "Waterfall - Rainy Path 2",
    108: "Waterfall - Palace View",
    109: "Waterfall - Umbrella ledge",
    110: "Waterfall - Bridge [SAVE]",
    111: "Waterfall - Bridge spear dodge",
    112: "Waterfall - Bridge fall",
    113: "Waterfall - Trash Zone Flower bed",
    114: "Waterfall - Trash Zone [SAVE]",
    115: "Waterfall - Training Dummy revenge",
    116: "Waterfall - Quiet Area [SAVE]",
    117: "Waterfall - Undyne's house entrance",
    119: "Waterfall - Twin Ghost houses",
    124: "Waterfall - Turtle shop",
    125: "Waterfall - River boat",
    126: "Waterfall - 2 waterfalls",
    127: "Waterfall - Mushroom maze",
    128: "Waterfall - Temmie Village [SAVE]",
    129: "Waterfall - Lamp maze",
    130: "Waterfall - Behind you",
    131: "Waterfall - More flowers",
    132: "Waterfall - Cave bridge",
    133: "Waterfall - Cave exit",
    134: "Waterfall - Undyne area",
    135: "Waterfall - Undyne area + 1",
    136: "Waterfall - Hotland Welcome",
    137: "Hotland - Entrance",
    138: "Hotland - Water tank",
    139: "Hotland - Laboratory Entrance [SAVE]",
    140: "Hotland - River boat",
    141: "Hotland - Laboratory Hub",
    142: "Hotland - Laboratory Upper Floor",
    143: "Hotland - Laboratory Exit",
    144: "Hotland - Treadmills 1",
    145: "Hotland - Magma Chamber [SAVE]",
    146: "Hotland - Burnt Pan",
    147: "Hotland - Lasers 1",
    148: "Hotland - Puzzle Gate 1",
    149: "Hotland - Left Boz Puzzle Entrance",
    150: "Hotland - Left Box Puzzle",
    151: "Hotland - Right Box Puzzle Entrance",
    152: "Hotland - Right Box Puzzle",
    153: "Hotland - Arrow bridge",
    154: "Hotland - Kitchen",
    155: "Hotland - Core View [SAVE]",
    156: "Hotland - Elevator R1",
    157: "Hotland - Elevator R2",
    158: "Hotland - Hot Dog Stand",
    159: "Hotland - Art Club Entrance",
    160: "Hotland - Art Club",
    161: "Hotland - Stained Apron",
    162: "Hotland - Treadmill switch puzzle",
    163: "Hotland - Arrow puzzle",
    164: "Hotland - Bad Opinion Zone [SAVE]",
    165: "Hotland - Bro guards",
    166: "Hotland - Bombastic News report",
    167: "Hotland - Upper Core View",
    168: "Hotland - Elevator L2",
    169: "Hotland - Elevator L3",
    170: "Hotland - Spider Bake Sale",
    171: "Hotland - F3 Puzzle Gate",
    172: "Hotland - F3 South Puzzle Entrance",
    173: "Hotland - F3 South Puzzle",
    174: "Hotland - F3 North Puzzle Entrance",
    175: "Hotland - F3 North Puzzle",
    176: "Hotland - Spider Entrance [SAVE]",
    177: "Hotland - Spider Room",
    178: "Hotland - Mettaton Poster",
    179: "Hotland - Theater Stage",
    180: "Hotland - Colored Tile Maze 2",
    181: "Hotland - Nice Cream Stand",
    182: "Hotland - Hotel Entrance",
    183: "Hotland - Hotel Lobby [SAVE]",
    184: "Hotland - Hotel Restaurant",
    185: "Hotland - Hotel Cordidor",
    186: "Hotland - Hotel Alley",
    187: "Hotland - Elevator R3",
    188: "Hotland - Core Entrance",
    189: "Hotland - Core Elevator",
    190: "Hotland - Core Pit",
    191: "Hotland - Core North of Elavator",
    192: "Hotland - Core Wrong order lasers",
    193: "Hotland - Core Crossroads",
    194: "Hotland - Core Dead End",
    195: "Hotland - Core Power Laser Puzzle",
    196: "Hotland - Core Branch [SAVE]",
    197: "Hotland - Core Ice Deposit",
    198: "Hotland - Core West Puzzle Entrance",
    199: "Hotland - Core West Puzzle Entrance + 1",
    200: "Hotland - Core West Puzzle Entrance + 2",
    202: "Hotland - Core End - 3",
    201: "Hotland - South of 100G Trash Can",
    203: "Hotland - Core End - 4",
    204: "Hotland - Core Get Lost",
    205: "Hotland - Core West Puzzle",
    206: "Hotland - Core Glamburger Trash Can",
    207: "Hotland - Core 100G Trash Can",
    208: "Hotland - Core Battle Bridge",
    209: "Hotland - Core End - 1",
    210: "Hotland - Core End [SAVE]",
    211: "Hotland - Core Mettaton Room",
    212: "Hotland - Core Final Elevator Entrance",
    214: "Hotland - Elevator L1",
    215: "Hotland - Core Final Elevator",
    216: "Castle Elevator [SAVE]",
    217: "Castle - Another Elevator",
    218: "Castle - Dark Path",
    219: "New Home [SAVE]",
    220: "New Home - Entrance",
    221: "New Home - Reading Room",
    222: "New Home - Corridor",
    223: "New Home - Asgore's Room",
    224: "New Home - Your Room",
    225: "New Home - Kitchen",
    226: "New Home - Basement 1",
    227: "New Home - Basement 2",
    228: "New Home - Basement 3",
    229: "New Home - Basement 4",
    230: "New Home - Elevator",
    231: "Last Corridor [SAVE]",
    232: "Throne Entrance [SAVE]",
    233: "Throne Entrance - Stairs Down",
    234: "Throne Entrance - Coffins",
    235: "Throne Room [SAVE]",
    236: "The End [SAVE]",
    237: "Barrier",
    241: "Outside",
    242: "Laboratory Elevator",
    243: "True Lab - Elevator",
    244: "True Lab - Elevator Entrance",
    245: "True Lab - South Corridor",
    246: "True Laboratory [SAVE]",
    247: "True Lab - West Corridor 1",
    248: "True Lab - West Sinks",
    249: "True Lab - West red key slot",
    250: "True Lab - North Corridor 1",
    251: "True Lab - Bedroom [SAVE]",
    252: "True Lab - Northeast Corridor",
    253: "True Lab - Northeast blue key slot",
    254: "True Lab - North Corridor 2",
    255: "True Lab - Green key",
    256: "True Lab - Northwest skull",
    257: "True Lab - Yellow Key Slot + TV",
    258: "True Lab - Northwest refrigerators",
    259: "True Lab - Green Key Slot",
    260: "True Lab - Fans",
    261: "True Lab - Elevator 2",
    262: "True Lab - Power room corridor",
    263: "True Lab - Power room",
    265: "Snowdin - Ice Cave 1",
    331: "Asriel room",
};

var torielStates = {
    0: "Initial state",
    3: "Unknown",
    4: "Killed"
};

var comedianStates = {
    0: "Initial state",
    2: "Killed"
};

var doggoStates = {
    0: "Initial state",
    1: "Killed"
};

var dogamyDogaressaStates = {
    0: "Initial state",
    1: "Killed"
};

var greaterDogStates = {
    0: "Initial state",
    1: "Killed"
};

var papyrusStates = {
    0: "Initial state",
    1: "Killed"
};

var trainingDummyStates = {
    0: "Initial state",
    1: "Killed",
    2: "Talked to",
    3: "Tired of your shenanigans"
};

var shyrenStates = {
    0: "Initial state",
    1: "Killed"
};

var madDummyStates = {
    0: "Initial state",
    1: "Killed"
};

var undyneStates1 = {
    0: "Initial state",
    1: "Killed"
};

var undyneStates2 = {
    0: "Initial state",
    1: "Killed"
};

var broGuardsStates = {
    0: "Initial state",
    1: "Killed"
};

var mettatonStates = {
    0: "Initial state",
    1: "Killed"
};

var muffetStates = {
    0: "Initial state",
    1: "Killed"
};

var ini, saveLines;

function parseIni(text) {
    "use strict";
    var lines = text.split("\n");
    var section = null;
    lines.forEach(function(line) {
        // Ignore empty lines
        if (line === "") {
            return;
        }
        // If line starts with [, it is a section header
        var lbracket = line.indexOf("[");
        if (lbracket !== -1) {
            var rbracket = line.slice(lbracket).indexOf("]") + lbracket;
            if (rbracket !== -1) {
                section = line.slice(lbracket + 1, rbracket);
                ini[section] = {};
            }
        } else { // Otherwise, it is assumed to be an assignment
            if (section === null) {
                return "Assignment outside of a section";
            }
            var eq = line.indexOf("=");
            if (eq === -1) {
                return "Expected '='";
            }
            var lquot = line.indexOf('"');
            if (lquot === -1) {
                return "Expected '\"'";
            }
            var rquot = line.slice(lquot + 1).indexOf('"') + lquot + 1;
            if (rquot === -1) {
                return "Unterminated value string";
            }
            var value = line.slice(lquot + 1, rquot);
            var key = line.slice(0, eq);
            ini[section][key] = value;
        }
    });
    return null;
}

var laughed = false;

function flowey_laugh_once() {
    "use strict";
    if (!laughed) {
        document.getElementById("floweyimg").src = "res/flowey_evil.png";
        var audio = new Audio("res/flowey_laugh.mp3");
        audio.play();
        laughed = true;
    }
}

function insert_inv_lists() {
    "use strict";
    function insert(node, i) {
        var newOption = document.createElement("option");
        newOption.setAttribute("value", i);
        var newContent = document.createTextNode(items[i]);
        newOption.appendChild(newContent);
        var select = document.getElementById(node);
        select.appendChild(newOption);
    }
    for (var i = 0; i < items.length; i++) {
        for (var j = 1; j <= 8; j++) {
            insert("sav-invslot" + j, i);
        }
        insert("sav-weapon", i);
        insert("sav-armor", i);
    }
}

function loadSelectFromObj(selectId, obj) {
    "use strict";
    var select = document.getElementById(selectId);

    for (var key in obj) {
        var newOption = document.createElement("option");
        newOption.setAttribute("value", key);
        var newContent = document.createTextNode(obj[key]);
        newOption.appendChild(newContent);
        select.appendChild(newOption);
    }
}

function loadIni(file) {
    "use strict";
    var reader = new FileReader();
    reader.onload = function(e) {
        var text = e.target.result;
        var error = parseIni(text);
        if (error) {
            window.alert("Error parsing undertale.ini: " + error);
        }
        updatePersistentDataForm(ini);
    };
    reader.readAsText(file);
}

// Load save data from a file into an array of values, and execute a closure on it.
function loadSaveFromFile(file, closure) {
    "use strict";
    var reader = new FileReader();
    reader.onload = function(e) {
        var text = e.target.result;
        closure(text.split("\r\n"));
    };
    reader.readAsText(file);
}

// Update the persistent data form from an ini object.
function updatePersistentDataForm(iniobj) {
    "use strict";
    document.getElementById("ini-name").value = iniobj.General.Name;
    document.getElementById("ini-location").value = iniobj.General.Room;
    document.getElementById("ini-kills").value = iniobj.General.Kills;
    document.getElementById("ini-love").value = iniobj.General.Love;
}

// Update the save data form from an array of values.
function updateSaveDataForm(values) {
    "use strict";
    document.getElementById("sav-name").value = values[0];
    document.getElementById("sav-kills").value = values[11];
    document.getElementById("sav-love").value = values[1];
    document.getElementById("sav-hp").value = values[2];
    document.getElementById("sav-exp").value = values[9];
    document.getElementById("sav-gold").value = values[10];
    document.getElementById("sav-at").value = values[4];
    document.getElementById("sav-weaponat").value = values[5];
    document.getElementById("sav-df").value = values[6];
    document.getElementById("sav-armordf").value = values[7];
    for (var i = 0; i < 8; i++) {
        var itemId = parseInt(values[12 + (i * 2)].trim());
        document.getElementById("sav-invslot" + (i + 1)).value = itemId;
    }
    document.getElementById("sav-weapon").value = parseInt(values[28].trim());
    document.getElementById("sav-armor").value = parseInt(values[29].trim());
    document.getElementById("sav-trainingdummystate").value = parseInt(values[44].trim());
    document.getElementById("sav-torielstate").value = parseInt(values[75].trim());
    document.getElementById("sav-doggostate").value = parseInt(values[82].trim());
    document.getElementById("sav-dogamydogaressastate").value = parseInt(values[83].trim());
    document.getElementById("sav-greaterdogstate").value = parseInt(values[84].trim());
    document.getElementById("sav-comedianstate").value = parseInt(values[87].trim());
    document.getElementById("sav-papyrusstate").value = parseInt(values[97].trim());
    document.getElementById("sav-shyrenstate").value = parseInt(values[111].trim());
    document.getElementById("sav-unkkills").value = values[231];
    document.getElementById("sav-dungeonkills").value = values[232];
    document.getElementById("sav-snowdinkills").value = values[233];
    document.getElementById("sav-waterfallkills").value = values[234];
    document.getElementById("sav-hotlandkills").value = values[235];
    document.getElementById("sav-undynestate1").value = parseInt(values[281].trim());
    document.getElementById("sav-maddummystate").value = parseInt(values[282].trim());
    document.getElementById("sav-undynestate2").value = parseInt(values[380].trim());
    document.getElementById("sav-muffetstate").value = parseInt(values[427].trim());
    document.getElementById("sav-broguardsstate").value = parseInt(values[432].trim());
    document.getElementById("sav-mettatonstate").value = parseInt(values[455].trim());
    document.getElementById("sav-location").value = parseInt(values[547].trim());
}

function updateSaveValuesFromForm(values) {
    "use strict";
    values[0] = document.getElementById("sav-name").value;
    values[1] = document.getElementById("sav-love").value;
    values[2] = document.getElementById("sav-hp").value;
    values[4] = document.getElementById("sav-at").value;
    values[5] = document.getElementById("sav-weaponat").value;
    values[6] = document.getElementById("sav-df").value;
    values[7] = document.getElementById("sav-armordf").value;
    values[9] = document.getElementById("sav-exp").value;
    values[10] = document.getElementById("sav-gold").value;
    values[11] = document.getElementById("sav-kills").value;
    values[12] = document.getElementById("sav-invslot1").value;
    values[14] = document.getElementById("sav-invslot2").value;
    values[16] = document.getElementById("sav-invslot3").value;
    values[18] = document.getElementById("sav-invslot4").value;
    values[20] = document.getElementById("sav-invslot5").value;
    values[22] = document.getElementById("sav-invslot6").value;
    values[24] = document.getElementById("sav-invslot7").value;
    values[26] = document.getElementById("sav-invslot8").value;
    values[28] = document.getElementById("sav-weapon").value;
    values[29] = document.getElementById("sav-armor").value;
    values[44] = document.getElementById("sav-trainingdummystate").value;
    values[75] = document.getElementById("sav-torielstate").value;
    values[82] = document.getElementById("sav-doggostate").value;
    values[83] = document.getElementById("sav-dogamydogaressastate").value;
    values[84] = document.getElementById("sav-greaterdogstate").value;
    values[87] = document.getElementById("sav-comedianstate").value;
    values[97] = document.getElementById("sav-papyrusstate").value;
    values[111] = document.getElementById("sav-shyrenstate").value;
    values[231] = document.getElementById("sav-unkkills").value;
    values[232] = document.getElementById("sav-dungeonkills").value;
    values[233] = document.getElementById("sav-snowdinkills").value;
    values[234] = document.getElementById("sav-waterfallkills").value;
    values[235] = document.getElementById("sav-hotlandkills").value;
    values[281] = document.getElementById("sav-undynestate1").value;
    values[282] = document.getElementById("sav-maddummystate").value;
    values[380] = document.getElementById("sav-undynestate2").value;
    values[427] = document.getElementById("sav-muffetstate").value;
    values[432] = document.getElementById("sav-broguardsstate").value;
    values[455] = document.getElementById("sav-mettatonstate").value;
    values[547] = document.getElementById("sav-location").value;
}

function saveIni() {
    "use strict";
    var string = "";
    for (var section in ini) {
        string += "[" + section + "]\r\n";
        for (var key in ini[section]) {
            string += key + "=\"" + ini[section][key] + "\"\r\n";
        }
    }
    var blob = new Blob([string], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "undertale.ini", true);
    flowey_laugh_once();
}

function saveFileX() {
    "use strict";
    updateSaveValuesFromForm(saveLines);
    var string = "";
    for (var i = 0; i < saveLines.length; i++) {
        string += saveLines[i] + "\r\n";
    }
    var blob = new Blob([string], {type: "application/octet-stream"});
    saveAs(blob, "file0", true);
    flowey_laugh_once();
}

function loadPresetSelect() {
    "use strict";
    var selectNode = document.getElementById("presetselect");
    for (var k in presets) {
        var newOption = document.createElement("option");
        var newContent = document.createTextNode(k);
        newOption.appendChild(newContent);
        selectNode.appendChild(newOption);
    }
}

function loadPreset(name) {
    "use strict";
    ini = presets[name].ini;
    saveLines = presets[name].lines;
    updateSaveDataForm(saveLines);
    updatePersistentDataForm(ini);
}

function start() {
    "use strict";
    loadSelectFromObj("sav-location", rooms);
    loadSelectFromObj("ini-location", rooms);
    loadSelectFromObj("sav-torielstate", torielStates);
    loadSelectFromObj("sav-comedianstate", comedianStates);
    loadSelectFromObj("sav-doggostate", doggoStates);
    loadSelectFromObj("sav-dogamydogaressastate", dogamyDogaressaStates);
    loadSelectFromObj("sav-greaterdogstate", greaterDogStates);
    loadSelectFromObj("sav-papyrusstate", papyrusStates);
    loadSelectFromObj("sav-trainingdummystate", trainingDummyStates);
    loadSelectFromObj("sav-shyrenstate", shyrenStates);
    loadSelectFromObj("sav-maddummystate", madDummyStates);
    loadSelectFromObj("sav-undynestate1", undyneStates1);
    loadSelectFromObj("sav-undynestate2", undyneStates2);
    loadSelectFromObj("sav-broguardsstate", broGuardsStates);
    loadSelectFromObj("sav-muffetstate", muffetStates);
    loadSelectFromObj("sav-mettatonstate", mettatonStates);
    insert_inv_lists();
    loadPresetSelect();
    loadPreset("Dungeon Start");
    var iniFile, saveFile;
    var iniInput = document.getElementById("ini-file");
    iniInput.addEventListener("change", function(evt) {
        iniFile = evt.target.files[0];
    }, false);
    var saveInput = document.getElementById("sav-file");
    saveInput.addEventListener("change", function (evt) {
        saveFile = evt.target.files[0];
    }, false);
    var iniLoadButton = document.getElementById("ini-loadbutton");
    iniLoadButton.addEventListener("click", function() {
        if (!iniFile) {
            window.alert("You need to choose a file first!");
            return;
        }
        loadIni(iniFile);
    }, false);
    var file0LoadButton = document.getElementById("sav-loadbutton");
    file0LoadButton.addEventListener("click", function() {
        if (!saveFile) {
            window.alert("You need to choose a file first!");
            return;
        }
        loadSaveFromFile(saveFile, function(lines) {
            updateSaveDataForm(lines);
            saveLines = lines;
        });
    }, false);
    var saveIniButton = document.getElementById("ini-savebutton");
    saveIniButton.addEventListener("click", saveIni, false);
    var saveXButton = document.getElementById("sav-savebutton");
    saveXButton.addEventListener("click", saveFileX, false);
    document.getElementById("savesi2").addEventListener("click", function() {
        var blob = new Blob([], {type: "application/octet-stream"});
        saveAs(blob, "system_information_962", true);
        flowey_laugh_once();
    }, false);
    document.getElementById("savesi3").addEventListener("click", function() {
        var blob = new Blob([], {type: "application/octet-stream"});
        saveAs(blob, "system_information_963", true);
        flowey_laugh_once();
    }, false);
    var weaponSelect = document.getElementById("sav-weapon");
    weaponSelect.onchange = function() {
        var at = weaponAts[weaponSelect.value];
        if (typeof at !== "undefined") {
            document.getElementById("weaponat").value = at;
        }
    };
    var armorSelect = document.getElementById("sav-armor");
    armorSelect.onchange = function() {
        var df = ArmorDfs[armorSelect.value];
        if (typeof df !== "undefined") {
            document.getElementById("armordf").value = df;
        }
    };
    document.getElementById("presetload").addEventListener("click", function() {
        var name = document.getElementById("presetselect").value;
        loadPreset(name);
    }, false);
}

window.onload = start;
