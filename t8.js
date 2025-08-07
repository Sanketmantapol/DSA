class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Add data at the end
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  // Add data at the beginning
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  // Remove data at a specific index
  removeAt(index) {
    if (index < 0 || index >= this.length) return null;

    let removedNode = null;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }

    this.length--;
    return removedNode.data;
  }

  // Insert data at a specific index
  insertAt(data, index) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      this.prepend(data);
      return true;
    }

    const newNode = new Node(data);
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    newNode.next = prev.next;
    prev.next = newNode;

    this.length++;
    return true;
  }

  // Returns the size of the list
  size() {
    return this.length;
  }

  // Checks if the list is empty
  isEmpty() {
    return this.length === 0;
  }

  // Finds the index of the data in the list, -1 if not found
  search(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1; // Not found
  }

  // (Optional) For debugging: Convert list to array
  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
}

// Example usage:
const list = new SinglyLinkedList();
list.append(10);
list.prepend(5);
list.append(20);
console.log(list.toArray());       // [5, 10, 20]
list.insertAt(15, 2);
console.log(list.toArray());       // [5, 10, 15, 20]
console.log(list.removeAt(1));    // 10
console.log(list.toArray());       // [5, 15, 20]
console.log(list.size());          // 3
console.log(list.isEmpty());       // false
console.log(list.search(15));      // 1
console.log(list.search(100));     // -1
