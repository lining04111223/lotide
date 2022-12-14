const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅   Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    console.log(item);
    // console.log(allItems[item]);
    console.log(results[item]);
  
if (itemsToCount[item]) { 
  console.log(itemsToCount[item]);
  if (results[item]) {
    results[item] += 1;
  } else {
    results[item] = 1;
  }
  console.log(results[item]);
}
}
  return results;
}

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);