const tocalcElement = document.querySelector(".tocalc");
const buttons = document.querySelectorAll(".btn");
const operators = ["+", "-", "*", "/"];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.getAttribute("data-type");
    const value = button.textContent;
    let currentText = tocalcElement.textContent.trim();

    switch (type) {
      case "number":
        tocalcElement.textContent += value;
        break;

      case "operator":
        if (operators.includes(value)) {
          if (currentText && !operators.includes(currentText.slice(-1))) {
            tocalcElement.textContent += ` ${value} `;
          }
        }
        break;

      case "decimal":
        if (!tocalcElement.textContent.includes(".")) {
          tocalcElement.textContent += value;
        }
        break;

      case "clear":
        tocalcElement.textContent = "";
        break;

      case "delete":
        tocalcElement.textContent = tocalcElement.textContent.slice(0, -1);
        break;
    }
  });
});
