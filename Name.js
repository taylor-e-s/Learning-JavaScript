
var prompt = require('prompt');

prompt.start();

prompt.get(['Enter_your_name'], function (err, result) {
console.log('Hello ' + result.Enter_your_name + '!');
});