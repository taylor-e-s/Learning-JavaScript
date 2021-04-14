const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
   });

rl.question("Type to a text file: ", function(answer) {
while(answer != 'exit'){
        fs.writeFile('takinginput.txt', answer,(error)=>{'error'
});
rl.close();
fs.writeFile('takinginput.txt', answer,(error)=>{'error'
    });
}})

/*
var prompt = require('prompt');
var data = ''
while(data != 'EXIT'){
    prompt.start();
    prompt.get(['Type_to_write_to_a_text_file'], function (err, result) {
    var data = (result.Type_to_write_to_a_text_file);
    fs.writeFile('takinginput.txt', answer,(error)=>{'error'
});
})}
*/