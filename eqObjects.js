const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅   Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

const eqArrays = function(arrayOne, arrayTwo) {

  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }else{

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
}
  return true;
};

module.exports = eqArrays;


const eqObjects = function(object1, object2) {
  
  //length of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  //object1[key] = value of object
  for (const key in object1) {
    //if the value of object is an array 
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key])) {
        //goes to next iteration of for loop
        continue
      } else {
        return false;
      }
    }

    //if value of the object are equal 
    if (object1[key] !== object2[key]) {
      return false;
    }

  } return true;
};

//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), true); // => false

const def = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(def, abc), true); // => true

assertEqual(eqObjects(ab, abc), true); // => false

//TEST CODE: Arrays As Values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), true); // => false

assertEqual(eqObjects(cd, cd), true); // => true
