//using foreach ***************
/*
const Nums = [1,2,3,4,5,6,7,8,9,10]

const newNums = []

Nums.forEach( (num) => {
    if (num) {
        newNums.push(num + 10)
    }
})

console.log(newNums);
*/

//using maps
/*
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNumbers = myNumbers.map( (num) => {return num + 20} )

console.log(newNumbers);
*/

//CHAINING

/*
const NumbersMy = [1,2,3,4,5,6,7,8,9,10]
const NewNumbersMy = NumbersMy
.map( (num) => num*10)
.map( (num) => num + 1)
.filter( (num) => num >= 40 )

console.log(NewNumbersMy);
*/

//REDUCE

//The reduce() method in JavaScript is used to process an array and return a single cumulative value by applying a callback function to each element. It’s ideal for tasks like summing numbers, flattening arrays, or building objects.

//array.reduce((accumulator, currentValue, currentIndex, array) => {
        //return updated accumulator
// }, initialValue);

// - accumulator: The running total or result.
// - currentValue: The current element being processed.
// - currentIndex (optional): Index of the current element.
// - array (optional): The original array.
// - initialValue (optional but recommended): Starting value for the accumulator.



const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);