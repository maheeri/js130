function foo(condition) {
  let bar;

  console.log(bar);

  let qux = 3.1415;
  if (condition) {
    console.log(qux);
  } else {
    let bar = 24;

    let xyzzy = function() {
      let qux = 2.7183;
      console.log(qux);
    };

    let qux = 0.5772;
    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);