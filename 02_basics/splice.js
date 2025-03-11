const myArr = new Array(0, 1, 2, "nandini", 34, true, 6, 7)

console.log(myArr);

//    .slice(smtg1, smtg2 )............smtg2 included nhi rhega
const myn1 = myArr.slice(1,4)        //.....4th element se ek pahle tk.....
console.log(myn1);
console.log("A : ", myArr);    //original array abhi v wahi h old wala jisme sab elements h sato(7)

/////////////////////////////////////// SPLICE ///////////////////////////////////////////////////
console.log("B : ", myArr);

//   .splice(smtg1, smtg2)..........smtg2 i.e. range v include hoga splice me
const myn2 = myArr.splice(1,4)

console.log("C : ", myArr);      // OUTPUT--->    C :  [ 0, true, 6, 7 ]

console.log(myn2);    // OUTPUT: [ 1, 2, 'nandini', 34 ] LAST WALA V AAYEGA SPLICE 











