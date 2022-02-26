class RomanNumeral {
  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let remainder = this.number;
    let romanNumeral = '';
    while (remainder > 0) {
      if (remainder >= 1000) {
        romanNumeral += 'M';
        remainder -= 1000;
      } else if (remainder >= 900) {
        romanNumeral += 'CM';
        remainder -= 900;
      } else if (remainder >= 500) {
        romanNumeral += 'D';
        remainder -= 500;
      } else if (remainder >= 400) {
        romanNumeral += 'CD';
        remainder -= 400;
      } else if (remainder >= 100) {
        romanNumeral += 'C';
        remainder -= 100;
      } else if (remainder >= 90) {
        romanNumeral += 'XC';
        remainder -= 90;
      } else if (remainder >= 50) {
        romanNumeral += 'L';
        remainder -= 50;
      } else if (remainder >= 40) {
        romanNumeral += 'XL';
        remainder -= 40;
      } else if (remainder >= 10) {
        romanNumeral += 'X';
        remainder -= 10;
      } else if (remainder >= 9) {
        romanNumeral += 'IX';
        remainder -= 9;
      } else if (remainder >= 5) {
        romanNumeral += 'V';
        remainder -= 5;
      } else if (remainder >= 4) {
        romanNumeral += 'IV';
        remainder -= 4;
      } else {
        romanNumeral += 'I';
        remainder -= 1;
      }
    }
    return romanNumeral;
  }
}

module.exports = RomanNumeral;