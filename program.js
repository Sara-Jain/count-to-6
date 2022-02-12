// Exercise 1
// console.log("HELLO ES6");

//Exercise 2
// let name = process.argv[2];
// console.log(`Hello, ${name}!
// Your name lowercased is "${name.toLowerCase()}".`)

//Exercise 3
// var inputs = process.argv.slice(2);
// var result = inputs.map(word => word[0])
//     .reduce((wordSoFar, character) => wordSoFar + character);
// console.log(`[${inputs}] becomes "${result}"`);

//Excercise 4
var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate(() => console.log(this.yelp));
    }
};

foot.kick();
