const user = 
{   
    username: "Hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to this page.`);
        console.log(this);
        
        
    }
}

console.log(this);
//{}  ..........node environmnt me global object this se dekhne pr empty dega 
// NOTE: CONSOLE ME WINDOW OBJECT IS GLOBAL OBJECT, AFTER DOING INSPECT 
