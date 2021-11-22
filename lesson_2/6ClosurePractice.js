let runningTotal = 0;

function add(num) {
  runningTotal += num;
  console.log(runningTotal);
}

function subtract(num) {
  runningTotal -= num;
  console.log(runningTotal);
}

add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10