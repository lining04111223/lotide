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

const without=function(source, itemsToRemove){
  let result = [];
  for(let i = 0; i< source.length; i++){
    let samevalue = true;
  
  for(let j = 0; j< itemsToRemove.length; j++){
  if(source[i] === itemsToRemove[j]){
    samevalue = false;
  }
}

if(samevalue){
  result.push(source[i]);
}
}
console.log(result);
return result;
};
console.log(""); 
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
// let arr1 = [0,1,2,3];
// let arr2 = [0,1,2,3];
// console.log("");
// assertArraysEqual(arr1, arr2); // passed

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //false
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //true
// assertArraysEqual([1, 2, 3], [3, 2, 1]); //false
// assertArraysEqual([1, 2, 56], [1, 2]); //false