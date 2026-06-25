class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const credentials = new Teacher("Hajra", "hajra@farooq.com", "37234")
credentials.logMe()
const new_credentials = new User("Zainab")
new_credentials.logMe()
console.log(credentials instanceof User);