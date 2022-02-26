class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(otherStrand) {
    let shorterStrand = this.strand;
    let longerStrand = otherStrand;
    if (otherStrand.length < this.strand.length) {
      shorterStrand = otherStrand;
      longerStrand = this.strand;
    }

    let distance = 0;
    shorterStrand.split('').forEach((_, baseIndex) => {
      if (shorterStrand[baseIndex] !== longerStrand[baseIndex]) {
        distance += 1;
      }
    });

    return distance;
  }
}

module.exports = DNA;