class Diamond {
  static ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z'];

  static makeDiamond(letter) {
    if (letter === 'A') {
      return 'A\n';
    }

    let maxLetterIdx = this.ALPHABET.indexOf(letter);
    let top = Diamond.generateTop(maxLetterIdx);

    let maxWidth = (2 * maxLetterIdx) + 1;
    let middleLine = `${this.ALPHABET[maxLetterIdx]}${' '.repeat(maxWidth - 2)}${this.ALPHABET[maxLetterIdx]}\n`;

    let bottom = top.slice().reverse();

    return top.join('') + middleLine + bottom.join('');
  }

  static generateTop(maxLetterIdx) {
    let maxWidth = (2 * maxLetterIdx) + 1;
    let currLetterIdx = 0;
    let top = [];
    while (currLetterIdx < maxLetterIdx) {
      let currLetter = this.ALPHABET[currLetterIdx];
      if (currLetter === 'A') {
        top.push(`${' '.repeat(maxLetterIdx)}A${' '.repeat(maxLetterIdx)}\n`);
      } else {
        let sideLen = (maxWidth - ((2 * currLetterIdx) + 1)) / 2;
        let middleLen = maxWidth - (sideLen * 2) - 2;
        let line = `${' '.repeat(sideLen)}${currLetter}${' '.repeat(middleLen)}${currLetter}${' '.repeat(sideLen)}\n`;
        top.push(line);
      }
      currLetterIdx += 1;
    }
    return top;
  }
}

module.exports = Diamond;