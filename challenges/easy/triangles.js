class Triangle {
  constructor(side1, side2, side3) {
    this._validateSideLengths(side1, side2, side3);
    this.sides = [side1, side2, side3];
  }

  kind() {
    const EQUILATERAL = "equilateral";
    const ISOSCELES = "isosceles";
    const SCALENE = "scalene";

    let [side1, side2, side3] = this.sides;

    this._validateSideLengths(side1, side2, side3);

    if ((side1 === side2) && (side2 === side3)) {
      return EQUILATERAL;
    }

    if ((side1 === side2) || (side1 === side3) || (side2 === side3)) {
      return ISOSCELES;
    }

    return SCALENE;
  }

  _validateSideLengths(side1, side2, side3) {
    if (side1 <= 0 || side1 <= 0 || side1 <= 0) {
      throw Error("All sides need to have lengths greater than 0!");
    }

    if (((side1 + side2) <= side3) ||
        ((side1 + side3) <= side2) ||
          ((side2 + side3) <= side1)) {
      throw Error("Sum of two sides' lengths should be greater than third side's length!");
    }
  }
}

module.exports = Triangle;