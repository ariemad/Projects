//Solve example subtract(0.1 , 0.4) = -0.300000000000000000004

// Arithmetical

function round3Decimals(num) {
  return Math.round((num + Number.EPSILON) * 1000) / 1000;
}

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
  if (b == "0") {
    divideByZero();
    return "div0error";
  }
  return round3Decimals(a / b);
}

function calculate(operator, a, b) {
  return operator(a, b);
}

// Display

function displayNum() {
  display.textContent = memDisplay;
  overloadCheck()
}

function displayOperator(e) {
  display.textContent = e.target.textContent;
}

function overloadCheck() {
  if (memDisplay.length > 8) {
    memDisplay = "Overload";
    displayNum();
    setTimeout(() => {
      firstNumber = 0;
      secondNumber = "";
      memOperator = "";
      memDisplay = "";
      displayNum();
    }, 2000);
  }
}

function divideByZero() {
  memDisplay = "ERROR";
  displayNum();
  setTimeout(() => {
    memDisplay = "DIV 0";
    displayNum();
  }, 1000);
  setTimeout(() => {
    firstNumber = 0;
    secondNumber = "";
    memOperator = "";
    memDisplay = "";
    displayNum();
  }, 2000);
}

//Flag

function isLastNumber(memDisplay) {
  lastDigit = memDisplay[memDisplay.length - 1];
  digits = "0123456789".split("");
  if (lastDigit in digits) {
    return true;
  } else {
    return false;
  }
}

//Main

firstNumber = 0;
secondNumber = "";
memOperator = "";
memDisplay = "";

const display = document.querySelector(".display-txt");

const btnsNum = document.querySelectorAll("[data-num]");

const btnClear = document.querySelector("#clear");

const btnPercentage = document.querySelector("#percentage")

const btnsOperation = document.querySelectorAll("[data-operation]");

btnsNum.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (memOperator === "" && firstNumber) {
      firstNumber = 0;
      secondNumber = "";
      memDisplay = "";
    }
    secondNumber += e.target.textContent;
    memDisplay += e.target.textContent;
    displayNum();
  });
});

btnsOperation.forEach((element) => {
  element.addEventListener("click", (e) => {
    breakme: {
      if (memOperator && secondNumber !== "") {
        functionName = eval(memOperator);
        firstNumber = calculate(
          functionName,
          Number(firstNumber),
          Number(secondNumber)
        );
        if (firstNumber === "div0error") {
          break breakme;
        }
        switch (e.target.getAttribute("data-operation")) {
          case "equal":
            secondNumber = firstNumber;
            memOperator = "";
            memDisplay = String(firstNumber);
            break;
          default:
            secondNumber = "";
            memOperator = e.target.getAttribute("data-operation");
            memDisplay = String(firstNumber) + e.target.textContent;
        }
      } else if (memOperator && secondNumber === "") {
        switch (e.target.getAttribute("data-operation")) {
          case "equal":
            break;
          default:
            memOperator = e.target.getAttribute("data-operation");
            memDisplay = memDisplay.slice(0, -1);
            memDisplay += e.target.textContent;
        }
      } else {
        // !memOperator
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
    }
  });
});

btnClear.addEventListener("click", (e) => {
  firstNumber = 0;
  secondNumber = 0;
  memOperator = "";
  memDisplay = "";
  displayNum();
});

btnPercentage.addEventListener("click", e => {
  if (secondNumber !== "" && isLastNumber(memDisplay)) {
    if (memOperator) {
      memDisplay = memDisplay.slice(0,-secondNumber.length)
      secondNumber = secondNumber/100
      memDisplay += secondNumber
      displayNum()
    } else {
      secondNumber = secondNumber/100
      memDisplay = secondNumber
      displayNum()
    }
  }

})
