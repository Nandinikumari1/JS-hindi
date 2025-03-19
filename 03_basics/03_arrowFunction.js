const chai = ( ) => {
    console.log(this);
    
}
chai()

// ( isme kuch v normally parameters can be entered)
const variableName = () =>
{
    let username = " Hitesh"
    console.log(this.username);    //ye normally undefined aayega nrmal function ke jese in ARROW FUNCTION as well
    
}
variableName()    
//undefined 