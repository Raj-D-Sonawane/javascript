// const name = "hitesh"
// const repoCount = 50

// console.log(name + repoCount + "value");

// console.log(`Hello my name is ${name} and my repocont is ${repoCount}`);

// const gameName = new String('r-aja-bahau')

// console.log(gameName[2]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('b'));
// const newString = gameName.substring(2,6)
// console.log(newString);
// const anotherString = gameName.slice(-6, 1)

// console.log(anotherString);


// const string1 =  "      hiiraja    "       
// console.log(string1);
// console.log(string1.trim());


// console.log(gameName.split('-'));




// let str = "hello"
// let reversed = str.split('').reverse().join('');
// console.log(reversed);
// console.log(str);

/*
split('')-> converts string to array -> [h, e ,l, l, o]
reverse() -> reverse the array [0, l, l, e,h]
join() -> joins elements back into a string

*/

let str ="hello";
// let reversed = str.split('')
// console.log(reversed);
// let join = reversed.reverse()
// console.log(join);
// let finalString = join.join('')
// console.log(finalString);


let reversed = "";
for (let i = str.length-1; i >= 0; i--){
    reversed = reversed + str[i];
}
console.log(reversed);







