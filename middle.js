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
const middle = function(array) {
  const arrayLength = array.length;
  let newArr = [];
  let indx = '';
  if (arrayLength >= 3) {
    if (arrayLength % 2 !== 0) {
      indx = (arrayLength - 1) / 2;
      newArr.push(array[indx]);
    } else {
      indx = Math.trunc((arrayLength - 1) / 2);
      newArr.push(array[indx], array[indx + 1]);
    }
  }
  return newArr;
};
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3]));
/**
 * check if input is an array. if its an array proceed to the next step
 * get the length of the array
 * if length of array is odd, middle array index is array.length - 1 / 2
 * if length of array is even, middle array index is index 1 = math.trunc(array.length - 1 / 2 )
 * index 2 = index 1 + 1
 */