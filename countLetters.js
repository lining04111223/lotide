const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅   Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

const countLetters = function(string){
  const results = {};
  for (const item of string){
    if (item !== " "){
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
       
}
//console.log(results);      
  } 
  console.log(results);
}
// TEST CODE
countLetters("lighthouse in the house");