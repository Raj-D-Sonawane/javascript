// Primitive
//  7 types : String, Number , Boolearn, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 123212321232121212n


// Reference (non Primitive )
//Array, Objects, Functions

const heros = ["raj", "yesh", "ramu"];

let myObj = {
    name : "hitesh",
    age : 2,
}

const myFun = function name(params) {
    console.log("hello world");
    
}


// console.log( typeof bigNumber);
// console.table({
//   myFun: typeof myFun,
//   myObj: typeof myObj,
//   id: typeof id,
//   heros: typeof heros
// });

let myYou = "rajSonawane@123"
let anotherYou = myYou

anotherYou ="sai@123"

// console.log(myYou);
// console.log(anotherYou);


let user = {
  email : "user@ybl",
  upi : "rajababi"
}

let user2 = user

user2.email = "user2.com"


console.log(user.email);
console.log(user2.email);




