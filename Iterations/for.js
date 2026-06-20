for (let i = 1; i <= 5; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 3; j++) {
    console.log(`Inner loop value ${j} and outer loop ${i}`);
   }    
}
let myArray = ["flash", "batman", "superman"]
console.log("Array Length is: ",myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);    
}
// break and continue
for (let index = 1; index <= 12; index++) {
    if (index == 6) {
        console.log(`Detected 6`)
        break
    }
   console.log(`Value of index is ${index}`)
}
for (let index = 1; index <= 8; index++) {
    if (index == 4) {
        console.log(`Detected 4`)
        continue
    }
   console.log(`Value of index is ${index}`)    
}