class Triangle {
  constructor(len1, len2, len3) {
    if (!this.isValid(len1, len2, len3)) {
      throw new Error("Invalid triangle side lengths!");
    }

    this.len1 = len1;
    this.len2 = len2;
    this.len3 = len3;
  }

  isValid(len1, len2, len3) {
    if (len1 <= 0 || len2 <= 0 || len3 <= 0) {
      return false;
    }

    if ((len1 + len2) <= len3 ||
      (len2 + len3) <= len1 ||
      (len1 + len3) <= len2) {
      return false;
    }

    return true;
  }

  kind() {
    if (this.len1 === this.len2 && this.len2 === this.len3) {
      return "equilateral";
    }

    if ((this.len1 === this.len2) ||
      (this.len1 === this.len3) ||
      (this.len2 === this.len3)) {
      return "isosceles";
    }

    return "scalene";
  }
}

module.exports = Triangle;