'use strict';

const Memory = require('./memory');
const memory = new Memory();

class Array {
  constructor(capacity = 10) {
    this.capacity = capacity;
    this.ptr = memory.allocate(this.capacity);
    this.length = 0;
  }

  resize(newCapacity) {
    const newPtr = memory.allocate(newCapacity);
    memory.copy(newPtr, this.ptr, this.length);
    memory.free(this.ptr);
    this.ptr = newPtr;
    this.capacity = newCapacity;
  }

  push(value) {
    if (this.capacity - this.length <= 0) {
      this.resize(this.capacity * 2);
    }

    if (this.capacity - this.length > 0) {
      memory.set(this.ptr + this.length, value);
      this.length += 1;
    }
  }

  get(index) {
    if (index >= this.length) {
      throw new Error('Index out of bounds');
    }
    return memory.get(this.ptr + index);
  }

  pop() {}

  insert() {}

  revove() {}
}

function main() {
  const arr = new Array();
  arr.push(25);
  arr.push(50);
  console.log(arr.get(0));
  console.log(arr.get(1));
}

main();

module.exports = Array;
