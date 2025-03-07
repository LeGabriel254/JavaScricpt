// Data Types :this is the latest ECMAScript defines 8 data types.

// 7 of them are Primitive data types(values that ais not an object and has no method or properties)
//Number
// String
//Boolean
//null
//bigint
//symbols
//undefined
//object


//Strings = are text that should be inside a single or double quotes.

let name = "Leon"
//  Embed a variable
alert(`Hello ${name}!`);


//embed an expression
alert(`the result is ${4 + 6}`);

//String concatenation
let fisrtName = "Leon"
let lastName = "Gabriel"

let fullName = fisrtName + " " + lastName
console.log(fullName);

// how to get a character in string
console.log(fisrtName[0]);

//how to know the length
console.log(fullName.length)



//The Number this include both numbers and integers
// Math operators [+,-,/,*,%]

const radius = 10;
const pi = 3.14;
// console.log(radius, pi)

// let result = radius % 3
let result = pi * radius **2
console.log(result)

let like = 10;

// likes = likes++;
like += 10
console.log(like)

//template strings 
const title = "Software Engineer"
const author = "Leon Gabriel";
const likes = 20;

// template string way
let results = `a ${title} by the name ${author} has ${likes} likes`
console.log(results)


// Arrays = is used to store collection of values
const ninjas = ['Shuan', 'Leon', 'Eli']
// console.log(ninjas)
// console.log(ninjas[1]) //getting the number 1 item


let random = ninjas.push('Ken') // .push() adds new value into an existing array
 random = ninjas.pop() // pop returns the last added value
console.log(random)

//boolean and comparison they represent true or false
//comparison operators

let ages = 24;
console.log(ages == 24) //true
console.log(ages == 54) //tfalse
