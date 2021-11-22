function makeMultipleLister(num) {
  return function() {
    let curr = num;
    while (curr < 100) {
      console.log(curr);
      curr += num;
    } 
  }
}

let lister = makeMultipleLister(17);
lister();