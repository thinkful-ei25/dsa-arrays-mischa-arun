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
      this.resize((this.capacity + 1) * Array.SIZE_RATIO);
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

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    this.length -= 1;
    const val = memory.get(this.ptr + this.length);
    return val;
  }

  insert(index, value) {
    if (this.capacity - this.length <= 0) {
      this.resize((this.capacity + 1) * Array.SIZE_RATIO);
    }

    // Move everything from index over by one
    // 0 1 2 3 4 5
    // length: 6
    // index: 4
    // copy: 2
    // insert(2, 22)
    // 0 1 22 2 3 4 5
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length += 1;
  }

  remove(index) {
    // Copy everything from index + 1 through the end, to index
    // 0 1 2 3 4 5 6
    // remove 3
    // length - index + 1
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index + 1);
    this.length -= 1;
  }
}

function main() {
  Array.SIZE_RATIO = 3;
  //create an instance of the array class
  let arr = new Array();

  //add an item to the array
  arr.push(3);

  console.log(arr);
}

main();

module.exports = Array;
