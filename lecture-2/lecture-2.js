// Task 1
// Simple Calculator
//
// Write a function add that will work like that:
// add(1,2) // 3
// add(1)(2) // 3

function add(a, b) {
  if (b !== undefined) {
    console.log(a + b)
    return a + b
  } else {
    return function (b) {
      console.log(a + b)
      return a + b
    }
  }
}


document.getElementById('result-1').innerText = `${add(1, 2)}  \n${add(1)(2)}`

// Task 2
//  Write your own implementation of the built-in array function filter.
//  Call the function myFilter and make it so that any array can use this function as a “native” one.
//  It must take a callback function as parameters and an optional parameter as an object that will
//  be used as .this in internal calls to this callback function.
//  Ultimately, your myFilter implementation should work exactly like the built-in filter method.
//  The callback function passed as a parameter must also be called with the same
//  parameters as the original (element, index, array)

Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof (callback) !== 'function')
    throw new Error(callback + " is not a function!")

  const array = this
  let result = []

  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    if (callback.call(thisArg, element, index, array))
      result = [...result, array[index]]
  }

  return result
}

const testArr = [105, 20, 3, 41, 15, 6, 7, 48, 9, 10]
console.log(testArr.myFilter((x) => x > 10));

// Task 3
// It is necessary to reflash the global object a little.
// Consider these three functions:
//
// window.alert(); // confirm()
// window.prompt(); // alert()
// window.confirm(); // prompt()
//
// When calling alert(), the logic confirm(),
// prompt - alert(), confirm() - prompt() should work,
// feel free to use your own order.
//
// *Additionally - try to do this as briefly as possible, in the least amount of steps.
// (By action we mean any operation - creating a variable, equating, calling a method)


document.getElementById('btn-1').addEventListener('click', (event) => {
  event.preventDefault()

  window.alert();
  window.prompt();
  window.confirm();

})

document.getElementById('btn-2').addEventListener('click', (event) => {
  event.preventDefault();

  [alert, prompt, confirm] = [confirm, alert, prompt]

  window.alert(); // confirm()
  window.prompt(); // alert()
  window.confirm(); // prompt()

})
