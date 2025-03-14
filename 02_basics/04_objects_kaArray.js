//array of objects and its access
//const users = [ {}, {} , {}] //etc

const users = [
    {
        id: "123abc",
        email: "nandan@gmil.com"
    },
    {
        id: "345xyz",
        email: "some@gdg.com",
        price: 555

    },
    {

    }
]
console.log(users[1].email);
/*note--> users[1] kyuki array ka first element access krna
 ab kyuki ((users[1]= {smtg})) ye ek object hai to dot lga ke access kre
users[1].email isko console log krne pr output---->some@gdg.com
 */