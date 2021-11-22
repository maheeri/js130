"use strict";

function bind(obj, func) {
  return function() {
    return func.call(obj);
  } 
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }
