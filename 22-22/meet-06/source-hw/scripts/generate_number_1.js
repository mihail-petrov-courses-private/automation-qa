function generateFirstNumber() {

    const customerYear  = +(prompt("Година на раждане"));
    let isCardNumberOdd     = customerYear < 1965; 
    let isCardNumberEven    = customerYear > 1965;
    let isCardNumberSpecial = customerYear == 1965;

    let processedNumber = processCustomerAge(customerYear);
    let cardNumber      = isNumberTwoDigits(processedNumber) 
                          ? Math.floor(processedNumber / 10)
                          : processedNumber;

    if(isCardNumberOdd) {
        return isOdd(cardNumber) ? cardNumber : cardNumber + 1;
    }

    if(isCardNumberEven) {
        return isEven(cardNumber) ? cardNumber : cardNumber + 1;
    }

    if(isCardNumberSpecial) {
        return 0;
    }
}

function processCustomerAge(customerYear) {

    let currentYear         = +(new Date().getFullYear());
    let customerAge         = currentYear - (+customerYear);
    globalUserData.isAdoult = customerAge >= 18;

    let randomNumber = generateRandomNumber(1, 7);

    return customerAge / randomNumber;
}