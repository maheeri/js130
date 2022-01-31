function myBind(func, context, ...args) {
  return function (...innerArgs) {
    return func.apply(context, [...args, ...innerArgs]);
  };
}

function list() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

const list1 = list(1, 2, 3);
//  [1, 2, 3]
console.log(list1);

const result1 = addArguments(1, 2);
//  3
console.log(result1);

// Create a function with a preset leading argument
const leadingThirtysevenList = myBind(list, null, 37);

// Create a function with a preset first argument.
const addThirtySeven = myBind(addArguments, null, 37);

const list2 = leadingThirtysevenList();
//  [37]
console.log(list2);

const list3 = leadingThirtysevenList(1, 2, 3);
//  [37, 1, 2, 3]
console.log(list3);

const result2 = addThirtySeven(5);
//  37 + 5 = 42
console.log(result2);

const result3 = addThirtySeven(5, 10);
//  37 + 5 = 42
console.log(result3);
//  (the second argument is ignored)


