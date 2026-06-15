"use strict"; // treat all JS code as newer version
console.log(3 +  3) 
console.log("Wadia")
let name = "Wadia" //string
let age = 18 // number
let isLoggedIn = false // boolean
//Data Types: 
// number => 2 to power 53
// bigint (this is used rarely)
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

console.log(typeof undefined); // undefined (output)
console.log(typeof null); // object (output)

//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 113.5
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('243')
const anotherId = Symbol('243')
console.log(id === anotherId);
// const bigNumber = 3456543576654356754n - used rarely

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof anotherId);