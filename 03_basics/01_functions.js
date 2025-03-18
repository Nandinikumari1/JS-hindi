//keyword function , name like variable name, (){ andar code}
function sayMyName()
{
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()
/*H
I
T
E
S
H */
//function ko call krne k liye name() , NOTE agar only function name h to that's reference to function
//EG- sayMyName but sayMyName() ye call huwa function ka means execution, small bracket lagane se hi execute hoga

function addTwoNum(number1, number2){
   console.log((number1 + number2));
    
}
// addTwoNum() //ye krne se kuch nhi aayega NaN aayega , argument me no. values dein
// addTwoNum(3, 4)
// addTwoNum(3, "4")   //string ban gya pura output: 34 niche v
// addTwoNum("3", 4)   //note andar wlaa 3, 4 term is called arguments. definition wale ko parameter bolte h
// addTwoNum(3, "a")    //3a
// addTwoNum(3, null)   // 3 output

//======================== return krne k liye variable m store krke "return" keyword: ==========================================================
function addTwoNumbers( num1, num2)
{
   let result = num1 + num2    //stored in variable , remember scope
   return result
}
const addition = addTwoNumbers(5,7)
// console.log("result is:",addition);   //  result is: 12
//============================================= Method 3: direct return , w/o using variables to store ==========================================================
function summation(numb1, numb2) {
    return numb1 + numb2
    
}
//REM: store function in variable , then print kraye using console log
const res = summation(13, 12)   //call after storing 
// console.log("value of addition is: ", res);  //variable hi print kraega

// console.log("add=",(summation(3,3)));   //bakwas looking, apne se

//==============================================================================================================================
function loginUserMessage(username) 
{
    return `${username} just logged in`
}
loginUserMessage("Hitesh")  //kyuki print krane k liye store kraya hi nhi variable m, ya console log kiya hi nhi
// console.log(loginUserMessage("Histesh sir"));
// //some cases like null, empty stirng, undefined arguments hone pr
// console.log(loginUserMessage("   "));             //    just logged in
// console.log(loginUserMessage());    //if else se check----undefined just logged in......undefined dega agr kuch nhi doge to
// console.log(loginUserMessage(null));             //null just logged in



//=================================================== if else se check krke ====================================================================
function loginUserMessage(username) 
{
    if(!username){                         // same meaning===>>> if(username === undefined)
        console.log("please enter username");
        return
    }
    return `${username} just logged in`            //ye run nhi hoga ab kyuki return hai if me hi
}
loginUserMessage("Hitesh")  //executed but not run kyuki where is it returned
// console.log(loginUserMessage());
// please enter username,,,,,,,,,,,,,, ye if se aaya hai
//=================default m kuch parameters me value rkhne se undefined jesa case ayaega hi nhi:========================================================================================================
function loginUsrMessage(username = "SAM")
{
    return `${username} just logged in.`
}
console.log(loginUsrMessage());
console.log(loginUsrMessage("Nandini"));

// SAM just logged in.          -----------default value de dega , if wlaa check krna hi nhi pdega undefined etc case
// Nandini just logged in.

