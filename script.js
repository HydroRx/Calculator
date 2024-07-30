const tocalcElement = document.querySelector(".tocalc");
const theanswerElement = document.querySelector(".theanswer");
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
        const parts = currentText.split(/[\+\-\*\/]/);
        const currentSegment = parts[parts.length - 1];
        if (!currentSegment.includes(".")) {
          tocalcElement.textContent += value;
        }
        break;

      case "clear":
        tocalcElement.textContent = "";
        theanswerElement.textContent = "0";
        break;

      case "delete":
        tocalcElement.textContent = tocalcElement.textContent.slice(0, -1);
        break;

      case "equal":
        try {
          const result = new Function("return " + tocalcElement.textContent)();
          let formattedResult;

          if (result.toString().length > 10) {
            formattedResult = result.toExponential(2);
          } else {
            formattedResult = result.toFixed(2);
          }

          theanswerElement.textContent = formattedResult;
        } catch (error) {
          console.error("Error:", error);
          theanswerElement.textContent = "Error";
        }
        break;
    }
  });
});
