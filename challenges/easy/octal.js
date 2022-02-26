class Octal {
  constructor(octal) {
    if (!this.isValidOctal(octal)) {
      this.octal = '0';
    } else {
      this.octal = octal;
    }
  }

  toDecimal() {
    return this.octal.split('')
      .map(num => parseInt(num, 10))
      .reverse()
      .reduce((acc, curr, idx) => acc + (curr * (8 ** idx)), 0);
  }

  isValidOctal(octalToVerify) {
    return octalToVerify.split('').every(num => num >= '0' && num <= '7');
  }
}

module.exports = Octal;