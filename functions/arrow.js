const user = {
     username : "hitesh",
     price : 999,

     welcomeMessage : function(){
     //    console.log(`${user.username} welcome to website`);
     //     console.log(`${this.username} welcome to website`);
     //     console.log(this);
         
        
     }
    
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function  chai(){
//      let username = "hitesh"
//      console.log(this.username);
     
// }
// chai()

const chai = () => {
     let username = "raj"
     console.log(this);
     
}
// chai()

// const addTwo = (num1, num2) =>  num1 + num2   // eka line madhe lihl tar return key word cha use karaychi garj nhi
// const addTwo = (num1, num2) =>  (num1 + num2 )  // ()parenthes jar use kele tari return kayword use karaychi garj nhi
const addTwo = (num1 , num2 ) => {
     return num1 + num2  // curly brases {} jar use kela tar return kayword use karava lagto
}


console.log(addTwo(3,5));

