function generateRandomNumber(from, to) {
    return Math.floor(Math.random() * (to - from) + from);
}


function isNumberSingleDigit(number) {
    return number >= 0 && number <= 9;
}

function isNumberTwoDigits(number) {
    return number >= 10 && number <= 99;
}

function isEven(number) {
    return number % 2 == 0;
}

function isOdd(number) {
    // return number % 2 != 0;
    return !isEven(number);
}