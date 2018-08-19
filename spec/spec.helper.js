const fs = require('fs');
const chai = require('chai');
global.expect = chai.expect;

let calc = fs.readFileSync('./src/js/calculator.js');
let person = fs.readFileSync('./src/js/person.js');
eval( person + `\nexports.Person = Person;`);
eval( calc + `\nexports.BMICalculator = BMICalculator;`)