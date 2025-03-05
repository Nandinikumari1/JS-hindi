console.log("Nandini")
const gameName = new String('Nandinikri')
console.log(gameName);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('d'));
console.log(gameName.substring(2, 6));
// console.log(gameName.substring(2,-6));
// console.log(gameName.substring(-2,6));
// console.log(gameName.slice(3, 8));
console.log(gameName.slice(-3, 8));

const newString = gameName.substring(0, 7)
// console.log(newString);
const anotherString = gameName.substring(-0, 7) //treats as positive value in substring, negativ ignored.
console.log(anotherString);
const thirdString = gameName.slice(1, -7)
console.log(thirdString);
console.log("bhakk");




