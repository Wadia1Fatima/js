// Get and Set with class
class User1 {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}hehahea`
    }
    set password(value){
        this._password = value
    }
}
const getUser1 = new User1("fatimawadia@yahooo.com", "fsjfchrfc")
console.log(getUser1.email);

// Get and Set with Functions

function User2(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}
const getUser2 = new User2("wadiafatima@pakistan.com", "ffhjsfae")
console.log(getUser2.email);

// Get and Set with objects

const User3 = {
    _email: 'fatiii@wadiii.com',
    _password: "fskjfnwioa",
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
const getUser3 = Object.create(User3)
console.log(getUser3.email);




