function foo(array) {
  return [
    array[2],
    5,
    array[0],
  ];
}

let array = [1, 2, 3];
let result = foo(array);
let bar = result[0]
let qux = result[1]
let baz = result[2];