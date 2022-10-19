function errorMsg() {
  const errorMsg = document.createElement("div");
  errorMsg.classList.add("error-msg", "hidden");

  const errorMsg1 = document.createElement("div");
  errorMsg1.classList.add("error-msg1");
  errorMsg1.textContent = "Some text";

  const errorMsg2 = document.createElement("div");
  errorMsg2.classList.add("error-msg2");

  const errorMsg3 = document.createElement("div");
  errorMsg3.classList.add("error-msg3");

  errorMsg.append(errorMsg1, errorMsg2, errorMsg3);

  return errorMsg;
}

const formFieldsEL = document.querySelectorAll(".form-field");
formFieldsEL.forEach((element) => {
  element.append(errorMsg());
});

// First Name and Last Name

function nameValidation(id) {
  const nameInput = document.getElementById(id);

  nameInput.addEventListener("input", (event) => {
    const error = event.path[1].querySelector(".error-msg");
    const errorMsg = error.querySelector(".error-msg1");

    if (nameInput.validity.valid) {
      error.classList.add("hidden");
      errorMsg.textContent = "";
    } else {
      error.classList.remove("hidden");
      errorMsg.textContent = "Name must have more than 3 letters";
    }
  });
}

nameValidation("name");
nameValidation("last-name");

// Email

const emailInput = document.getElementById("email");

emailInput.addEventListener("input", (event) => {
  const error = event.path[1].querySelector(".error-msg");
  const errorMsg = error.querySelector(".error-msg1");

  if (emailInput.validity.valid) {
    error.classList.add("hidden");
    errorMsg.textContent = "";
  } else {
    if (emailInput.validity.typeMismatch) {
      error.classList.remove("hidden");
      errorMsg.textContent = "Please insert a correct e-mail address";
    }
  }
});

// Phone Number

const phoneInput = document.getElementById("phone-number");

phoneInput.addEventListener("input", (event) => {
  const error = event.path[1].querySelector(".error-msg");
  const errorMsg = error.querySelector(".error-msg1");

  if (phoneInput.validity.valid) {
    error.classList.add("hidden");
    errorMsg.textContent = "";
  } else {
    if (phoneInput.validity.patternMismatch) {
      error.classList.remove("hidden");
      errorMsg.textContent = "Please insert a correct phone number";
    }
  }
});

// Password and confirm password

function passwordValidation() {
  const passwordInput = document.getElementById("password");
  const passwordConfirmInput = document.getElementById("password-confirm");

  const error = passwordInput.nextElementSibling
  const errorMsg = error.querySelector(".error-msg1");

  const error2 = passwordConfirmInput.nextElementSibling
  const errorMsg2 = error2.querySelector(".error-msg1");

  [passwordInput, passwordConfirmInput].forEach((element) => {
    element.addEventListener("input", (event) => {
      if (passwordConfirmInput.value == passwordInput.value) {
        errorMsg.textContent = "";
        errorMsg2.textContent = "";
        error.classList.add("hidden");
        error2.classList.add("hidden");
      } else {
        errorMsg.textContent = "Password must be equal";
        errorMsg2.textContent = "Password must be equal";
        error.classList.remove("hidden");
        error2.classList.remove("hidden");
      }
    });
  });
}

passwordValidation();
