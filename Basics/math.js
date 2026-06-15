const score = 400
console.log(score)

const balance = new Number(100) // new with Number creates an object ... balance here is not a number it is an object 
console.log(balance)
console.log(balance.toString().length) // converts to string and then gives its no. of characters or digits
console.log(balance.toFixed(1)) // gives specified no. of digits after decimal point and it always returns a STRING !! 

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4))//gives total 4 digits 
// .toFixed() will give specified no. of digits after the decimal point whereas .toPrecision() will give total specified no.s including the digits after te decimal point
const hundreds = 1000000 
console.log(hundreds.toLocaleString('en-PK'))

// Maths 
console.log(Math);
console.log(Math.abs(-4)); //absolute makes values posititve
console.log(Math.round(4.6)); // round off
console.log(Math.ceil(4.2)); //round off to the greater whole number
console.log(Math.floor(4.9)); // round off to smaller whole number
console.log(Math.min(4, 3, 6, 8)); //find minimum
console.log(Math.max(4, 3, 6, 8)); // find maximum
console.log(Math.random());  // generate random number from 0-9
console.log((Math.random()*10) + 1); //generates random number from 1-10
console.log(Math.floor(Math.random()*10) + 1); //round off that number so that it stays between 1-10

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // formula to generate random number within some range