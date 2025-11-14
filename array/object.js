// // const tinderUser =  new Object()
// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sunny"
// tinderUser.isLoggedIn = false


// // console.log(tinderUser);

// const regularUser = {
//     email : "some@gmail.com",
//     fullname : {
//         userfullname : {
//             firstName : "raj",
//             lastName : "Sonawane"
//         }
//     }
// }

// // console.log(regularUser.fullname.userfullname.firstName);

// const obj1 ={
//     1: "a",
//     2 : "b"
// }
// const obj2 = {3 : "c", 4 : "d"}

// // const obj3 = {obj1,obj2}
// // const obj3 = Object.assign({},obj1,obj2)

// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);

// const user = [
//     {
//         id : 1,
//         email : "h@gmail.com"
//     }
// ]
// // console.log(user[0].id)

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));
// // console.log(tinderUser.hasOwnProperty('isLogged'));


// const course = {
//     Coursename : "js in hindi",
//     Price : "999",
//     courseInstructor : "hitesh"
// }

// // const  {courseInstructor} = course
// const  {courseInstructor : obj} = course
// console.log(obj);

let obj = {a : 1};
Object.seal(obj);
obj.a =10;
obj.b = 20;
console.log(obj);
