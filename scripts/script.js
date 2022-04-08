//My Scripts
//Variables for Each Key by ID
const display = document.getElementById("display"); //not set yet
const backspace = document.getElementById("backspace"); //not set yet
const clear = document.getElementById("clear"); //not set yet
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
//Set Button Values
zero.value = 0;
one.value = 1;
two.value = 2;
three.value = 3;
four.value = 4;
five.value = 5;
six.value = 6;
seven.value = 7;
eight.value = 8;
nine.value = 9;
decimal.value = ".";
equals.value = "=";
plus.value = "+";
minus.value = "-";
times.value = "*";
divide.value = "/";
percent.value = "%";
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
      break; //these brackets may not be required
    case "%":
      console.log(percent.value);
      break;
    case "/":
      console.log(divide.value);
      break;
    case "*":
      console.log(times.value);
      break;
    case "-":
      console.log(minus.value);
      break;
    case "+":
      console.log(plus.value);
      break;
    case "=":
      console.log(equals.value);
      break;
    case ".":
      console.log(decimal.value);
      break;
    case "0":
      console.log(zero.value);
      break;
    case "1":
      console.log(one.value);
      break;
    case "2":
      console.log(two.value);
      break;
    case "3":
      console.log(three.value);
      break;
    case "4":
      console.log(four.value);
      break;
    case "5":
      console.log(five.value);
      break;
    case "6":
      console.log(six.value);
      break;
    case "7":
      console.log(seven.value);
      break;
    case "8":
      console.log(eight.value);
      break;
    case "9":
      console.log(nine.value);
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

function calcPercent(a) {
  return a / 100;
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
    case "%":
      return calcPercent(a);
    default:
      return null;
  }
}
