//for getting multiple arguments more than 2,3,4,.... in FUNCTION
//rest operator== tin dot== ...num1 etc
function calculateCartPrice(no1)
{
    return no1
}
console.log(calculateCartPrice(400));
//==============================multi arguments ho tb: rest... use  ==============================================
function calculateCartPric(...num1)
{
    return num1
}
console.log(calculateCartPric(400, 500, 700,100));        //[ 400, 500, 700, 100 ]    yani array m krke dega values
//========================smtg new====================================
function calculate(val1, val2, ...numb1)      //[ 299, 199, 599 ] ye output last se tino
{
    return numb1
}
console.log(calculate(14, 17, 299, 199, 599));
console.log(calculate());   //[] empty array dega


