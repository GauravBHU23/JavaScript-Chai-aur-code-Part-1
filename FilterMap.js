// const coding = ["js","ruby","java","python","cpp"];

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// });

// console.log(values);

//const myNums = [1,2,3,4,5,6,,7,8,9,10];

// const newNums = myNums.filter( (num) => num>4);
// console.log(newNums);

// const newNums = myNums.filter((num) => {
//     return num > 4
// });

// console.log(newNums);

// const newNums = [];

// myNums.forEach((num) => {
//     if(num>4){
//         newNums.push(num);
//     }
// });

// console.log(newNums);

// const book = [
//     {
//         title : 'Book One', genre: 'Fiction',publish: 1981, edition: 2004},
//         {title : 'Book One', genre: 'Fiction',publish: 1981, edition: 2004}
    
// ];

// let userBooks = book.filter((bk) => bk.genre === 'Fiction');
// userBooks = userBooks.filter((bk) => bk.publish >=1900);
// console.log(userBooks)
        

// console.log(userBooks);


// const newNums = [1,2,3,4,5,6,7,8,9,10];

// //const nums = newNums.map((number) => number+10);
// const nums = newNums.map((number) => number*10).map((number) => number+1).filter((number) => number>=40);

// console.log(nums);


// const myNums = [1,2,3];

// //const myTotal = myNums.reduce(function (acc, curval){
// //     console.log(`acc: ${acc} and curval: ${curval}`);
// //     return acc+curval;
// // },0);
// // console.log(myTotal);

// const myTotal = myNums.reduce((acc,curr) => acc+curr,0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName : "Java",
        price : 9999
    },
    {
        itemName : "Python",
        price : 8989
    },
    {
         itemName : "Cpp",
         price: 9009
    },
    {
        itemName : "Ruby",
        price: 3434
    }
]

 const pricertoPay = shoppingCart.reduce((acc,item) => acc+ item.price,0)

console.log(pricertoPay);
