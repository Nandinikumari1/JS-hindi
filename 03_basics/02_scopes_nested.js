function one(){
    const username = "hitesh"

    function Two(){
        const website = "youtube"
        console.log(username );
        
    }
    //console.log(website);  //scope bahar nhi h 
    
    // Two()           //hitesh output
}
// one()                  // nothing output but runs

//==================================== nested if else ka scope ==================================================
if(true)
{
    const username = "histeh"
    if(username === "histeh")
    {
        const website = " Youtube"
        // console.log(username + website);
        

    }
    // console.log(website);     //error
    
}
// console.log(username);          //error

//++++++++++++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log((addone(6)));        //7

function addone(num1)
{
    return num1 + 1
}
//addone(6)   agar normal function ko call pahle v karege to v no issue in running

//this is EXPRESSION  below: isme error dega agr pahle call kar lye to

addTwo(6)            //Error: Cannot access 'addTwo' before initialization 
const addTwo = function(num1)
{
    return num1 + 2
}
// console.log( addTwo(6) )  ;// 8

//hoisting in JS . jab variable m store ho to uske declaration se phle use nhi kr skte function ko