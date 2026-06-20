const weekday = "Sat"
switch (weekday) {
    case "Mon":
        console.log("Monday");
        break;
    case "Tue":
        console.log("Tuesday");
        break;
    case "Wed":
        console.log("Wednesday");
        break;
    case "Thu":
        console.log("Thursday");
        break;
    case "Fri":
        console.log("Friday");
        break;
    case "Sat":
        console.log("Saturday");
        break;
    case "Sun":
        console.log("Sunday");
        break;
    // in JS if a fall through happens, it does not execute the default case!!
    default:
        console.log("Invalid Input!!");
        break;
}