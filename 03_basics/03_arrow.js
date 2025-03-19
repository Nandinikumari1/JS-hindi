//this--- current ekdam se latest context me used
const user = 
{   
    username: "Hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to this page.`);
        console.log(this);
        
        
    }
}
//ab access krna h is object k element ko to normal dot laga k object name k baad,,like user.email
// user.welcomeMessage   //ye ab ek method h welcome message ke andar to ()lgana hoga execute hone k liye
// user.welcomeMessage()
// user.username  = "SAM"   //value change krne pr, jo v current context h uske basis pr username print hoga "this. username"  
// user.welcomeMessage()

//OUTPUT
/*
Hitesh, welcome to this page.
SAM, welcome to this page. ...............YE AFTER CHANGING VALUE
*/

console.log(this);       //{}..........node environment m empty , kuch nhi h global yaha
//inspect krne k baad pta chalega ki Window object hai global object in browser

