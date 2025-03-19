//for loop no. 1-10 tk
//scope ke bahar nhi aayega variable andar wala
//                        condition check fir andar
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
        
    }
    //console.log(element);
    
    
}
//console.log(element);  //scope k bahar h eleemnt word



for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner  loop value ${j} and inner loop ${i}`);
         //console.log(i + "*" + j + " = " + i*j);
         
        
    }
    
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let k = 0; k < myArray.length; k++) {
    const element = myArray[k];
    console.log(element);
    
}