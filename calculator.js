let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.getAttribute("data-value");

    if (value === "C") {
      currentInput = "";
      display.innerText = "0";
    }

    else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
      display.innerText = currentInput || "0";
    }

    else if (value === "=") {
      try {
        currentInput = currentInput.replace("%", "/100");
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
      } catch {
        display.innerText = "Error";
        currentInput = "";
      }
    }

    else {
      currentInput += value;
      display.innerText = currentInput;
    }
  });
});