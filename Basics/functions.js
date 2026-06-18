function sayMyName(){
    console.log("W")
    console.log("A")
    console.log("D")
    console.log("I")
    console.log("A")
}
sayMyName()
function addTwoNumbers(number1, number2){
    return (number1 + number2)
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result)

function loginUserMessage(username = "Wadia"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))
const user = {
    username: "Fatima",
    prices: 2965
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject({
    username: "Wadia Fatima",
    price: 6592
})
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

// Immediately Invoked Function Expressions (IIFE)
(function start(){
    // named IIFE
    console.log(`System Started`);
})();
// ; is a must when writing consecutive IIFE Functions
( (system) => {
    console.log(`Program connected to ${system}`);
})('WINDOWS');