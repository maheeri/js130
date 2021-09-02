function map(array, callback) {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    let elem = array[index];
    result.push(callback(elem))
  }
  return result;
};

function reduceMap(array, callback) {
  return array.reduce((acc, curr) => {
    acc.push(callback(curr));
    return acc;
  }, []); 
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

let numbers = [1, 2, 3, 4, 5];
console.log(reduceMap(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(reduceMap(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(reduceMap(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(reduceMap(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]