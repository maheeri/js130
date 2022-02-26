class PerfectNumber {
  static classify(number) {
    if (number < 1) {
      throw new Error('Number should be positive.');
    }

    let divisorsSum = this.computeDivisorsSum(number);
    if (divisorsSum === number) {
      return 'perfect';
    } else if (divisorsSum < number) {
      return 'deficient';
    } else {
      return 'abundant';
    }
  }

  static computeDivisorsSum(number) {
    let divisors = [];
    for (let curr = 1; curr <= number / 2; curr++) {
      if (number % curr === 0) {
        divisors.push(curr);
      }
    }
    return divisors.reduce((acc, curr) => acc + curr)
  }
}

module.exports = PerfectNumber;