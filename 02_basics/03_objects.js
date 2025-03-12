//OBJECTS IN JS

const mySym = Symbol("key1")  //symbol ese declare hota h, S capital

const JsUser = 
{
    name: "Nandini",
    "full name" : "Nandini Kumari",          //isko dot se access nhi krr skte
    age: 19,
    [mySym]: "nandan wan",              //bracket m symbol likhte h key ko
    location: "Paris",
    email: "nandan@gmail.com",               //no. ,string etc
    isLoggedIn: false,                       //boolean
    lastLoggedInDays: ["Monday", "Saturday"] //array
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);                //better way to access objects ka elements
// console.log(JsUser["full name"]);            //sq bracket se hi accessed hoga only ye
// console.log(JsUser[mySym]);                  //[Symbol(key1)]: 'nandan wan'
// console.log(typeof (mySym));

JsUser.email = "nan@microsoft.com"    //yaha change ho gya email. par. freeze hone k baad wahi rhega
// Object.freeze(JsUser)
JsUser.email = "nandini@gdg.com"     //freeze hone ke baad chnage nhi hoga kuch v us object m
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
    
}
// console.log(JsUser.greeting);  //output:-  [Function (anonymous)]
console.log(JsUser.greeting());    //Hello JS User

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}
console.log(JsUser.greetingTwo());



