function shorthand(first, second, third, fourth, last) {
  return {
    first,
    middle: [second, third, fourth].sort(),
    last
  }
}

let array = [1, 2, 3, 4, 5];
let { first, middle, last } = shorthand(...array);
console.log(first);
console.log(middle);
console.log(last);