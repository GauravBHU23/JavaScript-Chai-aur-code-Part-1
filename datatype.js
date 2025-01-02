// const score = 100;
// const scoreValue = 100.3;
// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail;

// const id = Symbol('123');
// const anoterId = Symbol('123');

// console.log(id === anoterId);

// const bigNumber = 2345566433245n;
// const heroes = ["shaktiman","naagraj","doga"];
// let myObj = {
//     name : "Gaurav",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof myFunction);


// let myYoutubename = "gauravkumar.com";
// let anotherName = myYoutubename;
// anotherName = "code with Gaurav";
// console.log(myYoutubename);
// console.log(anotherName);

// let userOne = {
//     email : "gaurav@gmail.com",
//     upi : "user@ybl"
// }
// let userTwo = userOne;
// userTwo.email = "gauravkum1275@gmail.com";
// console.log(userOne.email);
// console.log(userTwo.email);


// const name = "Gaurav";
// const repoount = 50;

// console.log(name + repoount + " Value"); 

// console.log(`Hello my name is ${name} and my repo Count is ${repoount}`);

 const gameName = new String('gaurav');   
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'));


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(2,4);
console.log(anotherString);

const newStringOne = "  gaurav   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://gaurav.com/gaurav%20kumar";

console.log(url.replace('%20','_'));
console.log(url.includes('gaurav'));
console.log(gameName.split('-'));
