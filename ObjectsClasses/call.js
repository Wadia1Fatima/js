function SetUsername(username){
    this.username = username
    console.log("called");
}
function createUser(username, email, password){
    SetUsername.call(this, username)   
    this.email = email
    this.password = password
}
const kuchBhi = new createUser("Fabulous", "kya@hahehaehaehae.com", "428429")
console.log(kuchBhi);
