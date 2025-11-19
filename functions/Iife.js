(function chai (){
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();
( (Name)=>{
    //SIMPLE IIFE
    console.log(`DB CONNECT TWO ${Name}`);
    
})('raj');

const result = ( (A,b)=>{
    return A + b
})(4, 6)

console.log(result);
