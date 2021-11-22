class Series {
  constructor(numberText) {
    this.numberText = numberText;
  }

  slices(size) {
    if (size > this.numberText.length) {
      throw Error("Size should be less than or equal to the length of the text");
    }

    let allSequences = [];
    for (let idx1 = 0; idx1 < this.numberText.length - size + 1; idx1++) {
      let sequence = [];
      for (let idx2 = idx1; idx2 < idx1 + size; idx2++) {
        let curr = parseInt(this.numberText[idx2], 10);
        sequence.push(curr);
      }
      allSequences.push(sequence);
    }
    return allSequences;
  }
}

module.exports = Series;