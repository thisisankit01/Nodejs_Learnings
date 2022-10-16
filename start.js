const app = require("./app");

// log to console
let name = 'Pandey';
console.log(name);
const num = 3.4;
console.log(num);
typeof name;


//object
let person = {
  nameOne : 'Ankit',
  age : 20
};


//dot notation
person.nameOne = 'jangal';
console.log(person.nameOne);

//bracket notation
let newName = 'Sardar';
person['nameOne'] = newName;

//arrays
let selectedColors = ['blue','green'];
selectedColors[2] = 1;
console.log(selectedColors);

//function in js
//performing a task
function greet(name){
  console.log('Hello ' + name);
}
greet('Ankit');

//performing a caculation
function square(number){
  return number*number;
}
let numNew = square(4);
console.log(numNew) ;
console.log(square(2));

//loops
for(let i = 0; i<5; i++){
  console.log("Ankit");
};

//import 
const test = require("./app")
console.log(app.x) 