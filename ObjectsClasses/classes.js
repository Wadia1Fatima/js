class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}@heahe`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const coldCoffee = new User("Cold Coffee", "yumm@coldcoffee.com", "2543")
console.log(coldCoffee.encryptPassword());
console.log(coldCoffee.changeUsername());

// behind the scene
// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }
// const choclate = new User("choclate", "choclate@yummy.com", "123")
// console.log(choclate.encryptPassword());
// console.log(choclate.changeUsername());