class User {
    constructor(username){
        this.username = username;
    }

    Logme(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;

    }
     
    addCourse(){
        console.log(`A new couse was added by ${this.username}`);

    }

}

const chai = new Teacher("Gaurav","gaurav123@gmail.com","123");
chai.addCourse();

const masalachai = new User("masalachai");
masalachai.Logme();
chai.Logme();
console.log(chai === masalachai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
