class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(otherStrand) {
    let shorterStrand = this.strand;
    let longerStrand = otherStrand;
    if (this.strand.length > otherStrand.length) {
      shorterStrand = otherStrand;
      longerStrand = this.strand;
    }

    let distance = 0;
    for (let index = 0; index < shorterStrand.length; index++) {
      if (shorterStrand[index] !== longerStrand[index]) {
        distance += 1;
      }
    }

    return distance;
  }
}

module.exports = DNA;