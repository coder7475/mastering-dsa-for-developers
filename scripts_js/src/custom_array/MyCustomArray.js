const DEFAULT_CAPACITY = 10;

class MYCustomArray {
  constructor(capacity = DEFAULT_CAPACITY) {
    this.capacity = capacity;
    this.length = 0;
    this.array = new Array(capacity);
  }

  push(value) {
    this.array[this.length++] = value;
  }


  insert(index, value) {
    this.#checkIndex(index);

    // last index
    if (index === this.length) {
      return this.push(value);
    }

    for (let i = this.length; i > index; i--) {
      this.array[i] = this.array[i - 1];
      console.log(`Arr[i]: `)
    }

  }

  // Linear Time O(n) - Space Complexity (O(n))
  copy() {
    const newArray = new Array(this.capacity);

    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.array[i];
    }

    return newArray;
  }

  remove(index) {
    this.#checkIndex(index);

    const element = this.array[index];


    for (let i = index; i < this.length; i++) {
      this.array[i] = this.array[i + 1];
    }

    this.length--;

    return element;
  }

  // private function checkIndex
  #checkIndex(index) {
    if (index < 0 || index > this.length) {
      throw new Error('Index is out of bounds');
    }
  }

}

const arr = new MYCustomArray();

arr.push(1);
arr.push(2);

console.log(arr)





















