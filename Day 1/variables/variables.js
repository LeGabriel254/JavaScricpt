// Variables are containers used to store data values
//they are declared using let,var  and const

// var is function-scoped that was traditionally to declare variables used while let and const
// are both block-scoped whereby let allows reasignment and const allows only unchanged variable 

const ages = 25; // Declares a constant variable
let name = "Leon"; // Declares a mutable variable

let John = 4; // Declares a variable with value 4
let sam = 5;  // Declares a variable with value 5

alert(John + sam); // Shows an alert with the sum (4 + 5 = 9)

console.log(name); // Logs "Leon" to the console


let message;

message = "I love Lyon"
console.log(message)


//multiple variables
const user = "Leon"
const  age = 22;
const school = "Alx africa";

console.log(`My data are: ${user} from ${school} ${age}`)
