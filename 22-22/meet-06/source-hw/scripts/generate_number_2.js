function generateSecondNumber() {
    let gender = prompt("Какъв пол си?");
    let isMale   = gender == "мъж";
    let isFimale = gender == "жена";
    
    if(isMale   ) return 1;
    if(isFimale ) return 3;

    while(true) {
        let randomNumber = generateRandomNumber(1, 9);
        let isProcessable = randomNumber != 1 && randomNumber != 3;

        if(isProcessable) return randomNumber;
    }
}