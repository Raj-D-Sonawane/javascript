// function sayHello() {
//     console.log("R");
//     console.log("A");
//     console.log("J");
    
    
    
// }

// sayHello()


// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
    
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result;
    return num1 + num2
}

 const result = addTwoNumbers(3, 4)
//  console.log(result);
 
function loginUserMassage(username = "sam") {
    if(!username){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMassage("raj"))

function calculateCartPrice(...num1){
return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username : "hitesh",
    price : 1999

}

function handleObject(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
    


}

// handleObject(user)

handleObject({
    username: "sam",
    price :399
})

const myNewArray = [100, 200,300,400]

function returnSecValue(getArray) {
    return getArray[1]
}

// returnSecValue(myNewArray)
console.log(returnSecValue(myNewArray));
