const name = "Ali"
const repoCount = 50
console.log(name + repoCount + " Value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
const gameName = new String('Clash-of-Clans')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t')); //anything that is not present in a string will always be shown at index -1 ... as there is no index -1
const newString = gameName.substring(0, 4) //taking a part of original string
console.log(newString); 
const anotherString = gameName.slice(2, 4) //slice and splice ... there is a difference that splice will alter the real string but slice will not
console.log(anotherString);

const newStringOne = "   Oh_My_GOD   "
console.log(newStringOne);
console.log(newStringOne.trim()) //removes spaces
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-')) //replaces first value"%20" with the second value'-' 
console.log(url.includes('hello'))
console.log(gameName.split('-')) // it will split string into parts based on given character '-'  and will give the results in the form of an array