//This function implement the tail function.
const tail = function(arr) {
  const newArr = arr.slice(1);
  console.log(newArr);
};
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x2705) + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(String.fromCodePoint(0x274C) + `Assertion Failed: ${actual} !== ${expected}`);
  }
};
//const result = tail(["Hello", "Lighthouse", "Labs"])
//assertEqual(tail(result, ["Lighthouse", "Labs"] ), "Hello");//assertEqual("Lighthouse Labs", "Lighthouse Labs");
const words = ["Yo Yo"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);