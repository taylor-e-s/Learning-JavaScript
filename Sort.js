var fs = require('fs');
var text = fs.readFileSync("list10k.txt", 'utf-8');
let array = text.split(' ')
function SelectionSort(array, compareFunction) {

  function compare(a, b) {
   return a - b;
   } 
  let min = 0;
  let index = 0;
  let temp = 0;

  for (let i = 0; i < array.length; i += 1) {
    index = i;
    min = array[i];

    for (let j = i + 1; j < array.length; j += 1) {
      if (compareFunction(min, array[j]) > 0) {
        min = array[j];
        index = j;
      }
    }

    temp = array[i];
    array[i] = min;
    array[index] = temp;
  }

  return array;
}

sorted = (SelectionSort(array, function(a, b) { return b - a; }));
fs.writeFile('sorted.txt', sorted,(error)=>{'error'
});