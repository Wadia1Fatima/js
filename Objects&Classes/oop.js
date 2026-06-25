const user = {
    username: "Ismail",
    loginCount: 13,
    signedIn: false,
    getUserDetails: function(){
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username)
console.log(user.getUserDetails())
console.log(this)
function User(username, loginCount, isLoggedIn){
    this.username = username //this.username is the variable that will be located in current function context
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this // this means current execution context
}
const userOne = new User("hitesh", 12, true) // new keyword will create an entirely new instnce of object prevting the problem of overwriting
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor); // .constructor is basically is a refernece to itself
console.log(userTwo);