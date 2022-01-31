function myBind(func, context) {
  return function () {
    return func.apply(context);
  };
}

function print() {
  console.log(this.value);
}

let myFunc = myBind(print, { value: 1 });
myFunc();

