// if 

const isUserloggedIn = true
const temparature = 41

// if (temparature === 41) {
//     console.log("less than 50");

//     }
//     else{
//         console.log("more than 50");
        
//     }
//<,>,<=,==,!=, === , !==

// const score = 200

// if(score > 100) {
//     let power = "fly"
//     console.log(`user power : ${power}`);
    
// }

// const balance = 1000

// // if(balance > 500) console.log(("test"));

// if (balance < 500) {
//     console.log("less than");
    

// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if ( balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if ( userLoggedIn && debitCard) //and oprator sagdy condition true aslya pahije
{
    // console.log("Allow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail)  // or operator konti pan ek condition true asli pahije
    {
    // console.log("user logged in");
    
}

//  Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

// console.log(val1);

// Terniary Operator

// condition ? true : false

const ice = 100
ice <= 80 ? console.log("less than 80") : console.log("more than 80");

