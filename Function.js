// console.log("H");
// console.log("I");



// function sayMyName(){
// console.log("H");
// console.log("I");
// console.log("H");
// console.log("I");
// console.log("H");
// console.log("I");

// }

// sayMyName();


// function Sum (){
//     let a = 23;
//     let b = 23;

//     let c = a+b;
//     console.log(c);
// }

// Sum();

// function Sum(number1 , number2){
//     console.log(number1+number2);
// }
// Sum(2,3);

// function AddtwoNumber(number1, number2){
//     return number1 + number2;

// }
// const result = AddtwoNumber(3,5);

// console.log(result);

// function loginUsermessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in`
// }
// console.log(loginUsermessage("Gaurav"));


// function calculateCartPrice(val1,val2, ...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "Hitesh",
    price : 199
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price ${anyobject.price}`);
}
handleobject(user);
handleobject({
    username: "Gaurav",
    Price: 399
});

const myNewArray = [200,400,600];

function returnSecondvalue(getArray){
    return getArray[1];
}
console.log(returnSecondvalue(myNewArray));