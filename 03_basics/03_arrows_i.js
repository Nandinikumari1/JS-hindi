const user = 
{   
    username: "Hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to this page.`);
        console.log(this);
        
        
    }
}
user.welcomeMessage //execute nhhi hoga kyuki method h use ye "()""
user.welcomeMessage()
user.username  = "SAM"   
user.welcomeMessage()

//OUTPUT
/*
Hitesh, welcome to this page. .......LINE 14 SE NICHE THIS KA AAYA H CURRENT CONTEXT SHOWING
{                                  ....YE PURA CURRENT SCOPE H WAHI CURRENT CONTEXT HAI THIS KA
    username: 'Hitesh',
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
  }
  SAM, welcome to this page.          ......AB CHANGE KR DIYE USERNAME TO,, THIS.USERNAME ME YE WALA VALUE HOGA
  {
    username: 'SAM',                   ......AB YE PURA OBJECT HI CURRENT CONTEXT BN GYA, JISME SAM H USERNAME
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
  }

*/