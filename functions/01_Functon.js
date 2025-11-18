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

console.log(loginUserMassage("raj"))