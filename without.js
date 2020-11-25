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
const without = function(value1, value2) {
  let holder = value1;
  for (let i = 0; i < value1.length; i++) {
    for (let j = 0; j < value2.length; j++) {
      holder = value1.filter(num => num !== value2[j]);
    }
  }
  return holder;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));



