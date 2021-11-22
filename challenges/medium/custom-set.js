class CustomSet {
  constructor(values = []) {
    this.set = [];
    for (let index = 0; index < values.length; index++) {
      let value = values[index];
      if (!this.set.includes(value)) {
        this.set.push(value);
      }
    }
  }

  isEmpty() {
    return this.set.length === 0;
  }

  contains(value) {
    return this.set.includes(value);
  }

  isSubset(otherSet) {
    if (this.isEmpty()) {
      return true;
    }

    for (let index = 0; index < this.set.length; index++) {
      if (!otherSet.contains(this.set[index])) {
        return false;
      }
    }

    return true;
  }

  isDisjoint(otherSet) {
    if (this.isEmpty()) {
      return true;
    }

    for (let index = 0; index < this.set.length; index++) {
      if (otherSet.contains(this.set[index])) {
        return false;
      }
    }

    return true;
  }

  isSame(otherSet) {
    return otherSet.isSubset(this) && this.isSubset(otherSet);
  }

  add(value) {
    if (!this.set.includes(value)) {
      this.set.push(value);
    }
    return this;
  }

  intersection(otherSet) {
    let result = [];
    for (let index = 0; index < this.set.length; index++) {
      const value = this.set[index];
      if (otherSet.contains(value)) {
        result.push(value);
      }
    }
    return new CustomSet(result);
  }

  difference(otherSet) {
    let result = [];
    for (let index = 0; index < this.set.length; index++) {
      const value = this.set[index];
      if (!otherSet.contains(value)) {
        result.push(value);
      }
    }
    return new CustomSet(result);
  }

  union(otherSet) {
    let result = [];
    this.forEach(value => {
      if (!result.includes(value)) {
        result.push(value);
      }
    });

    otherSet.forEach(value => {
      if (!result.includes(value)) {
        result.push(value);
      }
    });

    return new CustomSet(result);
  }

  forEach(callback) {
    this.set.forEach(value => callback(value));
  }
}

module.exports = CustomSet;