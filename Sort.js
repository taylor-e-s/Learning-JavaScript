//turn the file to an array
var fs = require('fs');
var text = fs.readFileSync("list10k.txt", 'utf-8');
let array = text.split(' ')

//sort the array
const sorted = array.sort((a, b) => {  
    return b - a
  })

//write back to a file
fs.writeFile('sorted.txt', sorted,(error)=>{'error'
});