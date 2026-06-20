//for in
//works perfectly with OBJECTS only
// for (const key in object) {  
//     const element = object[key];
// }

// ---- OBJECTS ---- //
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

// ---- ARRAYS ---- //
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]) 
}// When for in is used with arrays it gives string indexes "0", "1", "2" and so on to the variable and not the exact values 

// ---- MAPS ---- //
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
for (const key in map) {
    console.log(key)
} // no output and no error ... it does not work with maps 