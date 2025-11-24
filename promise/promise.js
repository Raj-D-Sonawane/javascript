// setInterval(()=>{
//     console.log("run after two sec");
    
// }, 2000)

// function fetch (callback) {
//     setTimeout(() => {
        
//         callback('data received')
//     }, 2000);
// }

// fetch((re) => {
//     console.log(re);
    
// })

// const promise = new Promise((resolve, reject) => {
//   if (false) {
//       setTimeout(() => {
//         resolve("Success")
//     },2000);
//   } else {
//      reject("Condition was false");
//   }
// })

// promise
// .then((data)=>{
//     console.log(data);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })

async function fetchData() {
    try {
        let data = await new Promise((resolve) => {
            setTimeout(() => {
                resolve('data received')
            }, 2000);
           
            
        })
         console.log(data);
    } catch (error) {
        console.log(error);
        
        
    }
    
}

fetchData()