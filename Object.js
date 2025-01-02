// singleton

//object literals
//Object.create 

// const mySym = Symbol("key1");

// const jsUser = {
//     name : "Gaurav",
//     "full name": "Gaurav Kumar",
//     mySym : "mykey1",
//     age : 18,
//     location : "Jaipur",
//     email : "gauravkum1234@gmail.com",
//     isLogged : false,
//     lastLoginDays : ["Monday","Saturday"]



// }
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// //console.log(typeof jsUser.mySym);
// console.log(jsUser [mySym]);

// jsUser.email = "hitesh@chatgpt.com";
// Object.freeze(jsUser);
// jsUser.email = "hitesh@microsoft.com";
// console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("Hello Js User");
// }

// console.log(jsUser.greeting());

// jsUser.greeting2 = function(){
//     console.log(`hello js User, ${this.name}`);
// }
// console.log(jsUser.greeting2());


// Object part 2


const tinderApp = new Object();
const tinderUser = {}
tinderUser.id = "123abs";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;


console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname :{
        userfullname:{
            firstname : "Gaurav",
            lastname : "kumar"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a",2: "b"};
const obj2 = {3:"a",4: "b"}

//const obj3 = {obj1,obj2};
const obj3 = Object.assign({},obj1,obj2);
const obj4 = {...obj1, ...obj2};
console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename : "js in Hindi",
    price : "999",
    courseInstructor : "hitesh"
}

const {courseInstructor : instructor} = course;
console.log(instructor);
