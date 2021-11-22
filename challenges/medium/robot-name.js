class Robot {
  static names = [];

  constructor() {
    this.robotName = this.generateRandomName();
    Robot.names.push(this.robotName);
  }

  name() {
    return this.robotName;
  }

  reset() {
    let nameToRemoveIdx = Robot.names.indexOf(this.robotName);
    Robot.names.splice(nameToRemoveIdx, 1);
    this.robotName = this.generateRandomName();
  }

  generateRandomName() {
    const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];
    let randomName = "";
    while (randomName === "" || Robot.names.includes(randomName)) {
      console.log("Robot names: " + Robot.names.join(', '));
      let firstLetter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
      let secondLetter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
      let appendedNumber = 100 + Math.floor(Math.random() * 900);
      randomName = firstLetter + secondLetter + appendedNumber.toString();
    }
    return randomName;
  }
}

module.exports = Robot;