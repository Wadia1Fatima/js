const user = {
    username: "Wadia Fatima",
    price: 234,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to Git Hub`);
        console.log(this);
    }

}
user.welcomeMessage()
user.username = "Ali"
user.welcomeMessage()
console.log(this);
function name1(){
    let username = "Wadia Fatima"
    console.log(this.username); //undefined
}
name1()
const name = function () {
    let username = "Fatima"
    console.log(this.username); // undefined 
}
const name2 =  () => {
    let username = "Wadia"
    console.log(this); //it uses its lexical envirnoments's this 
}
name2()
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>  num1 + num2
const addTwo = (num1, num2) => ( num1 + num2 )
// const addTwo = (num1, num2) => ({username: "Wadia Fatima"})
console.log(addTwo(3, 4))
const myArray = [2, 5, 3, 7, 8]
myArray.forEach((val) => console.log(val))