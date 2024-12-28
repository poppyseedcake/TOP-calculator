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
    // console.log(typeof(e.target.value));
    if (newNumInput) {
        newNumInput = false;
        displaySecound.textContent = "";
    }

    displaySecound.textContent += e.target.value;

    num1 === "" ? num1 = displaySecound.textContent : num2 = displaySecound.textContent;
}

function operationInput(e) {
    newNumInput = true;
    operator = e.target.value;

    if (operator === "=" && num2 != "") {
        const result = operate(num1, operatorLast, num2);
        displaySecound.textContent = result;
    } else {
        operatorLast = operator;
    }
}

let num1 = "";
let num2 = "";
let operatorLast;
let operator;
let newNumInput = true;

const buttonsNumbers = document.querySelectorAll(".number");
const displaySecound = document.querySelector('#displaySecond');
const displayFirst = document.querySelector('#displayFirst');
const buttonOparators = document.querySelectorAll('.operator');
const debug = document.querySelector('#debug');

buttonsNumbers.forEach(button => {
    button.addEventListener("click", numberInput);
});

buttonOparators.forEach(button => {
    button.addEventListener("click", operationInput);
});

