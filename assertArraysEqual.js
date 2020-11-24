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
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(String.fromCodePoint(0x2705) + `Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(String.fromCodePoint(0x274C) + `Assertion Failed: ${array1} !== ${array2}`);
  }
};
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

