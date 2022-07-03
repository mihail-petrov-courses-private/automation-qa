// const calculatorDisplayHtmlDiv = document.getElementById("calculator-display");
const calculatorDisplayHtmlDiv = document.querySelector("#calculator-display");
console.log(calculatorDisplayHtmlDiv);


// const numberCollectionHtmlButton = document.getElementsByClassName("number");
// console.log(numberCollectionHtmlButton);

const Calculator = {

    memory      : null,
    operand     : '',
    operation   : null,


    getMemory() {
        return Calculator.memory;
    },

    getOperand() {
        return Calculator.operand;
    },

    addOperand(element) {
        Calculator.operand = Calculator.operand + element;
    },

    processOperation() {

        if(Calculator.operation == '+') {
            return Calculator.memory + (+Calculator.operand);
        }

        if(Calculator.operation == '-') {
            return Calculator.memory - (+Calculator.operand);
        }

        if(Calculator.operation == '/') {
            return Calculator.memory / (+Calculator.operand);
        }            

        if(Calculator.operation == '*') {
            return Calculator.memory * (+Calculator.operand);
        }   
    },

    addOperation(operation) {

        Calculator.memory       = (Calculator.operation) ?  Calculator.processOperation() : +Calculator.operand;
        Calculator.operation    = operation;
        Calculator.operand      = '';
    }
};

// Всички числа
// ==================
const numberQueryCollectionHtmlButton = document.querySelectorAll(".number");

let currentElementIndex = 0;

while( currentElementIndex < numberQueryCollectionHtmlButton.length) {

    const buttonElement = numberQueryCollectionHtmlButton[currentElementIndex];
    buttonElement.addEventListener('click', function(e) {

        Calculator.addOperand(buttonElement.innerText);
        calculatorDisplayHtmlDiv.innerHTML = Calculator.getOperand();
    });

    // увеличавам индекса
    currentElementIndex = currentElementIndex + 1;
}

// Всички операции
// ==================
const operationQueryCollectionHtmlButton = document.querySelectorAll(".operation");

let index = 0;

while(index < operationQueryCollectionHtmlButton.length) {

    const buttonElement = operationQueryCollectionHtmlButton[index];
    buttonElement.addEventListener('click', function() {

        Calculator.addOperation(buttonElement.innerText);
        calculatorDisplayHtmlDiv.innerHTML = Calculator.getMemory();
    });

    index = index + 1;
}