function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

function operate(num1, operator, num2) {
    let result = 0;
    switch(operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
    }
    return result;
}

function numberInput(e){
    if (newNumInput) {
        newNumInput = false;
        displaySecound.textContent = "";
    }

    whichNum ? num2 += e.target.value : num1 += e.target.value;
    displaySecound.textContent += e.target.value;  
}

function operationInput(e) {
    whichNum = !whichNum;
    newNumInput = true;
    operator = e.target.value;

    if (operator === "=" && num2 != "") {
        const result = operate(num1, operatorLast, num2);
        displaySecound.textContent = result;
        [num1, num2] = "";
    } else {
        operatorLast = operator;
    }
}

function debug() {
    debugField.innerHTML = `num1: ${num1}<br>
                            num2: ${num2}<br>
                            operatorLast: ${operatorLast}<br>
                            operator: ${operator}<br>
                            newNumInput: ${newNumInput}<br>
                            whichNum: ${whichNum ? "num2" : "num1"}`;
}

let num1 = "";
let num2 = "";
let operatorLast;
let operator;
let newNumInput = true;
let whichNum = 0;

const buttonsNumbers = document.querySelectorAll(".number");
const displaySecound = document.querySelector('#displaySecond');
const displayFirst = document.querySelector('#displayFirst');
const buttonOparators = document.querySelectorAll('.operator');
const debugField = document.querySelector('#debug');

buttonsNumbers.forEach(button => {
    button.addEventListener("click", numberInput);
});

buttonOparators.forEach(button => {
    button.addEventListener("click", operationInput);
});

const intervalId = window.setInterval(debug, 100);