/*////////////////////////////////////////////////////////////

WRITTEN BY : 8G6
LICENSE    : Apache License

////////////////////////////////////////////////////////////*/



let    $  = (a) => document.querySelector(a) 
let uni   = (a) => a.charCodeAt()
let chr   = (a) => String.fromCharCode(a)
let rand  = (a) => a[Math.floor(Math.random()*a.length)]

function fixBody(){
    document.body.style.margin=0;
    document.body.style.padding=0;
    document.body.style.width='100vw';
    document.body.style.height='100vh'
}

function setColor(color,random){
    if(!color.match('#')){
        color = colors[color.toLowerCase()]
    }
    return random ? randomColor() : color;
}

function coordinates(space_x,space_y){
    let [X,Y] = [[],[]];
    let i;
    for(i=0;i<screen.width;i+=space_x){
        X.push(i)
    }
    for(i=0;i<screen.height;i+=space_y){
        Y.push(i)
    }
    return [X,Y]
}

function toHex(strat,end){
    let arr=[];
    for(i=strat;i<end+1;i++){
        arr.push(i.toString(16))
    }
    return arr
}
function maximize(canvas){
    fixBody()
    canvas.width = document.body.offsetWidth;
    canvas.height = document.body.offsetHeight;
    
}

function randomColor(){
    return '#'+rand(hex)+rand(hex)+rand(hex)
}

let chars=(strat,end)=>{
    strat = uni(strat)
    end   = uni(end)
    let arr=[]
    for(i=strat;i<end+1;i++){
        y=chr(i)
        if(!y.match(/[\x]/g)){arr.push(y)}
    }
    return arr
}


const hex = toHex(0,256);


