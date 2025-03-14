//singleton object 
const tinderUser = new Object()
// console.log(tinderUser);        //{} output empty object


//non singleton object declaration method
const tinderUser2 = {}   //note ye v empty obj hi h
// console.log(tinderUser2);

tinderUser.id = "123abc"           //element daal rhe object me
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);   //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

//NESTED OBJECT
const regularUser = 
{
    email: "some@google.com",
    fullname:
    {
        userfullname: 
        {
            firstname: "hitesh",
            lastname: "choudhary"
        }

    }

}

//ACCESS-> using dot
 
// console.log(regularUser.fullname); 
//{ userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }

// console.log(regularUser.fullname.userfullname);  //{ firstname: 'hitesh', lastname: 'choudhary' }

console.log(regularUser.fullname?.userfullname.lastname);
// choudhary

//optional chaining, ? laga k if else wlaa sawal puchna fir aage bdhna
//agr ye value h to kriye wrna kuch aur kro //if else lgana pdega

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);       
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//                  {}=target, source
const obj3 = Object.assign({}, obj1, obj2)  //suru wala empty target rhega, usi m store krein empty {} me
console.log(obj3);

const obj0 = {...obj1, ...obj2, ...obj4}    //spread method...se
console.log(obj0);



