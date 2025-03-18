//avoid var 

//{} curly braces k andar ka variable bahar define nhi hona chahiye...
//let, const, var have diff features
//var c = 333

let a = 30000

if (true)             //if k andar block scope, bahar global scope
{
    
    let a = 10            //global scope ko priority dega print me
    const b = 20
    // var c = 30      //var scope k bahar bhi valid hota h
    // d = 50
    console.log("INNER: ", a);
    
    
}
    console.log(a);   //defined nhi hoga scope k baahar let variable
    // console.log(b);   //defined nhi hoga scope k baahar let variable

    // console.log(c);  
    // console.log(d);
  