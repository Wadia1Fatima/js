// singleton -> Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "Wadia",
    "full name": "Wadia Fatima",
    [mySym]: "mykey1",
    age: 18,
    location: "Lahore",
    email: "wadiafatima@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Friday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "fatimawadia@gmail.com"
//Object.freeze(JsUser) -> no changings can be done after this
JsUser.email = "heheheehheee@yahoo.com"
console.log(JsUser)
JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


const tinderUser = {} // -> const tinderUser = new Object
tinderUser.id = "321cba"
tinderUser.name = "Wadia"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "wadia",
            lastname: "fatima"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}
// const obj3 = { obj1, obj2 }
const obj4 = {...obj1, ...obj2} // => const obj4 = Object.assign({}, obj1, obj2, obj4)
console.log(obj4);
const users = [
    {
        id: 1,
        email: "kya_ha_yar@gmail.com"
    },
    {
        id: 1,
        email: "kya_ha_yar@gmail.com"
    },
    {
        id: 1,
        email: "kya_ha_yar@gmail.com"
    },
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // creates array of keys of object
console.log(Object.values(tinderUser));  // creates array of values of object
console.log(Object.entries(tinderUser)); // creates array of object
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "Fellowship",
    price: "Free",
    courseInstructor: "Dev Weekends"
}
const {courseInstructor: instructor} = course // changing key courseInstructor to instructor
console.log(instructor);
// {
//     "name": "khiii khii khiii",
//     "coursename": "fazool js course",
//     "price": "my time"
// }

// [
//     {},
//     {},
//     {}
// ] -> create an array of objects in this way