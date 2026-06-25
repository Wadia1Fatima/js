class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){ // static makes it unaccessible to others
        return `123`
    }
}
const student1 = new User("Fatima")
class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const student2 = new Teacher("Ali", "iamali@google.com")
// console.log(student2.createId()); // error