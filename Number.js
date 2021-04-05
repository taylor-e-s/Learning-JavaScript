//random number
let number = JSON.stringify(Math.round(Math.random() * 25))

//ask for guess
var prompt = require('prompt');

prompt.start();

prompt.get(['Guess_the_number_between_0_and_25'], function (err, result) {
if (result.Guess_the_number_between_0_and_25 === number) {
        console.log('Correct!');
}   else {
        console.log('Incorrect.');
      }})