class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.position = 0;
  }

  push(value) {
    let position = ++this.position;
    this.storage[position] = value;
  }

  pop() {
    let position = this.position;
    if (position === 0) {
      return;
    }
    var popped = this.storage[position];
    delete this.storage[position];
    this.position--;
    return popped;
  }

  size() {
    return this.position;
  }

}