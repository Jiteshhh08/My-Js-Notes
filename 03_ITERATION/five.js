// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

    //foreach koi bhi value return nahi karta (usse bhi but ho jayega)

//FILTER : 3 types

//The filter() method in JavaScript creates a new array containing only the elements that pass a specific test defined by a callback function. It’s a powerful tool for extracting data based on conditions.


// const Nums = [1,2,3,4,5,6,7,8,9,10]

// const AllNums = Nums.filter( (val) => val > 4 )

// console.log(AllNums);


// const Nums = [1,2,3,4,5,6,7,8,9,10]

// const AllNums = Nums.filter( (val) => {
//     return val > 4
// })

// console.log(AllNums);


// const Nums = [1,2,3,4,5,6,7,8,9,10]

// const AllNums = Nums.filter( function (val) {
//     return val > 4                  //direct val > 4 will not work cause of the curly braces
// })
// console.log(AllNums);

    //EITHER USE ARROW FUNC WITHOUT {} OR WHILE USING {} ALSO USE RETURN 


//SAME THING USING FOR EACH

// const Nums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = []
// Nums.forEach( (num) => {
//     if(num > 2){
//         newNums.push(num)
//     }
// } )
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const Userbooks = books.filter( (bk) => bk.genre === 'History' )

// const Userbooks = books.filter( (bk) => bk.publish >= 1987 )



// console.log(Userbooks);
