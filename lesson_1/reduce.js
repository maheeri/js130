function reduce(array, callback, initialValue) {
  let result = undefined;
  let startIdx = 0;
  
  if (initialValue !== undefined) {
    result = initialValue;
  } else if (array.length > 0) {
    result = array[0];
    startIdx = 1;
  }

  for (let index = startIdx; index < array.length; index++) {
    let element = array[index];
    result = callback(result, element);
  }

  return result;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]