let displayScreen = document.querySelector('#display-screen')
let currentDisplay = document.querySelector('.current-display')
let resultDisplay = document.querySelector('.result-display')



  let clearScreen = document.querySelector('#clear')
  clearScreen.addEventListener('click', () => {
  currentDisplay.innerHTML = '0'
  resultDisplay.innerHTML = ''
  })
  
  let btns = document.querySelectorAll('btn');

  for (i of btns) {
    i.addEventListener('click', function() {
      console.log(i);
    });
  }

  const buttons = document.getElementById('buttons');

  buttons.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
    currentDisplay.innerHTML = event.target.value;
  })

  let equal = document.getElementById('equal');







equal.addEventListener('click', () => {
  resultDisplay.innerHTML = result
})


function operate() {
  let num1 = Number(prompt("Enter first num: "));

  let operation = prompt("enter operation: ").toLowerCase();
  let num2 = Number(prompt("enter second num: "));

  if (operation === "+") {
    add(num1, num2);
  } else if (operation === "-") {
    subtract(num1, num2);
  } else if (operation === "*") {
    multiply(num1, num2);
  } else if (operation === "/") {
    divide(num1, num2);
  } else {
    alert("not valid operation");
  }
}

function add(num1, num2) {
  let totalSum = Number(num1) + Number(num2);
  result = totalSum
}

function subtract(minuend, subtrahend) {
  let difference = minuend - subtrahend;
  result = difference
}

function multiply(num1, num2) {
  let product = num1 * num2;
  result = product
}

function divide(divisor, dividend) {
  let quotient = divisor / dividend;
  result = quotient
}

operate()