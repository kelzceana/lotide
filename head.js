//The head function return the first element of the array
const head = function(arr) {
  return arr[0];
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x2705) + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(String.fromCodePoint(0x274C) + `Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");//assertEqual("Lighthouse Labs", "Lighthouse Labs");
