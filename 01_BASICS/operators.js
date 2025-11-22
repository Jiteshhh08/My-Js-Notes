/* Operators 

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);

*/

/*
let str1 = "hello";
let str2 = " jitesh";

let str3 = str1 + str2;
console.log(str3);
*/

/*
console.log("1" + 2)  //12
console.log(1 + "2")  //12
console.log("1" + 2 + 2)  //122
console.log(2 + 2 + "1")  //41
*/

// let gamecounter = 100;
// gamecounter++;                  // preincreament and postincreament
// console.log(gamecounter);

/*
console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 <= 1)
console.log(2 == 1)         //strict cheack ===
console.log(2 != 1)

console.log("2" > 1);       //true
console.log("02" > 1);      //true

console.log(null > 0);      //false
console.log(null >= 0);     //true
console.log(null == 0);     //false
*/

//this is because == and >= works differently here, >= converts null into 0 and hence it gives true

/*
console.log(undefined > 0);      //false
console.log(undefined >= 0);     //false
console.log(undefined == 0);     //false
*/


/***********************************************************************************/

/*THERE ARE TWO MEMORY REGIONS IN JAVASCRIPT 
    1.STACK         STORES PRIMITIVE ONLY           
    2.HEAP          STORES NON PRIMITIVE ONLY

*/

// let myName = "Jitesh"

// let newName = myName
// console.log(newName);

// newName = "Jha Jitesh"
// console.log(myName);
// console.log(newName);

//NEWNAME KE ANDAR MYNAME KI COPY GYI THI AUR NAKI ORIGINAL VALUE TOH ISILIYE COPY CHANGE HUI NAKI ORIGINAL VALUE

