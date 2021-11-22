class SimpleLinkedList {
  constructor() {
    this.headElement = null;
  }

  size() {
    let curr = this.headElement;
    let computedSize = 0;
    while (curr !== null) {
      computedSize += 1;
      curr = curr.next();
    }
    return computedSize;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(val) {
    let elem = new Element(val);
    if (this.headElement === null) {
      this.headElement = elem;
    } else {
      elem.setNext(this.headElement);
      this.headElement = elem;
    }
  }

  pop() {
    if (this.size() === 0) {
      throw Error("Cannot pop from an empty list");
    }

    let curr = this.headElement;
    if (curr.next() !== null) {
      this.headElement = curr.next();
    } else {
      this.headElement = null;
    }

    return curr.datum();
  }

  peek() {
    if (this.headElement === null) {
      return null;
    }

    return this.headElement.datum();
  }

  head() {
    return this.headElement;
  }

  reverse() {
    return SimpleLinkedList.fromArray(this.toArray().reverse());
  }

  toArray() {
    let array = [];
    let curr = this.headElement;
    while (curr !== null) {
      array.push(curr.datum());
      curr = curr.next();
    }
    return array;
  }

  static fromArray(array) {
    let list = new SimpleLinkedList();
    if (array === null) {
      return list;
    }

    for (let index = array.length - 1; index >= 0; index--) {
      const val = array[index];
      list.push(val);
    }

    return list;
  }
}

class Element {
  constructor(num, next = null) {
    this.value = num;
    this.nextElement = next;
  }

  datum() {
    return this.value;
  }

  next() {
    return this.nextElement;
  }

  setNext(elem) {
    this.nextElement = elem;
  }

  isTail() {
    return this.nextElement === null;
  }
}

module.exports = { SimpleLinkedList, Element };