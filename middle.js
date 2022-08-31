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

const middle = function(array) {
  if(array.length < 2){
    return [];
  }else if(array.length % 2 === 0){
    return [array[array.length / 2 - 1],array[array.length / 2]];
  }else{
    return [array[(array.length - 1)/ 2 ]];

  }
  //...
}


