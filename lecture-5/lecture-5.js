// Task 1
// Create a BaseStorage.
// The BaseStorage constructor must take the maximum number of elements
// in the storage as its only optional parameter.
// If the parameter is an invalid number, generate an error.
// If the parameter is not specified, set the maximum stack size to 10.
// Required properties:
// - storage: array
// - maxSize: number
// Methods:
// - isEmpty() - returns a Boolean value (whether the storage is empty or not);
// - toArray() - returns a new array consisting of stored elements.

// Task 2
// Create a Stack class deriving from BaseStorage.
// Implement public methods:
// - push(elem) - add a new element to the stack (generate an error if the stack is full);
// - pop() - remove the top element of the stack and return it (generate an error if the stack is empty);
// - peek() - get the top element of the stack (return null if the stack is empty);
// Implement static public methods:
//   - fromIterable(iterable) - returns a new Stack, the elements of which are the elements of the
// passed iterable entity.
// The maximum number of elements of such a stack must be equal to the length of this entity.
// If the entity is not iterable, generate an error.

// Task 3
// Create a Queue class deriving from BaseStorage.
// Implement public methods:
// - push(elem) - add a new element to the queue (generate an error if the queue is full);
// - shift() - remove the first element of the stack and return it (generate an error if the queue is
// empty);
// - peek() - get the first element of the queue (return null if the queue is empty);
// Implement static public methods:
// - fromIterable(iterable) - returns a new Queue, the elements of which are the elements of the
// passed iterable entity.
// The maximum number of elements of such a queue must be equal to the length of this entity.
// If the entity is not iterable, generate an error

class BaseStorage {
  storage;
  maxSize;

  constructor(maxSize = 10) {
    if (!Number.isInteger(maxSize) || maxSize <= 0)
      throw new Error("Invalid argument!");

    this.storage = []
    this.maxSize = maxSize
  }

  isEmpty() {
    return this.storage.length === 0
  }

  toArray() {
    return [...this.storage]
  }
}

class Stack extends BaseStorage {
  push(elem) {
    if (this.maxSize === this.storage.length)
      throw new Error('Stack is full!')

    this.storage.push(elem)
  }

  pop() {
    if (this.isEmpty())
      throw new Error('Stack is empty!')

    this.storage.pop()
  }

  peek() {
    return this.isEmpty()
      ? null
      : this.storage[this.storage.length - 1]
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== 'function')
      throw new Error("Argument is not iterable!")

    const maxSize = iterable.length

    const stack = new Stack(maxSize)
    for (const element of iterable) {
      stack.push(element)
    }

    return stack
  }
}

class Queue extends BaseStorage {
  push(elem) {
    if (this.maxSize === this.storage.length)
      throw new Error('Stack is full!')

    this.storage.push(elem)
  }

  shift() {
    return this.storage.shift()
  }

  peek() {
    if (this.storage.length === 0)
      throw new Error('Stack is empty!')

    return this.storage[0]
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== 'function')
      throw new Error("Argument is not iterable!")

    const maxSize = iterable.length

    const queue = new Queue(maxSize)
    for (const element of iterable) {
      queue.push(element)
    }

    return queue
  }
}