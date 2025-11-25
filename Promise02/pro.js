// const promiseOne = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log('Async task is complete');
//         resolve()
        
//     }, 1000);
// })

// promiseOne.then(()=>{
//     console.log('promise consumed');
    
// })

// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// }).then(()=> console.log("promise consume"))


// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve({username : "chai", email : "raj@12334"})
        
//     }, 1000);
// })

// promiseThree.then((user)=>{
//     console.log(user);
    

// })

// const promiseFour = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let error = false
//         if(!error) {
//             resolve({username: "raj", password: "123"})
//         } else {
//             reject('ERROR : Something went wrong')
//         }
//     }, 2000);
// })
//  promiseFour
//  .then((user)=> {
//     console.log(user);
//     return user.username
    
    
// })
// .then((username )=>{
// console.log(username);


// })
// .catch((err)=>{
//     console.log(err);
    
// })
// .finally(()=> console.log("the promise is complete"))


// const promiseFive = new Promise((resolve, reject) => {
    
//   setTimeout(() => {
//          let error = true
//          if(!error) {
//              resolve({username: "java", password: "123"})
//       } else {
//             reject('ERROR : Js went wrong')
//         }
//     }, 2000);

// });

// async function consumePromiseFive()  {
//    try {
//      const response = await promiseFive
//     console.log(response);
//    } catch (error) {
//       console.log(error)
//    }
    
// }
// consumePromiseFive()


// async function getAllUser() {
//  try {
//    const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await response.json()
//   console.log(data);
//  } catch (error) {
//   console.log("error");
  
  
//  }
  
// }
// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return response.json()
})
.then((data)=>{
console.log(data);

})
.catch((error) => console.log(error))