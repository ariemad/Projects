//Solve example subtract(0.1 , 0.4) = -0.300000000000000000004

// Arithmetical

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function calculate(operator, a, b) {
  return operator(a, b);
}

// Display

function displayNum() {
  display.textContent = memDisplay;
}

function displayOperator(e) {
  display.textContent = e.target.textContent;
}

function overloadCheck() {
  if (memDisplay.length > 8) {
    firstNumber = 0;
    memOperator = "";
    memDisplay = "Overload";
    displayNum();
  }
}

firstNumber = 0;
secondNumber = "";
memOperator = "";
memDisplay = "";

const display = document.querySelector(".display-txt");

const btnsNum = document.querySelectorAll("[data-num]");

const btnClear = document.querySelector("#clear");

const btnsOperation = document.querySelectorAll("[data-operation]");

btnsNum.forEach((element) => {
  element.addEventListener("click", (e) => {
    secondNumber += e.target.textContent;
    memDisplay += e.target.textContent;
    overloadCheck();
    displayNum();
  });
});

btnsOperation.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (memOperator) {
      functionName = eval(memOperator);
      firstNumber = calculate(
        functionName,
        Number(firstNumber),
        Number(secondNumber)
      );
      
      switch (e.target.getAttribute("data-operation")) {
        case "equal":
          secondNumber = firstNumber;
          memOperator = "";
          memDisplay = String(firstNumber);
          break;
        default:
          secondNumber = "";
          memOperator = e.target.getAttribute("data-operation");
          memDisplay =
            String(firstNumber) + e.target.textContent;
      }
    } else {
      switch (e.target.getAttribute("data-operation")) {
        case "equal":
          break;
        default:
          firstNumber = secondNumber;
          secondNumber = "";
          memOperator = e.target.getAttribute("data-operation");
          memDisplay += e.target.textContent;
      }
    }
    displayNum();
    overloadCheck();
  });
});

btnClear.addEventListener("click", (e) => {
  firstNumber = 0;
  secondNumber = 0;
  memOperator = "";
  memDisplay = "";
  displayNum();
});
