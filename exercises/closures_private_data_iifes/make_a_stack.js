function newStack() {
  let stack = [];
  return {
    push(item) {
      stack.push(item);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      for (let index = stack.length; index >= 0; index--) {
        console.log(stack[index]);
      }
    }
  }
}




let myStack = newStack();
myStack.push(0);
myStack.printStack();
myStack.push(1);
myStack.push(2);
myStack.printStack();
console.log(myStack.pop());
myStack.printStack();