// Task 1


const myIterable = {
  from: 1,
  to: 4,

  [Symbol.iterator]() {
    this.current = this.from
    return this
  },

  next() {
    const error = () => {
      console.log('Error!')
      return {done: true}
    }

    if (!this.hasOwnProperty('from') || !this.hasOwnProperty('to')) {
      error()
    }

    if (isNaN(this.from) || isNaN(this.to)) {
      error()
    }

    if (this.to < this.from) {
      error()
    }

    if (this.current <= this.to) {
      return {done: false, value: this.current++}
    } else {
      return {done: true}
    }

  }
}

const result1 = document.getElementById('result-1')
for (let item of myIterable) {
  result1.innerText = result1.innerText + ' ' + item // 1, 2, 3, 4
}


// Task 2
// You need to implement a function that will take a person's name and age as arguments
// and then return an array of objects.
// Each object must be created in a unique way.
// Additionally - it is not necessary to write these properties as your own for the object,
// you can play with prototypes


function getPersons(name, age) {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  return [
    {name, age},
    Object.assign({}, {name, age}),
    Object.create({}, {name: {value: name, enumerable: true}, age: {value: age, enumerable: true}}),
    Object.fromEntries([['name', name],['age', age]]),
    new Person(name, age),
    JSON.parse(`{"name": "${name}", "age": ${age}}`),
  ]
}
const result2 = document.getElementById('result-2')
result2.innerText = '[\n' + getPersons('John Doe', 42).map((el) => JSON.stringify(el)).join(',\n') + '\n]'


