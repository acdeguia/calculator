function add(num1, num2) {
  let totalSum = Number(num1) + Number(num2);
    console.log(totalSum);
}

function subtract(minuend, subtrahend) {
  let difference = minuend - subtrahend;
   console.log(difference);
}

function multiply(num1, num2) {
  let product = num1 * num2
  console.log(product)
}

function divide(divisor, dividend) {
  let quotient = divisor / dividend;
 console.log(quotient);
}

function operate() {
  let num1 = Number(prompt("Enter first num: "));

  let operation = prompt("enter operation: ").toLowerCase();
  let num2 = Number(prompt("enter second num: "));
  
  if (operation === "+") {
   add(num1, num2)

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

// operate();
