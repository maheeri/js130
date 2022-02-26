class Anagram {
  constructor(originalWord) {
    this.originalWord = originalWord.toLowerCase();
  }

  match(words) {
    let anagrams = [];
    words.forEach(matchWord => {
      let normalizedMatchWord = matchWord.toLowerCase();
      if (this.notDuplicated(normalizedMatchWord, anagrams) &&
        this.isValidAnagram(normalizedMatchWord)) {
        anagrams.push(matchWord);
      }
    });
    return anagrams;
  }

  notDuplicated(normalizedMatchWord, anagrams) {
    return normalizedMatchWord !== this.originalWord &&
      anagrams.every(anagram => normalizedMatchWord !== anagram.toLowerCase());
  }

  isValidAnagram(normalizedMatchWord) {
    return this.hasSameLength(normalizedMatchWord) &&
      this.allLettersMatch(normalizedMatchWord);
  }

  hasSameLength(matchWord) {
    return matchWord.length === this.originalWord.length;
  }

  allLettersMatch(matchWord) {
    let originalWordLetters = this.originalWord.split('').sort();
    for (let index = 0; index < originalWordLetters.length; index++) {
      let matchWordLetters = matchWord.split('').sort();
      if (matchWordLetters[index] !== originalWordLetters[index]) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Anagram;