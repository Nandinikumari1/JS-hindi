//keys pura, pura values access krne k liye
// ----> Object.keys/values(obj name), o capital
//interesting-- Object.entries(obj ka name)

const tinderUse ={
    id: "123abc",
    name: "Sammy",
    isLoggedIn: false
}
console.log(tinderUse);
console.log(Object.keys(tinderUse));
// [ 'id', 'name', 'isLoggedIn' ]  note-- Object likhe, Object's' nhi defined h 
console.log(Object.values(tinderUse));  //[ '123abc', 'Sammy', false ]



//SUMMARY
/* NOte -> array data type me output milega
Object.values(andar m object ka name jiska values chahiye)

similrly, Objects.keys(respt object ka name)
pura ka consolelog krre
tinderUse.length etc v properties 
*/


//interesting-- Object.entries(obj ka name)
console.log(Object.entries(tinderUse));
//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
//array k anndar array jisme key value pairs 
//Returns an array of key/values 
//first wala hamesha key, baad wlaa values always


console.log(tinderUse.hasOwnProperty('isLoggedIn'));
//true
console.log(tinderUse.hasOwnProperty('isLogged'));
//false

//console browser m objct ka property dekhe