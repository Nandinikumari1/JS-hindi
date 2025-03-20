const myCodingInfo = [
    {
        languageName: "javascript",
        language_fileName: ".js"
    },
    {
        languageName: "python",
        language_fileName: ".py"
    },
    {
        languageName: "java",
        language_fileName: ".j"
    }
]

//array ke andar objects ka element ka access lene ke liye
//(for each loop) best yhi h-------->iske andar arrow function, usme parameter, aur console krte smay--> parameter.element name
myCodingInfo.forEach( (item) => {
    console.log(item.languageName);
    
})
//output->ese krke ek ek value nikal skte h for further use

//javascript
//python
// java
