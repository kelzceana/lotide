const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
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
module.exports = middle
/**
 * check if input is an array. if its an array proceed to the next step
 * get the length of the array
 * if length of array is odd, middle array index is array.length - 1 / 2
 * if length of array is even, middle array index is index 1 = math.trunc(array.length - 1 / 2 )
 * index 2 = index 1 + 1
 */