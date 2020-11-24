const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x2705) + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(String.fromCodePoint(0x274C) + `Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(10, 1);
const eqArrays = function(arr1, arr2) {
  let trueOrFalse = '';
  if (arr1.length !== arr2.length) {
    trueOrFalse = false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      trueOrFalse = true;
    } else trueOrFalse = false;
  }
  return trueOrFalse;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
