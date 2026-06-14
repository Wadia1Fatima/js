console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
console.log("2" > 1); //one is string the other is number - javascript converts the string into number but if we have strings as both operands then it will compare their ASCII values and will not convert them into numbers.
console.log("02" > 1);
console.log("Comparison with null");
console.log(null > 0); // relational operators like <, >, <=, >= convert null or unddefined into a number i.e 0
console.log(null == 0); // but == behaves differenlty it does not convert it into number 
console.log(null >= 0); // that is why null(0) >= 0 results in true and null == 0  and null(0) > 0 both result in false  
console.log("Comparison with undefined");
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// === -> strictly checks both the value and data type
console.log("2" === 2);