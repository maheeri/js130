function sum(...args) {
  values = Array.prototype.slice.call(args);

  return values.reduce(function(a, b) {
    return a + b;
  });
}

console.log(sum(1, 4, 5, 6)); // 16