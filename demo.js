const { api } = require('./index');

console.log(api.h('julia'));
console.log(api.s('julia'));


const { makeCar } = require('./src/car');

const car = makeCar();

console.log(car);
