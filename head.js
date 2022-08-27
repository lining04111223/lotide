const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

function head(arr){
  return arr[0];
}

const result=head([5,6,7]);
// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
assertEqual(result, 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
