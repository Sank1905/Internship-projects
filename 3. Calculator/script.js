let currentInput = '0';
let previousInput = '0';
let operation = null;

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '0';
    operation = null;
    updateDisplay();
}

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function setOperation(operator) {
    if (operation !== null) {
        calculateResult();
    }
    operation = operator;
    previousInput = currentInput;
    currentInput = '0';
    updateDisplay();
}

function setDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function calculateResult() {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = '0';
    operation = null;
    updateDisplay();
}

// Initial display update
updateDisplay();
