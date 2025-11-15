// function sayMyName() {
//     console.log("R");
//      console.log("A");
//       console.log("J");
    
// }

// sayMyName() //execution
// sayMyName   //refernse


// function addTwoNumbers(num1, num2){  // num1,num2 parameters
// // let result = num1 + num2
// // return result
//     return num1 + num2
// }

// const result = addTwoNumbers(3, 4)  // arguments
// // console.log(result);

function calculateCartPrice(...num1) {
    return num1
    
}

// console.log(calculateCartPrice(200, 400,500, 2000));



// console.log("hello");

const user = {
    username : "hitesh",
    prices : 199
}

function handleObject(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price } `);
    
}

// handleObject(user)
handleObject({
    username : "sam",
    price : 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecValue (getArray){
    return getArray[1]
}
console.log(returnSecValue(myNewArray));
