//function m array paas krna
//step 1 array banae. step 2-> function jisme parameter kuch aur name se ho, return/console andar parameter[index dein array element ka]
//step 3-> funct call me array ka name dein inside function argument, console log kr skte h

const myNewArray = [20, 400, 500, 100, 4]
function anyName( something)
{
    return something[3]
}
// console.log(anyName(myNewArray));  //100
//===============================direct array pass w/o variable me daale====================================================
// SYNTAX LIKE THIS:         console.log(anyName([ISKE ANDAR ARRAY ELEMNTS DEIN]));         //no. of brackets ka dhyan de
console.log(anyName([344, 566, 788, 900]));
//900
//kyuki upr function me third index ====4th possition ki value mangi gyi h