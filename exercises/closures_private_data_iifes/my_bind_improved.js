"use strict";

function myBind(func, obj, ...args) {
  return function() {
    return func.apply(obj, [...args, ...arguments]);
  } 
}

function list() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

const list1 = list(1, 2, 3);
//  [1, 2, 3]

const result1 = addArguments(1, 2);
//  3

// Create a function with a preset leading argument
const leadingThirtysevenList = myBind(list, null, 37);

// Create a function with a preset first argument.
const addThirtySeven = myBind(addArguments, null, 37);

const list2 = leadingThirtysevenList();
console.log(list2);
//  [37]

const list3 = leadingThirtysevenList(1, 2, 3);
console.log(list3);
//  [37, 1, 2, 3]

const result2 = addThirtySeven(5);
console.log(result2);
//  37 + 5 = 42

const result3 = addThirtySeven(5, 10);
console.log(result3);
//  37 + 5 = 42
//  (the second argument is ignored)

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)) // 15
