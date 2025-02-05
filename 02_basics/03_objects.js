// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Ayush",
    "fullname": "Ayush shaw",
    age: 18,
   [mySym]: "mykey1",
    location: "jaipur",
    email: "ayushshaw.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["fullname"])
// console.log(JsUser[mySym])

JsUser.email = "Ayushcaht.com"
Object.freeze(JsUser)
JsUser.email = "Ayush@microsoft.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log
}