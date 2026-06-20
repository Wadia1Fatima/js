const isUserloggedIn = true
const temperature = 41
if ( temperature === 40 ){
    console.log("less than 50")
} 
else {
    console.log("temperature is greater than 50")
}
const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2"); -> not a good practice!!
if (balance < 500) {
    console.log("less than 500")
} 
else if (balance < 750) {
    console.log("less than 750")
} 
else if (balance < 900) {
    console.log("less than 750")
} 
else {
    console.log("less than 1200")
}
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard && 2!=3) {
    console.log("Allow to buy course")
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in")
}

const userEmail = []
if (userEmail) {
    console.log("Got user email")
}
else {
    console.log("Don't have user email")
}
// falsy values -> false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy values -> "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty")
}
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) { // create an array of keys of object, if its length is zero, object is empty
    console.log("Object is empty")
}
// Nullish Coalescing Operator (??): null undefined -> This operator will take any first numbered or character or bool value other than null or undefined 
let val1
// val1 = 5 ?? 10 -> val1 = 5
// val1 = null ?? 10 -> val1 = 10
// val1 = undefined ?? 15 -> val1 = 15
val1 = null ?? 10 ?? 20
console.log(val1)
// Terniary Operator -> condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")