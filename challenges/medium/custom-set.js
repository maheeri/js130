class CustomSet {
  constructor(values) {
    this.values = values ? values.slice() : [];
  }

  isEmpty() {
    return this.values.length === 0;
  }

  isSubset(other) {
    return this.values.every(value => other.contains(value));
  }

  contains(value) {
    return this.values.includes(value);
  }

  isDisjoint(other) {
    return this.values.every(value => !other.contains(value));
  }

  isSame(other) {
    return this.values.every(value => other.contains(value)) &&
      other.values.every(value => this.contains(value));
  }

  add(value) {
    if (!this.contains(value)) {
      this.values.push(value);
    }
    return this;
  }

  intersection(other) {
    let intersect = new CustomSet();
    other.values.forEach(value => {
      if (this.contains(value) && other.contains(value)) intersect.add(value);
    });
    return intersect;
  }

  difference(other) {
    let diffed = new CustomSet(this.values);
    other.values.forEach(value => {
      if (diffed.contains(value)) {
        diffed.values.splice(diffed.values.indexOf(value), 1);
      }
    });
    return diffed;
  }

  union(other) {
    let combined = new CustomSet(this.values);
    other.values.forEach(value => combined.add(value));
    return combined;
  }
}

module.exports = CustomSet;