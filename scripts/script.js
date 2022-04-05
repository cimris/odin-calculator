//My Scripts
//Variables for Each Key by ID
const display = document.getElementById("display");
const backspace = document.getElementById("backspace");
const clear = document.getElementById("clear");
const percent = document.getElementById("percent");
const divide = document.getElementById("divide");
const times = document.getElementById("times");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const decimal = document.getElementById("decimal");
const equals = document.getElementById("equals");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
//Key Press Listener
window.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "Backspace":
      console.log(event.key);
      break;
    case "Delete":
      console.log(event.key);
      break;
    case "(":
      console.log(event.key);
      break;
    case ")":
      console.log(event.key);
      break;
    case "%":
      console.log(event.key);
      break;
    case "/":
      console.log(event.key);
      break;
    case "*":
      console.log(event.key);
      break;
    case "-":
      console.log(event.key);
      break;
    case "+":
      console.log(event.key);
      break;
    case "=":
      console.log(event.key);
      break;
    case ".":
      console.log(event.key);
      break;
    case "0":
      console.log(event.key);
      break;
    case "1":
      console.log(event.key);
      break;
    case "2":
      console.log(event.key);
      break;
    case "3":
      console.log(event.key);
      break;
    case "4":
      console.log(event.key);
      break;
    case "5":
      console.log(event.key);
      break;
    case "6":
      console.log(event.key);
      break;
    case "7":
      console.log(event.key);
      break;
    case "8":
      console.log(event.key);
      break;
    case "9":
      console.log(event.key);
      break;
    default:
      console.log("You've met with a terrible fate...haven't you?");
      break;
  }
});
//Functions for Add, Subtract, Multiply, and Divide
function calcAdd(a, b) {
  return a + b;
}

function calcSubtract(a, b) {
  return a - b;
}

function calcMultiply(a, b) {
  return a - b;
}

function calcDivide(a, b) {
  return a / b;
}
//Operation Function
//Operator is Taken as a String
function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return calcAdd(a, b);
    case "-":
      return calcSubtract(a, b);
    case "*":
      return calcMultiply(a, b);
    case "/":
      if (b === 0) return "Error";
      else return calcDivide(a, b);
    default:
      return null;
  }
}
