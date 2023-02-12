let displayScreen = document.querySelector("#display-screen");
let previousDisplay = document.querySelector("#previous-display");
let currentDisplay = document.querySelector("#current-display");
let clearScreen = document.querySelector("#clear");
let equal = document.getElementById("equal");

let btns = document.querySelectorAll("btn");
const buttons = document.getElementById("buttons");
const buttonsOperator = document.getElementById("buttons");

let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;

const lastOperationScreen = document.getElementById("previous-display");
const currentOperationScreen = document.getElementById("current-display");

clearScreen.addEventListener("click", clear);

buttons.addEventListener("click", (event) => {
  const isButton = event.target.className === "btn";
  if (!isButton) {
    return;
  }

  appendNumber(event.target.textContent);
});

buttonsOperator.addEventListener("click", (event) => {
  const isButton = event.target.className === "btn-operator";
  if (!isButton) {
    return;
  }
  setOperation(event.target.textContent);
});

equal.addEventListener("click", evaluate);

function clear() {
  previousDisplay.innerHTML = "";
  currentDisplay.innerHTML = "";
  currentOperationScreen.textContent = "0";
  lastOperationScreen.textContent = "";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
}

function appendNumber(num) {
  if (previousDisplay.textContent === "0") clear();
  currentDisplay.textContent += num;
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate();
  firstOperand = currentDisplay.textContent;
  currentOperation = operator;
  lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOperation === null || shouldResetScreen) return;
  if (currentOperation === "/" && currentDisplay.textContent === "0") {
    alert("You can't divide by 0!");
    return;
  }
  secondOperand = currentDisplay.textContent;
  currentDisplay.textContent = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  );
  lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  currentOperation = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
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
  num1 = Number(num1);

  num2 = Number(num2);

  switch (operator) {
    case "+":
      currentDisplay.innerHTML = add(num1, num2);
    case "-":
      currentDisplay.innerHTML = substract(num1, num2);
    case "x":
      currentDisplay.innerHTML = multiply(num1, num2);
    case "/":
      if (num2 === 0) currentDisplay.innerHTML = null;
      else currentDisplay.innerHTML = divide(num1, num2);
    default:
      currentDisplay.innerHTML = null;
  }
}
