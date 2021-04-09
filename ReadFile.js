const fsLibrary  = require('fs')
 
fsLibrary.readFile('list10.txt', (error, txtString) => {
 
    if (error) throw error;
 
    console.log(txtString.toString());
 
})