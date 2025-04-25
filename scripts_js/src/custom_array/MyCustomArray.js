const DEFAULT_CAPACITY = 10

class MYCustomArray {
  constructor(capacity = DEFAULT_CAPACITY) {
    this.capacity = capacity;
    this.length = 0;
    this.array = new Array(capacity);
  }

  insert(value, index) {
    if (index < 0 || index > this.length) {
      throw new Error('Index is out of bounds')
    }
    // last index
    if (index === this.length) {
      this.array[index] = value;
      return;
    }

    for (let i = this.length; i > index; i--) {
      this.array[i] = this.array[i - 1];
    }

  }
}

const array = new MYCustomArray();

array.insert(1, 0);
array.insert(2, 1);
array.insert(3, 2);
array.insert(4, 3);
array.insert(5, 4);

console.log(array)
