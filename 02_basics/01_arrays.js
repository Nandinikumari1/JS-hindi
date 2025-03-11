//array resizable h, aur original array me changes hoga(shallow copy)

const myArr = [0, 2, 5, "nandini", true]
// myArr.shift()        //first element hatane k liye   .shift() aur andr kuch nhi 
console.log(myArr);

console.log(myArr[3]);

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[4] );

myArr.push(17)       //last m kuch add krne k liye
console.log(myArr);

myArr.pop()          //last ka element hatane k liye
console.log(myArr);

myArr.unshift(133)    //suru me add krne ke liye
console.log(myArr);
myArr.shift()          //shift se suru wala element hatt jaega

console.log(myArr);

