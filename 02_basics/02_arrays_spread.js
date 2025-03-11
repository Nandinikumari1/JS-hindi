const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "batman", "flash"]

//...(array name), ...array name second to be merged ---> SPREAD  YANI 3 DOT(___) AUR COMMA

const merged_heroes = [...marvel_heroes, ...dc_heroes]  
console.log(merged_heroes);

//.........FLAT AUR DEPTH INFINTY.............(single new array aayega concentric array sab merged hoke)

const interesting = [2, 3, 4, ["nandini", 1, 5, 7], 6, [6, 4, [3, 4, 1]]]
console.log(interesting.flat(Infinity));    //[ 2, 3, 4, 'nandini', 1, 5, 7, 6, 6, 4, 3, 4, 1 ]

