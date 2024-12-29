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
    let result;

    //after "=" if user click next operation
    if (num1 === "" && num2 === "" && operator != "=") {
        num1 = displaySecound.textContent;
    }

    //1 + 2 -3 (without "=")
    if (num1 != "" && num2 != "" && operator != "=") {
        result = operate(num1, operatorLast, num2);
        [num1, num2] = [result, ""];
        displaySecound.textContent = result;
        whichNum = !whichNum;
    }

    if (operator === "=" && num2 != "") {
        result = operate(num1, operatorLast, num2);
        displaySecound.textContent = result;
        [num1, num2] = ["", ""];
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

function funcInput(e) {
    funcPressed = e.target.value;
    if (funcPressed === "percent") {
        //sprawdzic ktory num aktywny i podzielic przez 100
        if (whichNum) {
            num2 = num2 / 100;
            displaySecound.textContent = num2;
        } else {
            num1 = num1 / 100;
            displaySecound.textContent = num1;
        }
    }
}

function hoverOnNum(e) {
    e.target.classList.add("hoverNum");
}

function hoverOffNum(e) {
    e.target.classList.remove("hoverNum");
}

function hoverOnOperator(e) {
    e.target.classList.add("hoverOperator");
}

function hoverOffOperator(e) {
    e.target.classList.remove("hoverOperator");
}

function hoverOnFunc(e) {
    e.target.classList.add("hoverFunc");
}

function hoverOffFunc(e) {
    e.target.classList.remove("hoverFunc");
}

let num1 = "";
let num2 = "";
let operatorLast;
let operator;
let newNumInput = true;
let whichNum = 0;

const buttonsNumbers = document.querySelectorAll(".number");
const buttonOparators = document.querySelectorAll('.operator');
const buttonFunc = document.querySelectorAll('.func');
const displaySecound = document.querySelector('#displaySecond');
const displayFirst = document.querySelector('#displayFirst');
const debugField = document.querySelector('#debug');

buttonsNumbers.forEach(button => {
    button.addEventListener("click", numberInput);
    button.addEventListener("mouseover", hoverOnNum);
    button.addEventListener("mouseout", hoverOffNum);
});

buttonOparators.forEach(button => {
    button.addEventListener("click", operationInput);
    button.addEventListener("mouseenter", hoverOnOperator);
    button.addEventListener("mouseleave", hoverOffOperator);
});

buttonFunc.forEach(button => {
    button.addEventListener("click", funcInput);
    button.addEventListener("mouseenter", hoverOnFunc);
    button.addEventListener("mouseleave", hoverOffFunc);
});


const intervalId = window.setInterval(debug, 100);