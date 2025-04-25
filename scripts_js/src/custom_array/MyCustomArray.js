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


  insert(value, index) {
    if (index < 0 || index > this.length) {
      throw new Error('Index is out of bounds')
    }
    // last index
    if (index === this.length) {
      return this.push(value);
    }

    for (let i = this.length; i > index; i--) {
      this.array[i] = this.array[i - 1];
      console.log(`Arr[i]: `)
    }

  }
}

const arr = new MYCustomArray();

arr.insert(1, 0);
arr.insert(2, 1);
arr.insert(3, 2);
arr.insert(4, 3);
arr.insert(5, 4);

console.log(arr)
