function product(numbers) {
  return numbers.reduce((total, number) => total * number);
}

let result = product([2, 3, 4, 5]);