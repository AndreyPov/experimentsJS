class Greetings {
    greeting: string;
    constructor(message){
        this.greeting = message;
    }
    greet(){
        return `Hello, ${this.greeting}`;
    }
}
let greetUser = new Greetings("Jack");
console.log(greetUser.greet());