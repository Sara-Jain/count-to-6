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
// var foot = {
//     kick: function () {
//         this.yelp = "Ouch!";
//         setImmediate(() => console.log(this.yelp));
//     }
// };
// foot.kick();

//Exercise 5
// const userArray = process.argv.slice(2);
// let user = {};
// [, user.username, user.email] = userArray;
// console.log(user);

//Exercise 6
// const numbers = process.argv.slice(2);
// let minimumNumber = Math.min(...numbers);
// console.log(`The minimum of [${numbers}] is ${minimumNumber}`);

//Exercise 7
// module.exports = function average(...args) {
//     let sum = 0;
//     args.forEach(function (value) {
//         sum += value;
//     });
//     const avg = sum/args.length;
//     return avg;
// };

//Exercise 8
// module.exports = function midpoint(lowerBound = 0, upperBound = 1) {
//     return (lowerBound + upperBound) / 2;
// };

//Exercise 9
// module.exports = (inputString, numberOfExclamations = inputString.length) => {
//     const exclamations = ('!').repeat(numberOfExclamations);
//     const sentence = inputString + exclamations;
//     return sentence;
// };

//Exercise 10
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(pieces, ...subs) {
    var sentence = pieces[0];
    for (var i = 0; i < subs.length; i++) {
        sentence += escape(subs[i]) + pieces[i + 1];
    }
    return sentence;
}

function escape(s) {
    return s.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/'/g, "&apos;")
        .replace(/"/g, "&quot;");
}
