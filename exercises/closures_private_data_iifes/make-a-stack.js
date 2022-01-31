function makeStack() {
  let stack = [];
  return {
    push(elem) {
      stack.push(elem);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach(elem => console.log(elem));
    }
  };
}

let myStack = makeStack();

myStack.push(1);
myStack.push(2);
myStack.push(3);

// 1, 2, 3
myStack.printStack();

myStack.pop();

// 1, 2
myStack.printStack();