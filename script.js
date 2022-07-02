let num1 = "";
let num2 = "";
let operator = "";
let result = "";

const del = document.querySelector(".delete");
const holder = document.querySelector(".holder");
const input = document.querySelector(".operador");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", populateInput);
});

function populateInput(e) {
  if (e.target.classList.contains("clear")) {
    clear();
  }
  if (e.target.classList.contains("symbol")) {
    if (input.innerHTML == "") {
      input.innerHTML = "error";
    } else {
      input.innerHTML = "";
      holder.innerHTML = num1;
      operator = e.target.innerHTML;
    }
  }
  if (operator === "") {
    if (e.target.classList.contains("number")) {
      num1 = input.innerHTML += e.target.innerHTML;
    }
  } else {
    if (e.target.classList.contains("number")) {
      num2 = input.innerHTML += e.target.innerHTML;
    }
  }
  if (e.target.classList.contains("equals")) {
    equals();
    holder.innerHTML = "";
  }
  if (e.target.classList.contains("delete")) {
    input.innerHTML = input.innerHTML.slice(0, -1);
    num1 = input.innerHTML;
  }
}

function equals() {
  result = calculate(operator, num1, num2);
  input.innerHTML = result;
  num1 = result;
}

function clear() {
  result = "";
  num1 = "";
  num2 = "";
  operator = "";
  holder.innerHTML = "";
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
  a = Number(a);
  b = Number(b);
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
