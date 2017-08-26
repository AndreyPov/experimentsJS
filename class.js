var Greetings = (function () {
    function Greetings(message) {
        this.greeting = message;
    }
    Greetings.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greetings;
}());
var greetUser = new Greetings("Jack");
console.log(greetUser.greet());
