class PerfectNumber {
  static classify(num) {
    if (num < 1) {
      throw Error("Number has to greater than 0");
    }

    let factorsSum = PerfectNumber.sumOfFactors(num);
    if (factorsSum === num) {
      return "perfect";
    } else if (factorsSum > num) {
      return "abundant";
    } else {
      return "deficient";
    }
  }

  static sumOfFactors(num) {
    let halfOfNum = Math.floor(num / 2);
    let factors = [];
    for (let curr = 1; curr <= halfOfNum; curr++) {
      if (num % curr === 0) {
        factors.push(curr);
      }
    }
    return factors.reduce((acc, num) => acc + num);
  }
}

module.exports = PerfectNumber;