let num1 = "";
let num2 = "";
let operator = "";
const input = document.querySelector(".operador");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", populateInput);
});

function populateInput(e) {
  if (e.target.classList.contains("symbol")) {
    input.innerHTML = "";
    operator = e.target.innerHTML;
  }
  if (operator === "") {
    if (e.target.classList.contains("number")) {
      num1 = input.innerHTML += e.target.innerHTML;
      console.log(`num1: ${num1}`);
    }
  } else {
    if (e.target.classList.contains("number")) {
      num2 = input.innerHTML += e.target.innerHTML;
      console.log(`num2: ${num2}`);
    }
  }
  if (e.target.classList.contains("equals")) {
    input.innerHTML = calculate(operator, num1, num2);
  }
}

function clear() {
  input.innerHTML = "";
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
function divise(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function calculate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return sub(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divise(a, b);
  }
}
