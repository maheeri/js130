class SumOfMultiples {
  constructor(...nums) {
    this.multiples = nums;
  }

  to(num) {
    console.log(this.multiples);
    return SumOfMultiples.to(num, this.multiples);
  }

  static to(num, multiples) {
    let innerMultiples = multiples;
    if (multiples === undefined) {
      innerMultiples = [3, 5];
    }

    let result = 0;
    let seenMultiples = new Set();
    for (let index = 0; index < innerMultiples.length; index++) {
      let currMultiple = innerMultiples[index];
      while (currMultiple < num) {
        if (!seenMultiples.has(currMultiple)) {
          result += currMultiple;
          seenMultiples.add(currMultiple);
        }
        currMultiple += innerMultiples[index];
      }
    }
    return result;
  }
}

module.exports = SumOfMultiples;