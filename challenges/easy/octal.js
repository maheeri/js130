class Octal {
  constructor(octal) {
    if (!this._isValidOctal(octal)) {
      this.octal = '0';
    } else {
      this.octal = octal;
    }
  }

  toDecimal() {
    let result = 0;
    let octalTokens = this.octal.split('');
    for (let index = 0; index < octalTokens.length; index++) {
      let token = octalTokens[index];
      let parsedToken = Number.parseInt(token, 10);
      result += parsedToken * (8 ** (octalTokens.length - 1 - index));
    }
    return result;
  }

  _isValidOctal(octal) {
    let octalTokens = octal.split('');
    for (let index = 0; index < octalTokens.length; index++) {
      let token = octalTokens[index];
      let parsedToken = Number.parseInt(token, 10);
      if (Number.isNaN(parsedToken) || parsedToken > 7) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Octal;