const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE

console.log(middle([1,2,3,4,5,6]));
console.log(middle([1,2,3,4,5]));

assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]); // => should PASS
assertArraysEqual(middle([1,2,3,4,5]), [3]); // => should PASS