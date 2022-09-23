passwordButtons = document.querySelectorAll(`[type="password"]`);

passwordWarning = document.querySelector(".password-warning");

passwordButtons.forEach((passwordButton) => {
  passwordButton.addEventListener("input", (e) => {
    if (passwordButtons[0].value != passwordButtons[1].value) {
      passwordButtons.forEach((element) => {
        element.classList.add("error");
      });
      passwordWarning.classList.remove("hidden");
    } else {
      passwordButtons.forEach((element) => {
        element.classList.remove("error");
      });
      passwordWarning.classList.add("hidden")
    }
  });
});
