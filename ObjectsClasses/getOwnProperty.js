const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const user = {
    name: 'Wadia Fatima',
    age: 18,
    is18 : true,
    greetings : function(){
        console.log("Hii !!");
    }
}
console.log(Object.getOwnPropertyDescriptor(user, "name"));
Object.defineProperty(user, 'name', {
    writable: false,
    enumerable: true,    
})
console.log(Object.getOwnPropertyDescriptor(user, "name"));
for (let [key, value] of Object.entries(user)) {
    if (typeof value !== 'function') {        
        console.log(`${key} : ${value}`);
    }
}