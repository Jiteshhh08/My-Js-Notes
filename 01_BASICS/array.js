
/*
const myArr = [0,1,2,3,4,5]

console.log(myArr);
console.log(myArr[4]);

//Zero based indexing
//makes shallow copies(share the same ref point)  ==>  duplicate mai jo changes honge wo og mai hi ho jayenge

const myHeros = ["thor","hulk"]
const myArr2 = new Array(1,2,3,4)

console.log(myHeros);
console.log(myArr2);

*/

//array methods
/*
const myarr = [0,1,2,3,4,5]

console.log(myarr);
myarr.push(6)       //nai value add karne ke liye
myarr.pop()         //end value delete kar deta hai
myarr.unshift(9)    //start mai ek value add kar deta hai
myarr.shift()       //start value ko delete kar deta hai


console.log(myarr.includes(9));     //boolean mai ans dega ye
console.log(myarr.indexOf(9));      //always -1 dega ye
console.log(myarr.indexOf(2));


const newarr = myarr.join()
console.log(myarr);
console.log(newarr);

console.log(typeof newarr);


//slice and splice

console.log("A ", myarr);

const myn1 = myarr.slice(1,3)

console.log(myn1);
console.log("B ", myarr);

const myn2 = myarr.splice(1,3)

console.log(myn2);           //slice [)     &      splice []
console.log("C ", myarr);    //slice og arr ko manipulate nahi karta but splice karta hai

*/

/*
const marvels = ["thor", "hulk", "ironman"];
const dc = ["superman", "batman","flash"];

// marvels.push(dc);

console.log(marvels);

// console.log(marvels[3][1])      //push existing array mai hi chnages karke return karta hai

const allheros = marvels.concat(dc)

console.log(allheros);          //concat creates a new array

const all_new_heros = [...marvels , ...dc]      //sprad operator
console.log(all_new_heros);
*/

/*
const another_array = [0,1,2,3,[4,5,6],7,[6,7,[4,5]]]

const usable_another_array = another_array.flat(Infinity)
console.log(usable_another_array);
*/

/*
console.log(Array.isArray("hitesh"));       //false
console.log(Array.from("hitesh"));          //converts into array

console.log(Array.isArray(["h","i","t"]));  //true

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3));

*/