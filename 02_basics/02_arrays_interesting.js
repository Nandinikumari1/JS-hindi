console.log(Array.isArray("Nandini")); //.isArray() se boolean me ques puch skte h

console.log(Array.from("Nandini")); //.FROM() se converts into array jo v value denge--> string /obj etc

//............VVI............
console.log(Array.from({name: "Nandan"})); //[]empty array return krega kyuki specify krna pdega key/value

// OUTPUT-->   []

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

// output: [ 100, 200, 300 ]