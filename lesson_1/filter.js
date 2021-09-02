function filter(array, callback) {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    let elem = array[index];
    if (callback(elem)) {
      result.push(elem);
    }
  }
  return result;
}

function reduceFilter(array, callback) {
  return array.reduce((acc, curr) => {
    if (callback(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []); 
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

let numbers = [1, 2, 3, 4, 5];
console.log(reduceFilter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(reduceFilter(numbers, number => number < 0)); // => []
console.log(reduceFilter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(reduceFilter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]