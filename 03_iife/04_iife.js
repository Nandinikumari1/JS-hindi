//IIFE-> IMMEDIATELY INVOKED FUNCTION EXPRESSION
//SYNTAX ( )( );          .....(ISME FUNCTION KI DEFINITION ) (ISSE METHOD CALL, PARAMETER DAALE); semi colon se roke line


//normal function
function chai()
{
    console.log("DB CONNECTED");
    
}
// chai()

//iife 
(function chai()
//NAMED IIFE Kyuki chai name h iska
{
    console.log("DB CONNECTED");
    
})();                //semicolon zrur de, wrna niche ka code run nhi hoga, to end this line
//==============================================================================================
//arrow function in iife eg:-
( () => {
    console.log("db connected two");
    
}     )();

//==================================================================================================
//arrow function aur parameter argument, aur insert krna wo parameter printing m eg:-

( (name) => {
    console.log(`db connected three ${name}`);
    
}) ("nandu")