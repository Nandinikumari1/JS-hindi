//syntax:    () => {}  ,,,we can store it in a variable also 
const addTwo = (num1, num2) => {
    return num1 + num2
}
// addTwo(6, 8)            //print krana hoga ya store karana hoga value ko kyuki return huwa h , to print nhi krega apne se
// console.log(addTwo(6, 8));   //14 

//============ ARROW FUNCTION ______'IMPLICIT RETURN'_______curly bracket nhi, same line me, return nhi likhe======================================
//const adTwo = (num1, num2) => num1 + num2
const adTwo = (num1, num2) => (num1 + num2)    //return keyword nhi likhna pdega , parenthesis m, curly braces m return must h
    
console.log(adTwo(8, 9));   //17

//=============================agar object return krna hota implicitly tb?=========================================================================
//const myself = (num1, num2) => {username: "hitesh"}   //ye galat h, ese object return nhi hoga , paranthesis me wrap kre 
const myself = (num1, num2) => ({username: "hitesh"})

console.log(myself());  //{ username: 'hitesh' }
