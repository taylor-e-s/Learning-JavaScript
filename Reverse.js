function reverse(string){
let reversed='';
for(var slice = string.length-1; slice>=0; slice--){
    reversed += string[slice];
}
console.log(reversed);
}
reverse('hello')