let colors = {
    "air force blue": "#5d8aa8",
    "alice blue": "#f0f8ff",
    "alizarin crimson": "#e32636",
    "almond": "#efdecd",
    "amaranth": "#e52b50",
    "amber": "#ffbf00",
    "american rose": "#ff033e",
    "amethyst": "#9966cc",
    "android green": "#a4c639",
    "anti-flash white": "#f2f3f4",
    "antique brass": "#cd9575",
    "antique fuchsia": "#915c83",
    "antique white": "#faebd7",
    "ao": "#008000",
    "apple green": "#8db600",
    "apricot": "#fbceb1",
    "aqua": "#00ffff",
    "aquamarine": "#7fffd4",
    "army green": "#4b5320",
    "arylide yellow": "#e9d66b",
    "ash grey": "#b2beb5",
    "asparagus": "#87a96b",
    "atomic tangerine": "#ff9966",
    "auburn": "#a52a2a",
    "aureolin": "#fdee00",
    "aurometalsaurus": "#6e7f80",
    "awesome": "#ff2052",
    "azure mist/web": "#f0ffff",
    "azure": "#007fff",
    "baby blue eyes": "#a1caf1",
    "baby blue": "#89cff0",
    "baby pink": "#f4c2c2",
    "ball blue": "#21abcd",
    "banana mania": "#fae7b5",
    "banana yellow": "#ffe135",
    "battleship grey": "#848482",
    "bazaar": "#98777b",
    "beau blue": "#bcd4e6",
    "beaver": "#9f8170",
    "beige": "#f5f5dc",
    "bisque": "#ffe4c4",
    "bistre": "#3d2b1f",
    "bittersweet": "#fe6f5e",
    "black": "#000000",
    "blanched almond": "#ffebcd",
    "bleu de france": "#318ce7",
    "blizzard blue": "#ace5ee",
    "blond": "#faf0be",
    "blue bell": "#a2a2d0",
    "blue gray": "#6699cc",
    "blue green": "#0d98ba",
    "blue purple": "#8a2be2",
    "blue violet": "#8a2be2",
    "blue": "#0000ff",
    "blush": "#de5d83",
    "bole": "#79443b",
    "bondi blue": "#0095b6",
    "bone": "#e3dac9",
    "boston university red": "#cc0000",
    "bottle green": "#006a4e",
    "boysenberry": "#873260",
    "brandeis blue": "#0070ff",
    "brass": "#b5a642",
    "brick red": "#cb4154",
    "bright cerulean": "#1dacd6",
    "bright green": "#66ff00",
    "bright lavender": "#bf94e4",
    "bright maroon": "#c32148",
    "bright pink": "#ff007f",
    "bright turquoise": "#08e8de",
    "bright ube": "#d19fe8",
    "brilliant lavender": "#f4bbff",
    "brilliant rose": "#ff55a3",
    "brink pink": "#fb607f",
    "british racing green": "#004225",
    "bronze": "#cd7f32",
    "brown": "#a52a2a",
    "bubble gum": "#ffc1cc",
    "bubbles": "#e7feff",
    "buff": "#f0dc82",
    "bulgarian rose": "#480607",
    "burgundy": "#800020",
    "burlywood": "#deb887",
    "burnt orange": "#cc5500",
    "burnt sienna": "#e97451",
    "burnt umber": "#8a3324",
    "byzantine": "#bd33a4",
    "byzantium": "#702963",
    "cadet blue": "#5f9ea0",
    "cadet grey": "#91a3b0",
    "cadet": "#536872",
    "cadmium green": "#006b3c",
    "cadmium orange": "#ed872d",
    "cadmium red": "#e30022",
    "cadmium yellow": "#fff600",
    "café au lait": "#a67b5b",
    "café noir": "#4b3621",
    "cal poly pomona green": "#1e4d2b",
    "cambridge blue": "#a3c1ad",
    "camel": "#c19a6b",
    "camouflage green": "#78866b",
    "canary yellow": "#ffef00",
    "canary": "#ffff99",
    "candy apple red": "#ff0800",
    "candy pink": "#e4717a",
    "capri": "#00bfff",
    "caput mortuum": "#592720",
    "cardinal": "#c41e3a",
    "caribbean green": "#00cc99",
    "carmine pink": "#eb4c42",
    "carmine red": "#ff0038",
    "carmine": "#ff0040",
    "carnation pink": "#ffa6c9",
    "carnelian": "#b31b1b",
    "carolina blue": "#99badd",
    "carrot orange": "#ed9121",
    "celadon": "#ace1af",
    "celeste": "#b2ffff",
    "celestial blue": "#4997d0",
    "cerise pink": "#ec3b83",
    "cerise": "#de3163",
    "cerulean blue": "#2a52be",
    "cerulean": "#007ba7",
    "cg blue": "#007aa5",
    "cg red": "#e03c31",
    "chamoisee": "#a0785a",
    "champagne": "#fad6a5",
    "charcoal": "#36454f",
    "chartreuse": "#7fff00",
    "cherry blossom pink": "#ffb7c5",
    "cherry": "#de3163",
    "chestnut": "#cd5c5c",
    "chocolate": "#d2691e",
    "chrome yellow": "#ffa700",
    "cinereous": "#98817b",
    "cinnabar": "#e34234",
    "cinnamon": "#d2691e",
    "citrine": "#e4d00a",
    "classic rose": "#fbcce7",
    "cobalt": "#0047ab",
    "cocoa brown": "#d2691e",
    "coffee": "#6f4e37",
    "columbia blue": "#9bddff",
    "cool black": "#002e63",
    "cool grey": "#8c92ac",
    "copper rose": "#996666",
    "copper": "#b87333",
    "coquelicot": "#ff3800",
    "coral pink": "#f88379",
    "coral red": "#ff4040",
    "coral": "#ff7f50",
    "cordovan": "#893f45",
    "corn": "#fbec5d",
    "cornell red": "#b31b1b",
    "cornflower blue": "#6495ed",
    "cornflower": "#9aceeb",
    "cornsilk": "#fff8dc",
    "cosmic latte": "#fff8e7",
    "cotton candy": "#ffbcd9",
    "cream": "#fffdd0",
    "crimson glory": "#be0032",
    "crimson red": "#990000",
    "crimson": "#dc143c",
    "cyan": "#00ffff",
    "daffodil": "#ffff31",
    "dandelion": "#f0e130",
    "dark blue": "#00008b",
    "dark brown": "#654321",
    "dark byzantium": "#5d3954",
    "dark candy apple red": "#a40000",
    "dark cerulean": "#08457e",
    "dark chestnut": "#986960",
    "dark coral": "#cd5b45",
    "dark cyan": "#008b8b",
    "dark electric blue": "#536878",
    "dark goldenrod": "#b8860b",
    "dark gray": "#a9a9a9",
    "dark green": "#013220",
    "dark jungle green": "#1a2421",
    "dark khaki": "#bdb76b",
    "dark lava": "#483c32",
    "dark lavender": "#734f96",
    "dark magenta": "#8b008b",
    "dark midnight blue": "#003366",
    "dark olive green": "#556b2f",
    "dark orange": "#ff8c00",
    "dark orchid": "#9932cc",
    "dark pastel blue": "#779ecb",
    "dark pastel green": "#03c03c",
    "dark pastel purple": "#966fd6",
    "dark pastel red": "#c23b22",
    "dark pink": "#e75480",
    "dark powder blue": "#003399",
    "dark raspberry": "#872657",
    "dark red": "#8b0000",
    "dark salmon": "#e9967a",
    "dark scarlet": "#560319",
    "dark sea green": "#8fbc8f",
    "dark sienna": "#3c1414",
    "dark slate blue": "#483d8b",
    "dark slate gray": "#2f4f4f",
    "dark spring green": "#177245",
    "dark tan": "#918151",
    "dark tangerine": "#ffa812",
    "dark taupe": "#483c32",
    "dark terra cotta": "#cc4e5c",
    "dark turquoise": "#00ced1",
    "dark violet": "#9400d3",
    "dartmouth green": "#00693e",
    "davy grey": "#555555",
    "debian red": "#d70a53",
    "deep carmine pink": "#ef3038",
    "deep carmine": "#a9203e",
    "deep carrot orange": "#e9692c",
    "deep cerise": "#da3287",
    "deep champagne": "#fad6a5",
    "deep chestnut": "#b94e48",
    "deep coffee": "#704241",
    "deep fuchsia": "#c154c1",
    "deep jungle green": "#004b49",
    "deep lilac": "#9955bb",
    "deep magenta": "#cc00cc",
    "deep peach": "#ffcba4",
    "deep pink": "#ff1493",
    "deep saffron": "#ff9933",
    "deep sky blue": "#00bfff",
    "denim": "#1560bd",
    "desert sand": "#edc9af",
    "desert": "#c19a6b",
    "dim gray": "#696969",
    "dodger blue": "#1e90ff",
    "dogwood rose": "#d71868",
    "dollar bill": "#85bb65",
    "drab": "#967117",
    "duke blue": "#00009c",
    "earth yellow": "#e1a95f",
    "ecru": "#c2b280",
    "eggplant": "#614051",
    "eggshell": "#f0ead6",
    "egyptian blue": "#1034a6",
    "electric blue": "#7df9ff",
    "electric crimson": "#ff003f",
    "electric cyan": "#00ffff",
    "electric green": "#00ff00",
    "electric indigo": "#6f00ff",
    "electric lavender": "#f4bbff",
    "electric lime": "#ccff00",
    "electric purple": "#bf00ff",
    "electric ultramarine": "#3f00ff",
    "electric violet": "#8f00ff",
    "electric yellow": "#ffff00",
    "emerald": "#50c878",
    "eton blue": "#96c8a2",
    "fallow": "#c19a6b",
    "falu red": "#801818",
    "famous": "#ff00ff",
    "fandango": "#b53389",
    "fashion fuchsia": "#f400a1",
    "fawn": "#e5aa70",
    "feldgrau": "#4d5d53",
    "fern green": "#4f7942",
    "fern": "#71bc78",
    "ferrari red": "#ff2800",
    "field drab": "#6c541e",
    "fire engine red": "#ce2029",
    "firebrick": "#b22222",
    "flame": "#e25822",
    "flamingo pink": "#fc8eac",
    "flavescent": "#f7e98e",
    "flax": "#eedc82",
    "floral white": "#fffaf0",
    "fluorescent orange": "#ffbf00",
    "fluorescent pink": "#ff1493",
    "fluorescent yellow": "#ccff00",
    "folly": "#ff004f",
    "forest green": "#228b22",
    "french beige": "#a67b5b",
    "french blue": "#0072bb",
    "french lilac": "#86608e",
    "french rose": "#f64a8a",
    "fuchsia pink": "#ff77ff",
    "fuchsia": "#ff00ff",
    "fulvous": "#e48400",
    "fuzzy wuzzy": "#cc6666",
    "gainsboro": "#dcdcdc",
    "gamboge": "#e49b0f",
    "ghost white": "#f8f8ff",
    "ginger": "#b06500",
    "glaucous": "#6082b6",
    "glitter": "#e6e8fa",
    "gold": "#ffd700",
    "golden brown": "#996515",
    "golden poppy": "#fcc200",
    "golden yellow": "#ffdf00",
    "goldenrod": "#daa520",
    "granny smith apple": "#a8e4a0",
    "gray asparagus": "#465945",
    "gray": "#808080",
    "green blue": "#1164b4",
    "green yellow": "#adff2f",
    "green": "#00ff00",
    "grullo": "#a99a86",
    "guppie green": "#00ff7f",
    "halayà úbe": "#663854",
    "han blue": "#446ccf",
    "han purple": "#5218fa",
    "hansa yellow": "#e9d66b",
    "harlequin": "#3fff00",
    "harvard crimson": "#c90016",
    "harvest gold": "#da9100",
    "heart gold": "#808000",
    "heliotrope": "#df73ff",
    "hollywood cerise": "#f400a1",
    "honeydew": "#f0fff0",
    "hooker green": "#49796b",
    "hot magenta": "#ff1dce",
    "hot pink": "#ff69b4",
    "hunter green": "#355e3b",
    "icterine": "#fcf75e",
    "inchworm": "#b2ec5d",
    "india green": "#138808",
    "indian red": "#cd5c5c",
    "indian yellow": "#e3a857",
    "indigo": "#4b0082",
    "international klein blue": "#002fa7",
    "international orange": "#ff4f00",
    "iris": "#5a4fcf",
    "isabelline": "#f4f0ec",
    "islamic green": "#009000",
    "ivory": "#fffff0",
    "jade": "#00a86b",
    "jasmine": "#f8de7e",
    "jasper": "#d73b3e",
    "jazzberry jam": "#a50b5e",
    "jonquil": "#fada5e",
    "june bud": "#bdda57",
    "jungle green": "#29ab87",
    "kelly green": "#4cbb17",
    "khaki": "#c3b091",
    "ku crimson": "#e8000d",
    "la salle green": "#087830",
    "languid lavender": "#d6cadd",
    "lapis lazuli": "#26619c",
    "laser lemon": "#fefe22",
    "laurel green": "#a9ba9d",
    "lava": "#cf1020",
    "lavender blue": "#ccccff",
    "lavender blush": "#fff0f5",
    "lavender gray": "#c4c3d0",
    "lavender indigo": "#9457eb",
    "lavender magenta": "#ee82ee",
    "lavender mist": "#e6e6fa",
    "lavender pink": "#fbaed2",
    "lavender purple": "#967bb6",
    "lavender rose": "#fba0e3",
    "lavender": "#e6e6fa",
    "lawn green": "#7cfc00",
    "lemon chiffon": "#fffacd",
    "lemon lime": "#bfff00",
    "lemon yellow": "#fff44f",
    "lemon": "#fff700",
    "light apricot": "#fdd5b1",
    "light blue": "#add8e6",
    "light brown": "#b5651d",
    "light carmine pink": "#e66771",
    "light coral": "#f08080",
    "light cornflower blue": "#93ccea",
    "light crimson": "#f56991",
    "light cyan": "#e0ffff",
    "light fuchsia pink": "#f984ef",
    "light goldenrod yellow": "#fafad2",
    "light gray": "#d3d3d3",
    "light green": "#90ee90",
    "light khaki": "#f0e68c",
    "light pastel purple": "#b19cd9",
    "light pink": "#ffb6c1",
    "light salmon pink": "#ff9999",
    "light salmon": "#ffa07a",
    "light sea green": "#20b2aa",
    "light sky blue": "#87cefa",
    "light slate gray": "#778899",
    "light taupe": "#b38b6d",
    "light thulian pink": "#e68fac",
    "light yellow": "#ffffed",
    "lilac": "#c8a2c8",
    "lime green": "#32cd32",
    "lime": "#bfff00",
    "lincoln green": "#195905",
    "linen": "#faf0e6",
    "lion": "#c19a6b",
    "liver": "#534b4f",
    "lust": "#e62020",
    "macaroni and cheese": "#ffbd88",
    "magenta": "#ff00ff",
    "magic mint": "#aaf0d1",
    "magnolia": "#f8f4ff",
    "mahogany": "#c04000",
    "maize": "#fbec5d",
    "majorelle blue": "#6050dc",
    "malachite": "#0bda51",
    "manatee": "#979aaa",
    "mango tango": "#ff8243",
    "mantis": "#74c365",
    "maroon": "#800000",
    "mauve taupe": "#915f6d",
    "mauve": "#e0b0ff",
    "mauvelous": "#ef98aa",
    "maya blue": "#73c2fb",
    "meat brown": "#e5b73b",
    "medium aquamarine": "#66ddaa",
    "medium blue": "#0000cd",
    "medium candy apple red": "#e2062c",
    "medium carmine": "#af4035",
    "medium champagne": "#f3e5ab",
    "medium electric blue": "#035096",
    "medium jungle green": "#1c352d",
    "medium lavender magenta": "#dda0dd",
    "medium orchid": "#ba55d3",
    "medium persian blue": "#0067a5",
    "medium purple": "#9370db",
    "medium red violet": "#bb3385",
    "medium sea green": "#3cb371",
    "medium slate blue": "#7b68ee",
    "medium spring bud": "#c9dc87",
    "medium spring green": "#00fa9a",
    "medium taupe": "#674c47",
    "medium teal blue": "#0054b4",
    "medium turquoise": "#48d1cc",
    "medium violet red": "#c71585",
    "melon": "#fdbcb4",
    "midnight blue": "#191970",
    "midnight green": "#004953",
    "mikado yellow": "#ffc40c",
    "mint cream": "#f5fffa",
    "mint green": "#98ff98",
    "mint": "#3eb489",
    "misty rose": "#ffe4e1",
    "moccasin": "#faebd7",
    "mode beige": "#967117",
    "moonstone blue": "#73a9c2",
    "mordant red 19": "#ae0c00",
    "moss green": "#addfad",
    "mountain meadow": "#30ba8f",
    "mountbatten pink": "#997a8d",
    "msu green": "#18453b",
    "mulberry": "#c54b8c",
    "munsell": "#f2f3f4",
    "mustard": "#ffdb58",
    "myrtle": "#21421e",
    "nadeshiko pink": "#f6adc6",
    "napier green": "#2a8000",
    "naples yellow": "#fada5e",
    "navajo white": "#ffdead",
    "navy blue": "#000080",
    "neon carrot": "#ffa343",
    "neon fuchsia": "#fe59c2",
    "neon green": "#39ff14",
    "non-photo blue": "#a4dded",
    "north texas green": "#059033",
    "ocean boat blue": "#0077be",
    "ochre": "#cc7722",
    "office green": "#008000",
    "old gold": "#cfb53b",
    "old lace": "#fdf5e6",
    "old lavender": "#796878",
    "old mauve": "#673147",
    "old rose": "#c08081",
    "olive drab": "#6b8e23",
    "olive green": "#bab86c",
    "olive": "#808000",
    "olivine": "#9ab973",
    "onyx": "#0f0f0f",
    "opera mauve": "#b784a7",
    "orange peel": "#ff9f00",
    "orange red": "#ff4500",
    "orange yellow": "#f8d568",
    "orange": "#ffa500",
    "orchid": "#da70d6",
    "otter brown": "#654321",
    "outer space": "#414a4c",
    "outrageous orange": "#ff6e4a",
    "oxford blue": "#002147",
    "pacific blue": "#1ca9c9",
    "pakistan green": "#006600",
    "palatinate blue": "#273be2",
    "palatinate purple": "#682860",
    "pale aqua": "#bcd4e6",
    "pale blue": "#afeeee",
    "pale brown": "#987654",
    "pale carmine": "#af4035",
    "pale cerulean": "#9bc4e2",
    "pale chestnut": "#ddadaf",
    "pale copper": "#da8a67",
    "pale cornflower blue": "#abcdef",
    "pale gold": "#e6be8a",
    "pale goldenrod": "#eee8aa",
    "pale green": "#98fb98",
    "pale lavender": "#dcd0ff",
    "pale magenta": "#f984e5",
    "pale pink": "#fadadd",
    "pale plum": "#dda0dd",
    "pale red violet": "#db7093",
    "pale robin egg blue": "#96ded1",
    "pale silver": "#c9c0bb",
    "pale spring bud": "#ecebbd",
    "pale taupe": "#bc987e",
    "pale violet red": "#db7093",
    "pansy purple": "#78184a",
    "papaya whip": "#ffefd5",
    "paris green": "#50c878",
    "pastel blue": "#aec6cf",
    "pastel brown": "#836953",
    "pastel gray": "#cfcfc4",
    "pastel green": "#77dd77",
    "pastel magenta": "#f49ac2",
    "pastel orange": "#ffb347",
    "pastel pink": "#ffd1dc",
    "pastel purple": "#b39eb5",
    "pastel red": "#ff6961",
    "pastel violet": "#cb99c9",
    "pastel yellow": "#fdfd96",
    "patriarch": "#800080",
    "payne grey": "#536878",
    "peach puff": "#ffdab9",
    "peach yellow": "#fadfad",
    "peach": "#ffe5b4",
    "pear": "#d1e231",
    "pearl aqua": "#88d8c0",
    "pearl": "#eae0c8",
    "peridot": "#e6e200",
    "periwinkle": "#ccccff",
    "persian blue": "#1c39bb",
    "persian indigo": "#32127a",
    "persian orange": "#d99058",
    "persian pink": "#f77fbe",
    "persian plum": "#701c1c",
    "persian red": "#cc3333",
    "persian rose": "#fe28a2",
    "phlox": "#df00ff",
    "phthalo blue": "#000f89",
    "phthalo green": "#123524",
    "piggy pink": "#fddde6",
    "pine green": "#01796f",
    "pink flamingo": "#fc74fd",
    "pink pearl": "#e7accf",
    "pink sherbet": "#f78fa7",
    "pink": "#ffc0cb",
    "pistachio": "#93c572",
    "platinum": "#e5e4e2",
    "plum": "#dda0dd",
    "portland orange": "#ff5a36",
    "powder blue": "#b0e0e6",
    "princeton orange": "#ff8f00",
    "prussian blue": "#003153",
    "psychedelic purple": "#df00ff",
    "puce": "#cc8899",
    "pumpkin": "#ff7518",
    "purple heart": "#69359c",
    "purple mountain majesty": "#9678b6",
    "purple mountain's majesty": "#9d81ba",
    "purple pizzazz": "#fe4eda",
    "purple taupe": "#50404d",
    "purple": "#800080",
    "rackley": "#5d8aa8",
    "radical red": "#ff355e",
    "raspberry glace": "#915f6d",
    "raspberry pink": "#e25098",
    "raspberry rose": "#b3446c",
    "raspberry": "#e30b5d",
    "raw sienna": "#d68a59",
    "razzle dazzle rose": "#ff33cc",
    "razzmatazz": "#e3256b",
    "red brown": "#a52a2a",
    "red orange": "#ff5349",
    "red violet": "#c71585",
    "red": "#ff0000",
    "rich black": "#004040",
    "rich carmine": "#d70040",
    "rich electric blue": "#0892d0",
    "rich lilac": "#b666d2",
    "rich maroon": "#b03060",
    "rifle green": "#414833",
    "robin's egg blue": "#1fcecb",
    "rose bonbon": "#f9429e",
    "rose ebony": "#674846",
    "rose gold": "#b76e79",
    "rose madder": "#e32636",
    "rose pink": "#ff66cc",
    "rose quartz": "#aa98a9",
    "rose taupe": "#905d5d",
    "rose vale": "#ab4e52",
    "rose": "#ff007f",
    "rosewood": "#65000b",
    "rosso corsa": "#d40000",
    "rosy brown": "#bc8f8f",
    "royal azure": "#0038a8",
    "royal blue": "#4169e1",
    "royal fuchsia": "#ca2c92",
    "royal purple": "#7851a9",
    "ruby": "#e0115f",
    "ruddy brown": "#bb6528",
    "ruddy pink": "#e18e96",
    "ruddy": "#ff0028",
    "rufous": "#a81c07",
    "russet": "#80461b",
    "rust": "#b7410e",
    "sacramento state green": "#00563f",
    "saddle brown": "#8b4513",
    "safety orange": "#ff6700",
    "saffron": "#f4c430",
    "saint patrick blue": "#23297a",
    "salmon pink": "#ff91a4",
    "salmon": "#ff8c69",
    "sand dune": "#967117",
    "sand": "#c2b280",
    "sandstorm": "#ecd540",
    "sandy brown": "#f4a460",
    "sandy taupe": "#967117",
    "sap green": "#507d2a",
    "sapphire": "#0f52ba",
    "satin sheen gold": "#cba135",
    "scarlet": "#ff2400",
    "school bus yellow": "#ffd800",
    "screamin green": "#76ff7a",
    "sea blue": "#006994",
    "sea green": "#2e8b57",
    "seal brown": "#321414",
    "seashell": "#fff5ee",
    "selective yellow": "#ffba00",
    "sepia": "#704214",
    "shadow": "#8a795d",
    "shamrock green": "#009e60",
    "shamrock": "#45cea2",
    "shocking pink": "#fc0fc0",
    "sienna": "#882d17",
    "silver": "#c0c0c0",
    "sinopia": "#cb410b",
    "skobeloff": "#007474",
    "sky blue": "#87ceeb",
    "sky magenta": "#cf71af",
    "slate blue": "#6a5acd",
    "slate gray": "#708090",
    "smalt": "#003399",
    "smokey topaz": "#933d41",
    "smoky black": "#100c08",
    "snow": "#fffafa",
    "spiro disco ball": "#0fc0fc",
    "spring bud": "#a7fc00",
    "spring green": "#00ff7f",
    "steel blue": "#4682b4",
    "stil de grain yellow": "#fada5e",
    "stizza": "#990000",
    "stormcloud": "#008080",
    "straw": "#e4d96f",
    "sunglow": "#ffcc33",
    "sunset orange": "#fd5e53",
    "sunset": "#fad6a5",
    "tan": "#d2b48c",
    "tangelo": "#f94d00",
    "tangerine yellow": "#ffcc00",
    "tangerine": "#f28500",
    "taupe gray": "#8b8589",
    "taupe": "#483c32",
    "tawny": "#cd5700",
    "tea green": "#d0f0c0",
    "tea rose": "#f4c2c2",
    "teal blue": "#367588",
    "teal green": "#006d5b",
    "teal": "#008080",
    "terra cotta": "#e2725b",
    "thistle": "#d8bfd8",
    "thulian pink": "#de6fa1",
    "tickle me pink": "#fc89ac",
    "tiffany blue": "#0abab5",
    "tiger eye": "#e08d3c",
    "timberwolf": "#dbd7d2",
    "titanium yellow": "#eee600",
    "tomato": "#ff6347",
    "toolbox": "#746cc0",
    "topaz": "#ffc87c",
    "tractor red": "#fd0e35",
    "trolley grey": "#808080",
    "tropical rain forest": "#00755e",
    "true blue": "#0073cf",
    "tufts blue": "#417dc1",
    "tumbleweed": "#deaa88",
    "turkish rose": "#b57281",
    "turquoise blue": "#00ffef",
    "turquoise green": "#a0d6b4",
    "turquoise": "#30d5c8",
    "tuscan red": "#66424d",
    "twilight lavender": "#8a496b",
    "tyrian purple": "#66023c",
    "ua blue": "#0033aa",
    "ua red": "#d9004c",
    "ube": "#8878c3",
    "ucla blue": "#536895",
    "ucla gold": "#ffb300",
    "ufo green": "#3cd070",
    "ultra pink": "#ff6fff",
    "ultramarine blue": "#4166f5",
    "ultramarine": "#120a8f",
    "umber": "#635147",
    "united nations blue": "#5b92e5",
    "university of california gold": "#b78727",
    "unmellow yellow": "#ffff66",
    "up forest green": "#014421",
    "up maroon": "#7b1113",
    "upsdell red": "#ae2029",
    "urobilin": "#e1ad21",
    "usc cardinal": "#990000",
    "usc gold": "#ffcc00",
    "utah crimson": "#d3003f",
    "vanilla": "#f3e5ab",
    "vegas gold": "#c5b358",
    "venetian red": "#c80815",
    "verdigris": "#43b3ae",
    "vermilion": "#e34234",
    "veronica": "#a020f0",
    "violet blue": "#324ab2",
    "violet red": "#f75394",
    "violet": "#ee82ee",
    "viridian": "#40826d",
    "vivid auburn": "#922724",
    "vivid burgundy": "#9f1d35",
    "vivid cerise": "#da1d81",
    "vivid tangerine": "#ffa089",
    "vivid violet": "#9f00ff",
    "warm black": "#004242",
    "waterspout": "#00ffff",
    "wenge": "#645452",
    "wheat": "#f5deb3",
    "white smoke": "#f5f5f5",
    "white": "#ffffff",
    "wild blue yonder": "#a2add0",
    "wild strawberry": "#ff43a4",
    "wild watermelon": "#fc6c85",
    "wine": "#722f37",
    "wisteria": "#c9a0dc",
    "xanadu": "#738678",
    "yale blue": "#0f4d92",
    "yellow green": "#9acd32",
    "yellow orange": "#ffae42",
    "yellow": "#ffff00",
    "zaffre": "#0014a8",
    "zinnwaldite brown": "#2c1608"
}

