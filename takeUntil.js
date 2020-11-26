const takeUntil = function(array, callback) {
  let output = [];
  for (let arr of array) {
    if (callback(arr) === true) {
      return output;
    } else output.push(arr);
  }
  return output;
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
console.log(takeUntil(data1, x => x < 0));
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
console.log(takeUntil(data2, x => x === ','));