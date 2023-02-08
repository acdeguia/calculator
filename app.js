let displayScreen = document.querySelector('#display-screen')
let currentDisplay = document.querySelector('.current-display')
let resultDisplay = document.querySelector('.result-display')



  let clearScreen = document.querySelector('#clear')

  function clear(){
    clearScreen.addEventListener('click', () => {
      currentDisplay.innerHTML = '0'
      resultDisplay.innerHTML = ''
      })
  }
  
  
  let btns = document.querySelectorAll('btn');

  for (i of btns) {
    i.addEventListener('click', function() {
      console.log(i);
    });
  }

  const buttons = document.getElementById('buttons');

  let array = []
  buttons.addEventListener('click', (event) => {
    const isButton = event.target.className === 'btn';
    if (!isButton) {
      return;
    }
    currentDisplay.innerHTML = event.target.textContent;
    array.push(event.target.textContent);
    console.log(array)
    displayScreen.innerHTML = array
  })

  const buttonsOperator = document.getElementById('buttons');


  buttonsOperator.addEventListener('click', (event) => {
    const isButton = event.target.className === 'btn-operator';
    if (!isButton) {
      return;
    }
    currentDisplay.innerHTML = event.target.textContent;
    operator = event.target.textContent
  })

let equal = document.getElementById('equal');


equal.addEventListener('click', () => {
  operate()
})

function add(num1, num2) {
  return num1 + num2
}

function substract(num1, num2) {
  resultDisplay.innerHTML = num1 - num2
}

function multiply(num1, num2) {
  resultDisplay.innerHTML = num1 * num2
}

function divide(num1, num2) {
  resultDisplay.innerHTML = num1 / num2
}


function operate(operator, num1, num2) {
  num1 = Number(num1)

  num2 = Number(num2)


  switch (operator) {
    case '+':
      resultDisplay.innerHTML =  add(num1, num2)
    case '-':
      return  substract(num1, num2)
    case 'x':
      return multiply(num1, num2)
    case '/':
      if (num2 === 0) return null
      else return divide(num1, num2)
    default:
      return null
  }
 
}

function appendNumber(num) {
  if (currentDisplay.textContent === '0')
    clear()
  currentDisplay.textContent += num
}

clear()