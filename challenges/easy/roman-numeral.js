/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
class RomanNumeral {
  constructor(decimal) {
    this.decimal = decimal;
  }

  toRoman() {
    let toConvert = this.decimal;
    let roman = '';
    while (toConvert > 0) {
      if (Math.floor(toConvert / 1000) > 0) {
        roman += 'M'.repeat(Math.floor(toConvert / 1000));
        toConvert %= 1000;
      } else if (Math.floor(toConvert / 500) > 0) {
        let numberOfHundreds = Math.floor((toConvert % 500) / 100);
        if (numberOfHundreds === 4) {
          roman += 'CM';
        } else {
          roman += 'D' + 'C'.repeat(numberOfHundreds);
        }
        toConvert %= 500 + (numberOfHundreds * 100);
      } else if (Math.floor(toConvert / 100) > 0) {
        let numberOfHundreds = Math.floor(toConvert / 100);
        if (numberOfHundreds === 4) {
          roman += 'CD';
        } else {
          roman += 'C'.repeat(numberOfHundreds);
        }
        toConvert %= numberOfHundreds * 100;
      } else if (Math.floor(toConvert / 50) > 0) {
        let numberOfTens = Math.floor((toConvert % 50) / 10);
        if (numberOfTens === 4) {
          roman += 'XC';
        } else {
          roman += 'L' + 'X'.repeat(numberOfTens);
        }
        toConvert %= 50 + (numberOfTens * 10);
      } else if (Math.floor(toConvert / 10) > 0) {
        let numberOfTens = Math.floor(toConvert / 10);
        if (numberOfTens === 4) {
          roman += 'XL';
        } else {
          roman += 'X'.repeat(numberOfTens);
        }
        toConvert %= numberOfTens * 10;
      } else if (Math.floor(toConvert / 5) > 0) {
        let numberOfOnes = toConvert % 5;
        if (numberOfOnes === 4) {
          roman += 'IX';
        } else {
          roman += 'V' + 'I'.repeat(numberOfOnes);
        }
        toConvert %= 5 + numberOfOnes;
      } else {
        if (toConvert === 4) {
          roman += 'IV';
        } else {
          roman += 'I'.repeat(toConvert);
        }
        toConvert = 0;
      }
    }
    return roman;
  }
}

module.exports = RomanNumeral;