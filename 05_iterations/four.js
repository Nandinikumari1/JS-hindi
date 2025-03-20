//for in loop--OBJECTS ME YE LGEGA
const myObject ={
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "SWIFT by apple"
}
//                                isme key print krana wasy h direct wo variable name do, no need of square bracket
//console.log(myObject);            //value print krane ke liye hme objectname ke baad square bracket me key likhna hoga
for (const key in myObject) {       //in aur of ka difference hai bas

    //console.log(key);
    //console.log(`keys of this object is ${key} and value is ${myObject[key]}`);
    
    
}
//-------------------------------array par for in loop-----------------------------------------------
const programming = ["java", "cpp", "ruby", "javascript", "python", "c", "swift"]
for (const key in programming ) {
    //console.log(key);   // array ka index value aayega direct print kroge variable or key to , value nhi

    // to access value of array, syntax arrayName[andar key ya index ka name]

    //console.log(`values of array are:- ${programming[key]}`);
    
}

//---------------------------------------kya map par for in loop lgta h?-----------------------------------------------------------------------------
// ---------------------- ans-> map iterable nhi h, isliye nhi- par error nhi dega run ho jaega---------------------

let mapp = new Map()
mapp.set('IN' , 'India')
mapp.set('NP' , 'Nepal')
mapp.set('FR', 'France')
//console.log(mapp);

//-----------forin looop---------in map--------------------------------
for (const key in mapp) {
   console.log(key);
   
}
//run hoga, output nhi aayega kuch , kyuki not iterable -> MAPp