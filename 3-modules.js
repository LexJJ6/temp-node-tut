
import names from './4-names.js';
import sayHi from './5-utils.js';

console.log(names.john);

const {john,peter} = names;

sayHi('susan');
sayHi(john);
sayHi(peter);