let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let Date1 = new Date(2023, 0, 23)
let Date2 = new Date(2023, 0, 23, 5, 3)
let Date3 = new Date("2023-01-14")
let Date4 = new Date("01-14-2023")
console.log(Date2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(Date3.getTime())
console.log(Math.floor(Date.now()/1000)) //by default time is given in miliseconds ... we divide it by 1000 to get seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1) // months start from 0
console.log(newDate.getDay()) 

// `${newDate.getDay()} and the time `
newDate.toLocaleString('default', {
    weekday: "long",   // "Monday"
    month: "short",    // "Jun"
    day: "numeric",    // "15"
    year: "numeric"    // "2026"
})
