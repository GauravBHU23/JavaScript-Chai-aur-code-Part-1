// let myName = "Gaurav     ";

// console.log(myName.length);
// console.log(myName.trim().length);
// console.log(myName.truelength);

let myHeros = ["Thor","SpiderMan"];

let heroPower = {
    Thor : "hammer",
    SpiderMan : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.SpiderMan}`)
    }
}

Object.prototype.Gaurav = function(){
    console.log(`Gaurav is present in all objects`);

}

Array.prototype.heyGaurav = function(){
    console.log(`Gaurav say hello`);
}
//heroPower.Gaurav();
// myHeros.Gaurav();
// myHeros.heyGaurav();
//heroPower.heyGaurav();


//inheritance

const User = {
    name : "Gaurav",
    Email : "Gaurav@gmail.com",

}

const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvilable : false
}

const TASupport = {
    makeAssignment :'Js Assignment',
    fullTime: true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

//modern index

Object.setPrototypeOf(TeachingSupport,Teacher);

let anotherUsename = "Gaurav    ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
   // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);


}
anotherUsename.trueLength();
"Gaurav".trueLength();
"saurav".trueLength();
