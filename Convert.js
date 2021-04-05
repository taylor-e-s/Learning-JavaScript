var prompt = require('prompt');

prompt.start();

prompt.get(['Enter_the_number_you_want_to_convert_to_celsius'], function (err, result) {

let degree = (result.Enter_the_number_you_want_to_convert_to_celsius)
console.log(((degree-32)/1.8)+" degrees Celsius")
})