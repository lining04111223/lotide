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


console.log(middle([1,2,3,4,5,6]));
// let arr1 = [0,1,2,3];
// let arr2 = [0,1,2,3];
// console.log("");
// assertArraysEqual(arr1, arr2); // passed

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //false
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //true
// assertArraysEqual([1, 2, 3], [3, 2, 1]); //false
// assertArraysEqual([1, 2, 56], [1, 2]); //false