const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x2705) + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(String.fromCodePoint(0x274C) + `Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);
  if (objKeys1.length !== objKeys2.length) {
    return false;
  }
  for (const x of objKeys1) {
    if (Array.isArray(object1[x]) && Array.isArray(object2[x])) {
      if (!eqArrays(object1[x],object2[x])) {
        return false;
      }
    } else if (object1[x] !== object2[x]) {
      return false;
    }
  }
  return true;
};
const ab = { a: "0", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba))
const abc = { a: "1", b: "2", c: "3" };
//console.log(eqObjects(ab, abc));
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 0], c: "1" };
console.log(assertEqual(eqObjects(cd,dc),true));
