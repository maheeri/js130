class Series {
  constructor(digits) {
    this.digits = digits.split('').map(digitStr => parseInt(digitStr, 10));
  }

  slices(requiredLen) {
    if (requiredLen > this.digits.length) {
      throw new Error('Requested length should be shorter than digits length');
    }

    let series = [];
    for (let index = 0; index < this.digits.length + 1 - requiredLen; index++) {
      let subIndex = index;
      let currSeries = [];
      while (subIndex < index + requiredLen) {
        let currNumber = this.digits[subIndex];
        currSeries.push(currNumber);
        subIndex += 1;
      }
      series.push(currSeries);
    }

    return series;
  }
}

module.exports = Series;