// const promiseOne = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('Async task is compelete');
//         resolve()
        
//     },1000)
// })

// promiseOne.then(()=>{
//     console.log("promise consumed");
    
// })

// new Promise ((resolve,reject)=> {
//     setTimeout(()=>{
//         console.log("Async task 2");
//         resolve()
        
//     }, 1000)
// }).then(()=>{
//     console.log("Successful");
    
// })

// const promiseThree = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         resolve({username: 'raj', email : "raj@123"})
//     },1000)
// })
// promiseThree.then((user)=>{
//     console.log(user);
    

// })

// promiseFour = new Promise((reject, resolve)=>{
// setTimeout(()=>{
//     let error = true
//     if (!error) {
//         resolve({username: "yesh", password :"123"})
        
//     }else{
//         reject('ERROR: ')
//     }
    
// })
// }, 1000)


//  promiseFour
//  .then((user)=>{
//  console.log(user);
//  return user.username
 
// })
// .then((username)=>{
//     console.log(username);
    

// })
// .catch((error)=>{
//     console.log(error);
    
// })
// .finally(()=>{
//     console.log("the promise ");
    
// })


// const promiseFive = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         let error = true
//         if (!error) {
//             resolve({username: "yesh", password :"123"})
//         } else {
//             reject('Error: Something')
//         }
 
//     }, 1000)
// })

// async function consume (){
//  try{

//       const respone =  await promiseFive
//    console.log(respone);
//  }catch (error){
//     console.log(error);
    

//  }
   
// }
// consume()



// async function getAllUsers() {
//   try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const date =  await response.json()
//     console.log(date);
    
//   } catch (error) {
//     console.log("errr");
    
//   }
    
// }



// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((respone)=>{
    return respone.json()
    
})
.then((data)=>{
    console.log(data);
    
})
.catch((error) => console.log(error)
)