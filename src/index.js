// const { Result } = require("postcss");

function createBtn() {
  const array = [
    "%", "CE", "C", "rm",
    "1/x", "x2", "√x", "÷",
    7, 8, 9, "X",
    4, 5, 6, "−",
    1, 2, 3, "+",
    "+/-", 0, ",", "="];
  for (let i = 0; i < 24; i++) {
    const div = document.createElement("button");
    div.classList.add("btn-container");
    div.textContent = array[i];
    calculator.appendChild(div);
    div.addEventListener("click", () => executeBtn(i));
  }
}

function executeBtn(i) {
  switch (i) {
    case 3:
      display.textContent = display.textContent.substring(0, display.textContent.length - 1);
      break;

    case 7: // division
      display.textContent += "/";
      break;

    case 8: // number 7
      display.textContent += 7;
      break;

    case 9: // number 8
      display.textContent += 8;
      break;

    case 10: // number 9
      display.textContent += 9;
      break;

    case 11: // multiplication
      display.textContent += "X";
      break;

    case 12: // number 4
      display.textContent += 4;
      break;

    case 13: // number 5
      display.textContent += 5;
      break;

    case 14: // number 6
      display.textContent += 6;
      break;

    case 15: // rest
      display.textContent += "-";
      break;

    case 16: // number 1
      display.textContent += 1;
      break;

    case 17: // number 2
      display.textContent += 2;
      break;

    case 18: // number 3
      display.textContent += 3;
      break;

    case 19: // sum
      display.textContent += "+";
      break;

    case 21: // number 0
      display.textContent += 0;
      break;

    case 23: // equal
      display.textContent = equal();
      break;
  }
}

function takeSubstr(symbol) {
  const arrayNumbers = [];
  arrayNumbers[0] = display.textContent.substring(0, display.textContent.search(symbol));
  arrayNumbers[1] = display.textContent.substring(display.textContent.search(symbol) + 1);
  return arrayNumbers;
}

function equal() {
  const array = ["+", "-", "X", "/"];
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    // console.log(display.textContent.trim().split(array[i]));
    if (display.textContent.trim().split(array[i]).length == 2) {
      let number;
      switch (i) {
        case 0:
          number = Number(display.textContent.trim().split(array[i])[0]) + Number(display.textContent.trim().split(array[i])[1]);
          return number;

        case 1:
          number = Number(display.textContent.trim().split(array[i])[0]) - Number(display.textContent.trim().split(array[i])[1]);
          return number;

        case 2:
          number = Number(display.textContent.trim().split(array[i])[0]) * Number(display.textContent.trim().split(array[i])[1]);
          return number;

        case 3:
          number = Number(display.textContent.trim().split(array[i])[0]) / Number(display.textContent.trim().split(array[i])[1]);
          return number;
      }
    }
  }
}
const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
createBtn();
