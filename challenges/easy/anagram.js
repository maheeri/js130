class Anagram {
  constructor(text) {
    this.text = text;
    this.letterFrequencies = this._createLetterFrequencies(text);
  }

  match(wordList) {
    let result = [];
    for (let index = 0; index < wordList.length; index++) {
      let word = wordList[index];
      if (!this._wordEqualsOriginal(word) && this._hasExactLetterCounts(word)) {
        result.push(word);
      }
    }
    return result;
  }

  _createLetterFrequencies(text) {
    let result = {};
    text.toLowerCase().split('').forEach(letter => {
      if (letter in result) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    });
    return result;
  }

  _wordEqualsOriginal(word) {
    return this.text.toLowerCase() === word.toLowerCase();
  }

  _hasExactLetterCounts(word) {
    let candidateLetterFrequencies = this._createLetterFrequencies(word);
    for (let letter in this.letterFrequencies) {
      let frequency = this.letterFrequencies[letter];
      if (letter in candidateLetterFrequencies) {
        candidateLetterFrequencies[letter] -= frequency;
      } else {
        return false;
      }
    }

    return this._allCountsAreZero(candidateLetterFrequencies);
  }

  _allCountsAreZero(letterFrequencies) {
    for (let letter in letterFrequencies) {
      if (letterFrequencies[letter] !== 0) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Anagram;