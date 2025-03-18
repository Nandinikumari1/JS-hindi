//object ko function me kaise pass kiya jata h, typesafety ? etc

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject)     //anyobject key word use kre , function parameter me
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);  //parameter.object ka property jo access krna h
    
}
// handleObject(user)  //argument, function call krte time object ka name de jisko attach krna h
// //username is hitesh and price is 199


//=================direct object v pass kr skte h======handleObject({iske andr kuch de}); ese format====================
handleObject({
    username: "SAM",
    prices: 100
});

//username is SAM and price is 100

