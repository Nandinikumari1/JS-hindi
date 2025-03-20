//for of loop.. array pr lgta h majorly

let myArr = [1, 2, 3, 4, 5]
for (const num of myArr) {
    //console.log(`each elemnt of array is: ${num}`);
    
}
//no need any terminating condition , koi increment decrement ki bhi jrurat nhi h, direct print kra skte h
let greetings = "Hello World!"
for (const greet of greetings) {
    //console.log(`greeting have each character as ${greet}`);
    if (greet == " ") {
        break
    }
    //console.log(`greeting have each character as ${greet}`);
}

//maps
let mapp = new Map()
mapp.set('IN' , 'India')
mapp.set('NP' , 'Nepal')
mapp.set('FR', 'France')
console.log(mapp);

//loop lgane par maps me,,, for of loop
for (const key of mapp) {
    console.log(key);
    
}
/* output
[ 'IN', 'India' ]
[ 'NP', 'Nepal' ]
[ 'FR', 'France' ]
*/

//to access each keys and each values different syntax
//square bracket lga ke, given variable pr, here KEY
for (const [key] of mapp) {
    console.log(key);
    
}
//similarly values ke liye
for (const [key, value] of mapp) {
    console.log(key ,`:- `,value);
    
}
/*
IN :-  India
NP :-  Nepal
FR :-  France
*/

//kya objects pr for of loop lgega?
const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
for (const [key, value] of myObj) {
    console.log(myObj);
    
}
//TypeError: myObj is not iterable