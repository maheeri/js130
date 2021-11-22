"use strict";

function myBind(obj, func) {
  return function() {
    return func.apply(obj, arguments);
  } 
}

let obj = {};
let boundFunc = myBind(obj, function() {
  this.foo = "bar";
});

let obj2 = { foo: 'bar' }
let boundFunc2 = myBind(obj2, function (arg) {
  console.log(this.foo + ' ' + arg)
})

boundFunc();
console.log(obj); // { foo: 'bar' }

boundFunc2('qux')