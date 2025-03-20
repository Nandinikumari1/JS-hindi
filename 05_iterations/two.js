let index = 0               //initialization jese for loop m hota tha
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2      //loop terminate krne ka condition must likhe
}
console.log("\n");
//array pr while loop


let myArr = ["flash", "batman", "superman"]
let arr = 0
while (arr < myArr.length) {
    console.log(`value of array is ${myArr[arr]}`);
    arr = arr + 1
}
//do while

let score = 1

do {
    console.log(`Score is ${score}`);
    score = score + 1        //to terminate the loop

} while (score <= 10);