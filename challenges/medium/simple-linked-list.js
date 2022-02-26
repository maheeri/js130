class Element {
  constructor(value, nextElem) {
    this.value = value;
    this.nextElem = nextElem ? nextElem : null;
  }

  datum() {
    return this.value;
  }

  next() {
    return this.nextElem;
  }

  isTail() {
    return this.next() === null;
  }
}

class SimpleLinkedList {
  constructor() {
    this.listHead = null;
  }

  size() {
    let curr = this.head();
    let computedSize = 0;
    while (curr) {
      computedSize += 1;
      curr = curr.next();
    }
    return computedSize;
  }

  head() {
    return this.listHead;
  }

  peek() {
    return this.head() ? this.head().datum() : null;
  }

  static fromArray(array) {
    if (!array) {
      return new SimpleLinkedList();
    }

    let list = new SimpleLinkedList();
    for (let index = array.length - 1; index >= 0; index--) {
      list.push(array[index]);
    }
    return list;
  }

  toArray() {
    let curr = this.head();
    let array = [];
    while (curr) {
      array.push(curr.datum());
      curr = curr.next();
    }
    return array;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(num) {
    let elem = new Element(num);
    elem.nextElem = this.head();
    this.listHead = elem;
  }

  pop() {
    if (!this.head()) {
      return null;
    }

    let temp = this.head();
    this.listHead = this.listHead.next();
    return temp.datum();
  }

  reverse() {
    return SimpleLinkedList.fromArray(this.toArray().reverse());
  }
}

module.exports = { SimpleLinkedList, Element };