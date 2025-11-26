// let arr = [1,2,34,23456,6];

// const c = arr.sort((a,b) =>b - a)
// console.log(c[1]);


//++++++++++++++++++++++++++++++++++++++++++

//Find duplicates in an array.
let arr = [1, 2, 3,  4, 3, 5];

let seen = new Set();
let duplicates = new Set();

 for(let num of arr) {
    if (seen.has(num)) {
        duplicates.add(num);
    }

    else {
        seen.add(num);
    }
 }

 console.log([...duplicates]);
 