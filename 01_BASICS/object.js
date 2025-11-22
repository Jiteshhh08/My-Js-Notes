//Constructor
//Object.create     ==> SINGLETON

//symbol declaration
// const mySym = Symbol("key1")

//Literal
/*
const JsUser = {
    name: "jitesh",
    "full name": "jitesh jha",
    age: 18,
    [mySym]: "key1",                      //use symbol as a key
    location: "mumbai",
    gmail: "jitesh@gmail.com",
    isLoggedIn: false,
    LoggedInDays: ["monday","saturday"]
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
// console.log(JsUser[typeof mySym]);          //its not giving symbol
*/


/*
JsUser.gmail = "jitesh@microsoft.com"
Object.freeze(JsUser)
JsUser.gmail = "jitesh@chatgpt.com"

console.log(JsUser);
*/

/*
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
*/