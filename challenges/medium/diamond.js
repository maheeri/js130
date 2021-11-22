const lettersToPositions = {
  A: 0, // 0 => 0
  B: 1, // 1 => 1 + (1 - 1) * 2
  C: 2, // 3 => 1 + (2 - 1) * 2
  D: 3, // 5 => 1 + (3 - 1) * 2
  E: 4, // 7 => 1 + (4 - 1) * 2
  F: 5,
  G: 6,
  H: 7,
  I: 8,
  J: 9,
  K: 10,
  L: 11,
  M: 12,
  N: 13,
  O: 14,
  P: 15,
  Q: 16,
  R: 17,
  S: 18,
  T: 19,
  U: 20,
  V: 21,
  W: 22,
  X: 23,
  Y: 24,
  Z: 25
};

const positionsToLetters = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
  5: "F",
  6: "G",
  7: "H",
  8: "I",
  9: "J",
  10: "K",
  11: "L",
  12: "M",
  13: "N",
  14: "O",
  15: "P",
  16: "Q",
  17: "R",
  18: "S",
  19: "T",
  20: "U",
  21: "V",
  22: "W",
  23: "X",
  24: "Y",
  25: "Z"
};


class Diamond {
  static makeDiamond(letter) {
    let widestPosition = lettersToPositions[letter];
    let result = "";
    let topToMiddlePosition = 0;
    while (topToMiddlePosition <= widestPosition) {
      let letter = positionsToLetters[topToMiddlePosition];
      result += this._constructLine(letter, widestPosition);
      topToMiddlePosition += 1;
    }

    let middleToBottomPosition = widestPosition - 1;
    while (middleToBottomPosition >= 0) {
      letter = positionsToLetters[middleToBottomPosition];
      result += this._constructLine(letter, widestPosition);
      middleToBottomPosition -= 1;
    }

    return result;
  }

  static _constructLine(letter, widestPosition) {
    let maxWidth = 0;
    if (widestPosition > 0) {
      maxWidth = Diamond.maxWidth(widestPosition);
    }

    if (letter === "A") {
      let paddingLength = Math.floor(maxWidth / 2);
      return `${" ".repeat(paddingLength)}A${" ".repeat(paddingLength)}\n`;
    }

    let lettersSpace = 1 + ((lettersToPositions[letter] - 1) * 2);
    let endsSpace = Math.floor((maxWidth - lettersSpace - 2) / 2);
    //{endsSpace}{letter}{lettersSpace}{letter}{endsSpace}
    return `${" ".repeat(endsSpace)}${letter}${" ".repeat(lettersSpace)}${letter}${" ".repeat(endsSpace)}\n`;
  }

  static maxWidth(widestPosition) {
    // + 2 at the end to account for letters themselves
    return 1 + ((widestPosition - 1) * 2) + 2;
  }
}

module.exports = Diamond;