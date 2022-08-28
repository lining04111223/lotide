const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)){
    console.log(`✅✅✅   Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;

const letterPositions = function(sentence) {
  const results = {};
      for(let i = 0; i < sentence.length; i++){
        let char = sentence[i]; //字母
        if (char !== " "){
          if (results[char]) {
            results[char].push(i);
          } else {
            results[char]= [i];
          }


      }

       
}
//console.log(results);      

  console.log(results);
  return results;
};
// TEST CODE
letterPositions("lighthouse in the house");