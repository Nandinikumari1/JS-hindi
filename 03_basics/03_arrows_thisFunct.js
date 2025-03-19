function chai(){
    let username = "histesgh"   //we cant access isername in function using this . krke property name in object.
    console.log(this.username);    // esa krne se undefined...yani function me ye chiz nhi kaam krega object me only
    console.log(this);
    
}
chai()


//OUTPUT BHUT BADAA

/*

<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}

*/

//ese v function define hota hi hai
const tea = function(){
    console.log(this);
    
}
tea()

//ARROW FUNCTION SYNTAX-
//function hata denge aur "( )"" baad arrow" => "ye lga ke { iske andar code likh de}, aur call kre variable name() method jese
const teas = () => {
    console.log(this);
    
}
teas()   //{} output
