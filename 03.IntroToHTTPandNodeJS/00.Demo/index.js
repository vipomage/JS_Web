const Person = require('./Person');
const {update,getAll} = require('./api');
const myPerson = new Person('Pesho',22);


update(0,myPerson);
update(1,new Person('Gosho',25));


const util = require('./util');

console.log(getAll());