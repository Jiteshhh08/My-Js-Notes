// for of

/*
const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

let greetings = "Hello world!"

for (const greet of greetings) {
    if(greet == " "){
        continue;
    }

    console.log(`${greet}`);
    
}
    */

// Maps

// In JavaScript, a Map is a built-in object that stores key-value pairs and remembers the original insertion order of the keys


/*
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")


console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
    
console.log(map.size);
*/

/*
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}
*/

/*
const MYOBJECT = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

//for in

for (const key in MYOBJECT) {
    console.log(`Keys of object are ${key} and values are ${MYOBJECT[key]}`);
    
}


const programming = ["js","rb","cpp","py"]

for (const keyy in programming){
    console.log(programming[keyy]);
    
}
    */


//DIFF BTW ARRAY AND OBJ => ARR HAS DEFAULT KEYS AS 0,1,2.... AND IN OBJ WE CAN SET OUR OWN KEYS
//OBJ ARE MADE JUST BECAUSE ARR HAD A CON

//FOR OF LOOP GIVES VALUES AND FOR IN LOOP GIVES THE KEYS