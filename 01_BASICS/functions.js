/*
function SayMyName(){
    console.log("J");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

SayMyName();
*/

//adding two numbers
/*
function Add(num1,num2){                //parameters
    console.log(num1 + num2);
}

Add(3,4)                                //arguments
*/

/*
function ADD(Num1,Num2){                
    console.log(Num1 + Num2);
}

const result = ADD(3,4)                                
console.log("result = ", result)                                                     //undefined
*/

//console.log and return keyword both are different

/*
function sub(number1,number2){
    let result = number1 - number2
    console.log("result = ",result);                                                  // 7
    return result                           //return ke baad likha hua code execute nahi hota!
    //return number1 - number2
}

console.log(sub(5,-2));
*/

/*
function loginUserMessage(username){
    return `${username} logged in`
}

console.log(loginUserMessage("jitesh"));
*/


/*
function loginUserMessage(username){
    return `${username} logged in`
}

console.log(loginUserMessage());            //undefined logged in
*/

/*
function CalculateShoppingCart(...num1){                //... is a rest operator(sometimes spread operator)
    return num1
}

console.log(CalculateShoppingCart(200,500,2000,10000));
*/

/*
function CalculateShoppingCart(val1, val2, ...num1){                
    return num1
}

console.log(CalculateShoppingCart(200,500,2000,10000));
*/

/*
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

*/

/*
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
*/

                                                //SCOPES

/*
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()
*/

/*
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);
*/

// ++++++++++++++++++ interesting ++++++++++++++++++

/*
console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}
    */

                                         //THIS AND ARROW FUNCTION
/*
const user = {
    username : "jitesh",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`);       //this is current updated value milti hai
    }
}

user.welcomeMessage();
user.username = "jit"
user.welcomeMessage();
*/


// console.log(this);              //Node ==> empty    &    browser ==> window


/*
const ADDTWO = (NUM1,NUM2) => {
    //this is an arrow function
    return NUM1 + NUM2
}

console.log(ADDTWO(3,7));
*/

//IMPLICIT RETURN               => {} use kiya toh "return" likhna padega & () use kiya toh "return" nahi likhna

/*
const ADTWO = (Numm1,Numm2) => (Numm1 + Numm2)

console.log(ADTWO(6,0));
*/

                        //IIFE ==>immediatelyly invoked function expression


(function chai (){
    //named
    console.log(`DB CONNECTED`);    
})();

( (name) => {
    //unnamed or annonymous
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// ()()

// 1.To immediatially executee any funtion IIFE is used
// 2.To remove the polution from global scope
// 3.To write two or multiple IIFE one should be end with semicolon ;



// 1.JS creates Global excution context 
// 2.Next it creates memory phase
// 3.Memory phase - In this phase,the variables are set to undefined 
//   until the execution phase(next phase) and the functions are set to their definitions.
// 4.Next it creates the execution phase
// 5.Execution phase - In this phase,the variables are initialsed to given values and 
//   when the functions are called,it creates a memory phase and execution phase for the function 
//   just like the main one.
// 6.Execution context gets deleted as well

        //LIFO

// For live demo:
// browser > inspect > Sources
// create a snippet with few functions and visually experience the call stack.
