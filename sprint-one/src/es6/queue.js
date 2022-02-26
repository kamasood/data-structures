class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.front = 1;
    this.back = 0;
  }

  enqueue(value) {
    let back = ++this.back;
    this.storage[back] = value;
  }

  dequeue() {
    let front = this.front;
    let back = this.back;
    if (front > back) {
      return;
    }
    var dq = this.storage[front];
    delete this.storage[front];
    this.front++;
    return dq;
  }

  size() {
    return this.back - this.front + 1;
  }

}
