const coding = ["cpp", "python", "javascript", "ruby", "java"]

// coding.forEach( function (item) {
//     console.log(item);
    
// })

//======================arrow function se ===========================================================================
// coding.forEach( (value) => {
//     console.log(`values of coding array is: ${value}`);
    
// })

//================================normal function ko pass krna( for each) me=====================================
function printMe(item, index, arr)           ///eksaath itna chiz laata h ye apne saath, use accordingly
{
    //console.log(item);
    console.log(item, index, arr);
    
    
}
coding.forEach( printMe)   //function ka bas reference dena hai, excecute nhi , ye() lgana h

