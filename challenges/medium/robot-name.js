class Robot {
  static robotNames = [];

  constructor() {
    this.robotName = this._generateName();
  }

  _generateName() {
    let robotName = this._generateRandomName();
    while (Robot.robotNames.includes(robotName)) {
      robotName = this._generateRandomName();
    }

    Robot.robotNames.push(robotName);
    return robotName;
  }

  _generateRandomName() {
    let randomLettersPrefix = `${this._randomLetter()}${this._randomLetter()}`;
    let randomDigitsSuffix = `${this._randomDigit()}${this._randomDigit()}${this._randomDigit()}`;
    return randomLettersPrefix + randomDigitsSuffix;
  }

  _randomLetter() {
    const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
      'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
      'V', 'W', 'X', 'Y', 'Z'];

    return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }

  _randomDigit() {
    return Math.floor(Math.random() * 10);
  }

  name() {
    return this.robotName;
  }

  reset() {
    this.robotName = this._generateName();
  }
}

module.exports = Robot;