// Control Structures and Basic Functions

// Conditional statement - they are used switch statement to execute code based on different condition

// if = used to execute block of code if the condition is true
// else = used with if to execute code if the condition is false 
// else if = specify new condition if the first condition is false.


// Loops - used to execute code repeatedly ased on condition

// for  
// while 
// do while


// if 

// let age = Number(prompt("How old are you"))
 
// if age is bigger than 20 user is allowed
// if(age > 20){
//   alert("You are allowed")
// }

// let year =Number(prompt("Which year is this"))
//  // if year is 2015 return you are good
// if(year == 2015){
//   alert("You are good")
// }

// else .. if
// let age = Number(prompt("How old are you"))
 
// // if age is bigger than 20 user is allowed and if is less than 20 user is not allowed 
// if(age > 20){
//   alert("You are allowed")
// } else if(age < 20) {
//  alert("You are not allowed")
// }


// let year =Number(prompt("Which year is this"))
//  // if year is 2015 return you are good if not you are wrong
// if(year == 2015){
//   alert("You are good")
// } else if (year !== 2015){
//   alert("You are wrong ")
// }

// else 
let age = Number(prompt("How old are you"))
 
// if age is bigger than 20 user is allowed and if is less than 20 user is not allowed 
if(age > 20){
  alert("You are allowed") // if user  is above 20
} else if(age) {
 alert("You are not allowed")// if user is below 20 
} else {
  alert("please enter a number") //if its not a number return the alert
}


// if year is 2015 return you are good if not you are wrong
let year = Number(prompt("Enter a year:"));

if (year === 2015) {
  alert("You are good");
} else if (year) {  // If year is a number but not 2015
  alert("You are wrong"); //if year is not 2015
} else {
  alert("put a number"); // if its not a number
}
