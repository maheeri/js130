function makeCounterLogger(num1) {
  return num2 => {
    if (num2 > num1) {
      for (let index = num1; index <= num2; index++) {
        console.log(index);
      }
    } else {
      for (let index = num1; index >= num2; index--) {
        console.log(index);
      }
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8

countlog(2);
// 5
// 4
// 3
// 2