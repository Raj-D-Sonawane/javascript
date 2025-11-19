// const userEmail = "R@gmail.com" //string truthy value
// const userEmail = "" //empty string falsy value
const userEmail = [] 


if (userEmail)
{
    console.log("Got User Email");
    
} else {
    console.log("Dont have user email");
    
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false' , " " , truthy, [],{}, function(){}