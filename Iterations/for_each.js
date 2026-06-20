//for each
// array.forEach(element => {
    
// });

const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( function (val){
//     console.log(val);
// } ) same as below
coding.forEach( (item) => {
    console.log(item)
} )
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe) same as above 
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )
const values = coding.forEach( (item) => {
    return item
} )
console.log(values); // -> undefined for each does not return or create an array 

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {    
    console.log(item.languageName)
    console.log(item.languageFileName)
} )