function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2 //functions can behave as objects in javascript
console.log(multipleBy5(5));
console.log(multipleBy5.power); // function is being accessed and used as an object
console.log(multipleBy5.prototype);   

function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){ // we are creating a prototpe function or property for the function 
    this.score++
}
createUser.prototype.printMe = function(){ 
    console.log(`Value is ${this.score}`);
}
const coffee = new createUser("Coffee", 300) // new creates a new instance, skiping new will just overwrite the originsl function 
const capuccino = new createUser("Cappucino", 750)
coffee.printMe()
