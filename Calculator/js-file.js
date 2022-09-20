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
  memDisplay = memDisplay.replace(/[\n\r]+|[\s]{2,}/g, '').trim()
  if (memDisplay.length <= 8) {
    display.textContent = memDisplay;
  } else if (memDisplay.length > 8) {
    display.textContent = ".." + memDisplay.slice(-9,-1);
  }
  overloadCheck();
}

// ERROR

function displayOperator(e) {
  display.textContent = e.target.textContent;
}

function overloadCheck() {
  if (String(secondNumber).length > 8) {
    display.textContent = "Overload"
    setTimeout(() => {
      firstNumber = 0;
      secondNumber = "";
      memOperator = "";
      memDisplay = "";
      display.textContent = memDisplay;
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

function squareRootNegative() {
  memDisplay = "ERROR";
  displayNum();
  setTimeout(() => {
    memDisplay = "SQR NEG";
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
  memDisplayArray = memDisplay.split("");
  lastDigit = memDisplayArray[memDisplayArray.length - 1];
  digits = "0123456789".split("");
  if (lastDigit in digits) {
    return true;
  } else {
    return false;
  }
}

function isDot(memDisplay) {
  memDisplayArray = memDisplay.split("");
  if (memDisplayArray.indexOf(".") >= 0) {
    return true;
  }
  return false;
}

//Button Functions

function pressBtnsNum(e) {
  if (memOperator === "" && firstNumber) {
    firstNumber = 0;
    secondNumber = "";
    memDisplay = "";
  }
  secondNumber += e.target.textContent;
  memDisplay += e.target.textContent;
  displayNum();
}

function pressBtnsOperation(e) {
  {
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
  }
}

function pressBtnsClear(e) {
  firstNumber = 0;
  secondNumber = 0;
  memOperator = "";
  memDisplay = "";
  displayNum();
}

function pressBtnsPercentage(e) {
  if (secondNumber !== "" && isLastNumber(memDisplay)) {
    if (memOperator) {
      memDisplay = memDisplay.slice(0, -secondNumber.length);
      secondNumber = String(secondNumber / 100);
      memDisplay += secondNumber;
      displayNum();
    } else {
      secondNumber = String(secondNumber / 100);
      memDisplay = secondNumber;
      displayNum();
    }
  }
}

function pressBtnsSquareRoot(e) {
  if (secondNumber !== "" && isLastNumber(memDisplay)) {
    if (secondNumber < 0) {
      squareRootNegative();
    } else if (memOperator != "") {
      memDisplay = memDisplay.slice(0, -secondNumber.length);
      secondNumber = String(round3Decimals(secondNumber ** (1 / 2)));
      memDisplay += secondNumber;
      displayNum();
    } else {
      secondNumber = String(round3Decimals(secondNumber ** (1 / 2)));
      memDisplay = secondNumber;
      displayNum();
    }
  }
}

function pressBtnsNegative(e) {
  if (secondNumber != "") {
    memDisplay = memDisplay.slice(0, -secondNumber.length);
    secondNumber = String(-secondNumber);
    memDisplay += secondNumber;
    displayNum();
  }
}

function pressBtnsDot(e) {
  secondNumber = String(secondNumber);
  if (secondNumber != "" && !isDot(secondNumber)) {
    secondNumber += ".";
    memDisplay += ".";
    displayNum();
  }
}

function pressBtnCe(e) {
  secondNumber = String(secondNumber);
  if (secondNumber != "") {
    secondNumber = secondNumber.slice(0, -1);
    memDisplay = memDisplay.slice(0, -1);
    displayNum();
  }
}
/////////////////////////////////////////////////////////////////////////////////////
//Main
/////////////////////////////////////////////////////////////////////////////////////

firstNumber = 0;
secondNumber = "";
memOperator = "";
memDisplay = "";

const display = document.querySelector(".display-txt");

const btnsNum = document.querySelectorAll("[data-num]");

const btnClear = document.querySelector("#clear");

const btnPercentage = document.querySelector("#percentage");

const btnSquareRoot = document.querySelector("#square-root");

const btnNegative = document.querySelector("#negative");

const btnDot = document.querySelector("#dot");

const btnCE = document.querySelector("#ce");

const btnsOperation = document.querySelectorAll("[data-operation]");

//EVENTS

btnsNum.forEach((element) => {
  element.addEventListener("click", pressBtnsNum);
});

btnsOperation.forEach((element) => {
  element.addEventListener("click", pressBtnsOperation);
});

btnClear.addEventListener("click", pressBtnsClear);

btnPercentage.addEventListener("click", pressBtnsPercentage);

btnSquareRoot.addEventListener("click", pressBtnsSquareRoot);

btnNegative.addEventListener("click", pressBtnsNegative);

btnDot.addEventListener("click", pressBtnsDot);

btnCE.addEventListener("click", pressBtnCe);

keyCode2Function = {
  Digit1: pressBtnsNum,
};

numPad2Key = {
  Numpad0: "Digit0",
  Numpad1: "Digit1",
  Numpad2: "Digit2",
  Numpad3: "Digit3",
  Numpad4: "Digit4",
  Numpad5: "Digit5", //See Double click
  Numpad6: "Digit6",
  Numpad7: "Digit7",
  Numpad8: "Digit8",
  Numpad9: "Digit9",
  NumpadDecimal: "Period",
};

window.addEventListener("keydown", (e) => {
  numKey = e.code;
  if (numKey in numPad2Key) {
    numKey = numPad2Key[numKey];
  }
  element = document.querySelector(`[data-key=${numKey}]`);
  if (element) {
    element.click();
  }
});

keyDouble = {};
keyDouble.ShiftRight = false

onkeydown = onkeyup = function (e) {
  keyDouble[e.code] = e.type == "keydown";
  if (keyDouble.ShiftRight == true && keyDouble.Digit5 == true) {
    btnPercentage.click();
  } else if (
    keyDouble.ShiftRight == false &&
    (keyDouble.Digit5 || keyDouble.Numpad5)
  ) {
    element = document.querySelector(['[data-num="5"]']);
    element.click();
  }
};
