//
//if
/*
if (true) {
    andar ka code execute hoga 
}


if (false) {
    andar ka code execute nhi hoga kabbhi agr false h
}

*/

const isLoggedIn = true
const temperature = 41
if(temperature < 50)
{
    console.log("less than 50");
    
}
console.log("temp is greater than 50");

//implicit if, bina bracket diye likhna smae line m
const balance = 1000
if (balance> 500) console.log("test1"), console.log("test44444");
const month = 3
switch (month) {
    case 1:
        console.log("jan");
        
        break;
    case 2:
        console.log("feb");
        
        break;
    case 3:
        console.log("march");
        
        break;
    case 4:
        console.log("April");
        
        break;

    default:
        console.log("use valid key");
        
        break;
}
