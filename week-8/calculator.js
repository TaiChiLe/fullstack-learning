let inputEquation = document.querySelector('.input-equation');
let input = document.querySelector('.calculator-input');
let buttons = document.querySelectorAll('.calculator-btn');
let operatorButtons = document.querySelectorAll('.operator-btn');
let inputHistoryButton = document.querySelector('.input-history-button');
let inputHistory = document.querySelector('.input-history');
let inputHistoryList = document.querySelector('.input-history-list');
let onInputHistoryItemClick = function (event) {
    let target = event.target;
    let content = target.textContent;
    let splitString = content.split('=');

    let equation = splitString[0];
    let result = splitString[1];
    inputHistory.classList.remove('open');
    inputEquation.textContent = equation;
    input.value = result;
}
let calculateResult = function () {
    let inputValue = input.value;
    let result = '';

    try {
        result = eval(inputValue);
    } catch (e) {
        result = 'ERROR';
    }

    if (result === 'ERROR') {
        inputEquation.innerHTML = '';
    } else {
        inputEquation.innerHTML = inputValue;

        let newDiv = document.createElement('div');
        newDiv.textContent = `${inputValue}=${result}`;
        newDiv.addEventListener('click', onInputHistoryItemClick);


        inputHistoryList.appendChild(newDiv);
    }

    input.value = result;

};
let clearInput = function () {
    input.value = '';
};
let deleteLastInput = function () {
    input.value = input.value.slice(0, -1);
};
let onCalculatorButtonClick = function (event) {
    let action = event.currentTarget.textContent;
    processCalculatorWithAction(action);
};
let disableOperatorButtons = function (disabled) {
    for (let i = 0; i < operatorButtons.length; i++) {
        operatorButtons[i].disabled = disabled;
    }
}
let processCalculatorWithAction = function (action) {

    if (action === '=') {
        calculateResult();
    } else if (action === 'AC') {
        clearInput();
    } else if (action === 'DEL') {
        deleteLastInput();
    } else {
        let inputValue = input.value;
        let newValue = inputValue + action;

        input.value = newValue;
    }
    if (isLastCharacterAnOperator(input.value)) {
        disableOperatorButtons(true);
    } else {
        disableOperatorButtons(false);
    }
}
for (let i = 0; i < buttons.length; i++) {
    let currentButton = buttons[i];

    currentButton.addEventListener('click', onCalculatorButtonClick);
}

let onDocumentKeyUp = function (event) {
    let key = event.key;
    let acceptedAction = [];

    for (let i = 0; i < buttons.length; i++) {
        let currentButton = buttons[i];
        let buttonText = currentButton.textContent;
        acceptedAction.push(buttonText);
    }

    let action;

    if (key === 'Enter') {
        action = '=';
    } else if (key === 'Backspace') {
        action = 'DEL';
    } else if (key === 'Escape') {
        action = 'AC'
    } else {
        action = key;
    }

    if (acceptedAction.includes(action)) {
        processCalculatorWithAction(action);
    }

}

document.addEventListener('keyup', onDocumentKeyUp)

let isLastCharacterAnOperator = function (str) {
    let operators = ['+', '-', '*', '/', '.'];
    let lastCharacter = str.substr(-1);
    return operators.includes(lastCharacter);
}

let toggleButton = function (event) {
    if (inputHistory.classList.contains('open')) {
        inputHistory.classList.remove('open');
    } else {
        inputHistory.classList.add('open');
    }

}

inputHistoryButton.addEventListener('click', toggleButton);

