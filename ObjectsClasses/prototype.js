let myHeros = ["Hulk", "Spiderman"]
let heroPower = {
    Hulk: "Great Size & Power",
    Spiderman: "Spidey Powers",
    getSpiderPower: function(){
        console.log(`Spiderman's power is ${this.spiderman}`);
    }
}
Object.prototype.new_property = function(){
    console.log(`This new_property is present in all objects`);
}
Array.prototype.array_property = function(){
    console.log(`This array_property can connot be accessed by any other thing except arrays.`);
}
heroPower.new_property()
myHeros.new_property()
// heroPower.array_property() -> error: TypeError
myHeros.array_property()

// inheritance -> if a protoype or property is assigned to an object then any function, array, string or other object can access it 
const User = {
    name: "Ismail",
    email: "ismiiii@hehehahahahe.com"
}
const Teacher = {
    teachesGood: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // giving TASupport access to prototype of TeachingSupport
}

// Teacher.__proto__ = User -> old Method
// modern syntax of giving access of one's prototype to other
Object.setPrototypeOf(TeachingSupport, Teacher)
let anotherUsername = "Dr. Umar Farooq Gohar     "
String.prototype.trueLength = function(){ // this specific prototype/property is onl accessile to strings
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"WadiaFatima".trueLength()
"Latte".trueLength()