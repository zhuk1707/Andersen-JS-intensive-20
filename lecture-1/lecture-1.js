function numberToBinary(num) {
  console.log(num.toString(2));
  return num.toString(2)
}

document.getElementById('result-1').innerText = `ba${2/undefined}a`

const input =  document.querySelector('.input')
const result = document.getElementById('result-2')
const convertButton = document.querySelector('.button')

convertButton.addEventListener('click', (event) => {
  event.preventDefault()
  const inputValue  = input.value

  if (inputValue) {
    result.innerText = numberToBinary(+inputValue)
  }
})




