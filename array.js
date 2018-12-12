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

  remove(index, size = 1) {
    // Copy everything from index + 1 through the end, to index
    // 0 1 2 3 4 5 6
    // remove 3
    // length - index + 1
    memory.copy(this.ptr + index, this.ptr + index + size, this.length - size - index);
    this.length -= size;

    //if size > greater 1
  }
}

function main() {
  Array.SIZE_RATIO = 3;
  //create an instance of the array class
  let arr = new Array(0);

  //add an item to the array

  arr.push(3);
  // (1) Length: 1, Capacity: 3, Ptr: 0
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  // (2) Length 6: Capacity: 12, Ptr: 3
  // capacity is updated to 12 on line 90, when our array capacity and length are equivalent
  // ----- we call resize which allocates 12 (3+1 * SIZE_RATIO) new blocks starting right after our original blocks (which is address 3)
  arr.pop();
  arr.pop();
  arr.pop();
  // (3) length === 3, capacity === 12, ptr === 3

  console.log(arr.get(0));

  arr.remove(0, arr.length);
  console.log(arr);
  arr.push('tauhida');
  //(4) data structure restricted to floats --> converting our string to NaN (which is a number)
  console.log(arr.get(0));

  //(5) resize --> allocates more memory
  //-----------copies over existing array to new memory location (new ptr address)
}

main();

module.exports = Array;
