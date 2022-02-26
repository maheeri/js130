class SumOfMultiples {
  static DEFAULT_FACTORS = [3, 5];

  constructor(...providedFactors) {
    if (providedFactors) {
      this.factors = providedFactors;
    }
  }

  to(target) {
    return SumOfMultiples.to(target, this.factors);
  }

  static to(target, factors) {
    if (!factors) {
      factors = this.DEFAULT_FACTORS;
    }

    let allMultiples = [];
    for (let index = 0; index < factors.length; index++) {
      let currFactor = factors[index];
      let currMultiple = currFactor;
      while (currMultiple < target) {
        if (!allMultiples.includes(currMultiple)) {
          allMultiples.push(currMultiple);
        }
        currMultiple += currFactor;
      }
    }

    return allMultiples.reduce((acc, curr) => acc + curr, 0);
  }
}

module.exports = SumOfMultiples;