const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x2705) + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(String.fromCodePoint(0x274C) + `Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countOnly = function(arr, obj) {
  let newObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i]) && obj[arr[i]] === true) {
      if (typeof newObj[arr[i]] === 'undefined') {
        newObj[arr[i]] = 0;
        newObj[arr[i]] = newObj[arr[i]] + 1;
      } else newObj[arr[i]] = newObj[arr[i]] + 1;
    }
  }
  console.log(newObj);
};
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
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Salima": true });