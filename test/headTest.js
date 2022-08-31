const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
const  test = [5,6,7];
result=head(test);

assertEqual(result, 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
