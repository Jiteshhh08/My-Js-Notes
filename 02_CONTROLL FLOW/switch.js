//switch case
/*

const month = 3;

switch (month) {
    case 1: 
    console.log("january");
    break;
    case 2: 
    console.log("feb");
    break;
    case 3: 
    console.log("march");
    break;
    case 4: 
    console.log("april");
    break;
    case 5: 
    console.log("may");
    break;
    case 6: 
    console.log("june");
    break;

    default:
    console.log("invalid month!");
    break;
}
*/

/*
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
*/

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


//EMPTY ARRAY AND OBJECT DETECTION

/*
const userEmail = []

if (userEmail.length === 0) {
    console.log("array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
    
}
*/

// Nullish Coalescing Operator (??): null undefined
/*
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20



console.log(val1);
*/
// Terniary Operator

// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")