//only writes one line and cannot perform EXIT command
const fs = require('fs')
var prompt = require('prompt');
let data = ''

prompt.start();

    prompt.get(['Type_to_write_to_a_text_file'], function (err, result) {

    let data = (result.Type_to_write_to_a_text_file)

    fs.writeFile('takinginput.txt', data,(error)=>{'error'
});
    })
