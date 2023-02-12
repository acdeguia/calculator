let clear = document.querySelector("#clear");
let del = document.querySelector(".btn-del")
let equalsBtn = document.querySelector("#equals");
let previousDisplay = document.querySelector("#previous-display");
let currentDisplay = document.querySelector("#current-display");
const buttons = document.getElementById("buttons");
let numberBtn = document.querySelector(".btn");
let operatorBtn = document.querySelector(".btn-operator");

let shouldResetScreen = false;
let num1 = "";
let num2 = "";
let currentOperation = "";

clear.addEventListener("click", clearScreen);
equalsBtn.addEventListener("click", evaluate);
del.addEventListener('click', deleteNum)

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

function clearScreen() {
  previousDisplay.innerHTML = "0";
  currentDisplay.innerHTML = "";
}

function deleteNum() {
    currentDisplay.textContent = currentDisplay.textContent
    .toString()
    .slice(0, -1)
}

function operand(num) {
  currentDisplay.innerHTML += num;
}

function operation(operator) {
  num1 = currentDisplay.textContent;
  console.log(num1);
  currentOperation = operator;
  previousDisplay.textContent = num1 + ' ' + currentOperation;
  currentDisplay.innerHTML = "";
}

function evaluate() {
  console.log(currentOperation);
  num2 = currentDisplay.textContent;
  console.log(num2);

  previousDisplay.textContent = num1 + " " + currentOperation + " " + num2;
  currentDisplay.innerHTML = operate(currentOperation, num1, num2);
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
      return add(num1, num2);
    case "-":
      return substract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      if (num2 === 0) return null;
      else return divide(num1, num2);
    default:
      return null;
  }
}
