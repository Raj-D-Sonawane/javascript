// const  myNum = [1,2,3,4,5,6,7,8,90]

// const newNum = myNum.map(e => e + 10)

// const  myNum = [1,2,3,4,5,6,7,8,90]
// const newNum = []
//  myNum.forEach(element => {
//     newNum.push( element + 10 )

    
// });
// const newNum = myNum
// .map(e => e * 10)
// .map(e => e + 1)
// .filter(e => e >= 40)

// console.log(newNum)

const myNum = [1,2,3]

const mytotal = myNum.reduce(function(acc, currval){
    console.log(`${acc} and ${currval}`);
    
    return acc + currval
}, 0)

console.log(mytotal);

