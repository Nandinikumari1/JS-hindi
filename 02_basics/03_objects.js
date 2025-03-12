//OBJECTS IN JS

const mySym = Symbol("key1")  //symbol ese declare hota h, S capital

const JsUser = 
{
    name: "Nandini",
    "full name" : "Nandini Kumari",          //isko dot se access nhi krr skte
    age: 19,
    [mySym]: "nandan wan",
    location: "Paris",
    email: "nandan@gmail.com",               //no. ,string etc
    isLoggedIn: false,                       //boolean
    lastLoggedInDays: ["Monday", "Saturday"] //array
}
console.log(JsUser.email);
console.log(JsUser["email"]);                //better way to access objects ka elements
console.log(JsUser["full name"]);            //sq bracket se hi accessed hoga only ye
console.log(JsUser[mySym]);
console.log(typeof (mySym));