class Matrix{
    constructor(canvas){
        this.canvas      = $('#'+canvas)
        this.timeout     = 100
        this.ctx         = this.canvas.getContext('2d');
        this.background  = 'black'
        this.font        = 'monospace'
        this.fontSize    = '5pt'
        this.charArray   = chars('0','z')
        this.intervel    = null
        this.fontColor   = 'green'
        this.maximize    = true
        this.spaceX      = 150
        this.spaceY      = 150
        this.random      = false
        this.randomColor = false
        this.fadeOut     = false
        this.rain        = false
        this.randJSON    = {x:false,y:false}
    }
    
      

    fadeEffect=()=>{
        if(this.fadeOut){
            this.ctx.fillStyle = '#0001';
            this.ctx.fillRect(0, 0, screen.width,screen.height);
        }
        else{
            this.setBackground(this.background)
        }
    }
    setBackground = (BGColor) => {
        this.ctx.fillStyle     = setColor(BGColor)
        this.ctx.fillRect(0, 0,this.canvas.width,this.canvas.height);
    }
    init = () => {
        this.fadeEffect()
        if(this.maximize) {
            maximize(this.canvas)
        }
    }


    matrix=()=>{
      this.fadeEffect()
      let i,j;
      this.ctx.font  = this.fontSize+' '+this.font;
      let [x,y]=coordinates(this.spaceX,this.spaceY)
      for(i=0;i<x.length;i++){
          for(j=0;j<y.length;j++){
            this.ctx.fillStyle     = setColor(this.fontColor,this.randomColor)
            this.ctx.fillText(rand(this.charArray),x[i],y[j]);
          }
      }
    }
    Random = () => {
      this.fadeEffect()
      this.ctx.font  = this.fontSize+' '+this.font;
      let i,j;
      let [x,y]=coordinates(this.spaceX,this.spaceY)
      try{
          if(this.randJSON.y){
            for(i=0;i<x.length;i++){
                this.ctx.fillStyle     = setColor(this.fontColor,this.randomColor)
                this.ctx.fillText(rand(this.charArray),x[i],screen.height*Math.random())
            }
          }
          if(this.randJSON.x){
            for(i=0;i<y.length;i++){
                this.ctx.fillStyle     = setColor(this.fontColor,this.randomColor)
                this.ctx.fillText(rand(this.charArray),Math.random() * screen.width,y[i])
            }
          }
          else{
            for(i=0;i<x.length;i++){
                for(j=0;j<y.length;j++){
                    this.ctx.fillStyle     = setColor(this.fontColor,this.randomColor)
                    this.ctx.fillText(rand(this.charArray),parseInt(screen.width*Math.random()),parseInt(screen.height*Math.random()))
                }
            }
          }
        
      }
     catch(e){}
      
    }
    Rain=()=>{
        this.fadeEffect()
        this.ctx.font  = this.fontSize+' '+this.font;
        let i,j;
        for(i=0;i<screen.width;i+=this.spaceX){
            for(j=0;j<screen.height*Math.random();j+=this.spaceY){
                this.ctx.fillStyle     = setColor(this.fontColor,this.randomColor)
                this.ctx.fillText(rand(this.charArray),i,j)
                this.ctx.fillStyle         = '#000000'
            }
        }
    }
    
    itrate=()=>{
        this.init()
        this.intervel=setInterval(()=>{
            if(this.random){
                this.Random()
            }
            if(this.rain){
                this.Rain()
            }
            else{
                this.matrix()
            }
        },this.timeout)
    }
    
    break=(delay=1)=>{
        setTimeout(()=>{
            clearInterval(this.intervel)
            console.log('breaked')
        },delay)
        
    }
    hide=()=>{
        this.canvas.style.display = 'none'
    }
}










