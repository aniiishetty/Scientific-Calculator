const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let result = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.getAttribute("data-value");
    if (buttonValue === "=") {
      try {
        // Replace special constants
        currentInput = currentInput.replace(/π/g, Math.PI.toString());
        currentInput = currentInput.replace(/e/g, Math.E.toString());

        // Evaluate the expression
        result = eval(currentInput);
        display.value = result;
      } catch (error) {
        display.value = "Error";
      }
      currentInput = "";
    } else if (buttonValue === "AC") {
      display.value = "";
      currentInput = "";
    } else if (buttonValue === "DEL") {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } else if (buttonValue === "sin") {
      currentInput += "Math.sin(";
      display.value += "sin(";
    } else if (buttonValue === "cos") {
      currentInput += "Math.cos(";
      display.value += "cos(";
    } else if (buttonValue === "tan") {
      currentInput += "Math.tan(";
      display.value += "tan(";
    } else if (buttonValue === "log") {
      currentInput += "Math.log10(";
      display.value += "log(";
    } else if (buttonValue === "ln") {
      currentInput += "Math.log(";
      display.value += "ln(";
    } else if (buttonValue === "sqrt") {
      currentInput += "Math.sqrt(";
      display.value += "√(";
    } else if (buttonValue === "exp") {
      currentInput += "Math.exp(";
      display.value += "exp(";
    } else if (buttonValue === "(" || buttonValue === ")") {
      currentInput += buttonValue;
      display.value += buttonValue;
    } else if (buttonValue === "pi") {
      currentInput += "Math.PI";
      display.value += "π";
    } else if (buttonValue === "e") {
      currentInput += "Math.E";
      display.value += "e";
    } else {
      currentInput += buttonValue;
      display.value += buttonValue;
    }
  });
});
