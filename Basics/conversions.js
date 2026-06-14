let score = "hello world"
console.log(typeof score)
console.log(typeof(score))  // same output as above line

let valueInNumber = Number (score)
console.log(typeof valueInNumber)
console.log(valueInNumber);
// "33" => 33 - string is chandged in number
// "33abc" => NaN - but when we print its value after changing string into number it will bw NaN- Not a Number
//  true => 1; false => 0 

let isLoggedIn = "waoww"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// "" => false (empty string)
// "waoww" => true (any string)

let num = 22
let stringNumber = String(num)
console.log(stringNumber)
console.log(typeof stringNumber)

//Operations 

let value = 3
let negValue = -value
console.log(negValue)
//most common operations
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3) // POWER 
console.log(2/3) // output as long double highly precise value
console.log(2%3)

let str1 = "hello"
let str2 = " world"

let str3 = str1 + str2 // will concatinate both strings
console.log(str3)
console.log("1" + 2) // if one of the any no. of operands is a string it will automatically think and use the other operands as strings 
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2") // here it first add 1 and 2 and then think of their result and the last operand as strings

console.log( (3 + 4) * 5 % 3)
console.log(+true) // + operator is a unary operator converting "true" to its numerical value - 1
console.log(+"") // " " means false so + will convert it into 0 
// + with any string("abc") would give NaN because "abc" can not be converted into number
// + with null would give 0
// and + with undefined would also give NaN

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
console.log(num1, num2, num3)

let gameCounter = 100
++gameCounter
console.log(gameCounter)