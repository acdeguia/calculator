let clear = document.querySelector('#clear')
let previousDisplay = document.querySelector('#previous-display')
let currentDisplay = document.querySelector('#current-display')

let numberBtn = document.querySelector('.btn') 
let operatorBtn = document.querySelector('.btn-operator')

let currentOperation = ''
const buttons = document.getElementById("buttons");

clear.addEventListener('click', clearScreen)

buttons.addEventListener("click", (event) => {
    const isButton = event.target.className === "btn";
    if (!isButton) {
      return;
    }
    operand(event.target.textContent);
  });

  buttons.addEventListener("click", (event) => {
    const isButton = event.target.className === "btn-operator";
    if (!isButton) {
      return;
    }
    operation(event.target.textContent);
  });

function operation (operator) {
    let num1 = currentDisplay.textContent;
    currentOperation = operator
    previousDisplay.textContent = num1 + currentOperation
    currentDisplay.innerHTML = operator
}


function add(num1, num2) {
    return num1 + num2;
  }
  
  function substract(num1, num2) {
    return num1 - num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function divide(num1, num2) {
    return num1 / num2;
  }

  function operate(operator, num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    switch(operator) {
        case '+':
            return add(num1, num2)
        case '-':
            return add(num1, num2)
        case '*':
            return add(num1, num2)
        case '/':
            if(num2 === 0) return null
            else return divide(num1, num2)
        default:
            return null        
    }
  }

  function clearScreen() {
    previousDisplay.innerHTML = '0'
    currentDisplay.innerHTML = ''
  }

  function operand(num) {
    currentDisplay.innerHTML += num 
  }

