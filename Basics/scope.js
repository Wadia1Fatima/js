var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}
console.log(a);
//console.log(b);  -> refernence error
console.log(c);
function one(){
    const username = "Wadia"
    function two(){
        const website = "Git Hub"
        console.log(username);
    }
    // console.log(website); -> refernece error
    two()
}
one()
if (true) {
    const username = "Ali"
    if (username === "Ali") {
        const website = " Git Hub"
        console.log(username + website);
    }
    // console.log(website); -> reference error
}
// console.log(username); -> reference error
console.log(addone(5))
function addone(num){
    return num + 1
}
// addTwo(5) -> refernce error as it is a function stored in a variable 
// const addTwo = function(num){
//     return num + 2
// }