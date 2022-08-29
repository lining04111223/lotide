const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)){
    console.log(`✅✅✅   Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;
// TEST CODE

assertArraysEqual([1, 2, 3], [1, 2, 3]); 
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); 
assertArraysEqual([1, 2, 3], [3, 2, 1]); 
assertArraysEqual([1, 2, 3, 10], [1, 2, 3]); 