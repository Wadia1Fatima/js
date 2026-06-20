// for of
// WORKS PERFECTLY WITH ARRAYS, MAPS AND ARRAYS OF OBJECTS
// ["", "", ""]
// [{}, {}, {}]
// for (const element of object) {
//    -> element means variable and object means anything we want to iterate
// }
// ---- ARRAYS ---- //
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}
const greetings = "Salam!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}


// ---- MAPS ---- //
const map = new Map([
    ['IN', "India"],
    ['USA', "United States of America"],
    ['Fr', "France"],
    ['IN', "India"] //repeated values will be ignored 
]); //maps are iterateable but plain objects are not 
console.log(map);
for (const [key, value] of map) {
    console.log(key, ':-', value);
}
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// } -> TypeError: Object is not iterable