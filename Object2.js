function multipleByy5(num){
    return num*5;
}

multipleByy5.power = 2;

console.log(multipleByy5(5));
console.log(multipleByy5.power);
console.log(multipleByy5.prototype);

function createUser(username,score){
    this.username = username;
    this.score = score;
} 
createUser.prototype.increment = function(){
   this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
 }

const chai = new createUser("chai",25);
const tea = new createUser("tea",250);
chai.printMe();

