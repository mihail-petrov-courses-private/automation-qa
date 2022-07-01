let firstNumber     = generateFirstNumber();
globalCardData.processOddPositionNumber(firstNumber);
globalCardData.acomulateCardNumberBarCode(firstNumber);
console.log(`първа цифра ${firstNumber}`);

let secondNumber    = (firstNumber == 0) ? 9 : generateSecondNumber();
globalCardData.processEvenPositionNumber(secondNumber);
globalCardData.acomulateCardNumberBarCode(secondNumber);
console.log(`втора цифра ${secondNumber}`);

let thirdNumber = generateThirdNumber();
globalCardData.processOddPositionNumber(thirdNumber);
globalCardData.acomulateCardNumberBarCode(thirdNumber);
console.log(`трета цифра ${thirdNumber}`);

let fourthNumber = generateFourthNumber();
globalCardData.processEvenPositionNumber(fourthNumber);
globalCardData.acomulateCardNumberBarCode(fourthNumber);
console.log(`четвърта цифра ${fourthNumber}`);

let fifthNumber = generateFifthNumber();
globalCardData.processOddPositionNumber(fifthNumber);
globalCardData.acomulateCardNumberBarCode(fifthNumber);
console.log(`пета цифра ${fifthNumber}`);

let sixthNumber = generateSixthNumber(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber);
globalCardData.processEvenPositionNumber(sixthNumber);
globalCardData.acomulateCardNumberBarCode(sixthNumber);
console.log(`шеста цифра ${sixthNumber}`);

let seventhNumber = generateSeventNumber(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber);
globalCardData.processOddPositionNumber(seventhNumber);
globalCardData.acomulateCardNumberBarCode(seventhNumber);
console.log(`седма цифра ${seventhNumber}`);

let eithNumber = generateEightNumber();
globalCardData.processEvenPositionNumber(eithNumber);
globalCardData.acomulateCardNumberBarCode(eithNumber);
console.log(`осма цифра ${eithNumber}`);

let ninthNumber = generateNingthNumber();
globalCardData.processEvenPositionNumber(ninthNumber);
globalCardData.acomulateCardNumberBarCode(ninthNumber);
console.log(`девета цифра ${ninthNumber}`);

console.log(`Бар кода на вашата карта е ${globalCardData.getCardBarCode()}`);
