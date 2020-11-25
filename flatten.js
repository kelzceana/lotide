const flatten = function(arr) {
  let hldr = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        hldr.push(element[i]);
      }
    } else hldr.push(element);
  });
  console.log(hldr);
};

flatten([1, 2, [3, 4], 5, [6]]);