function generateEightNumber() {
    
    let isOdd = globalUserData.isUserAdoult() && 
                globalUserData.isBodyTypeOverweight() &&
                globalUserData.doesUserConsumeSugar() &&
                globalUserData.isConsumeOften();

    let isEven = globalUserData.isUserUnderaged() &&
                 globalUserData.isBodySubTypeAttletic() &&
                 globalUserData.isConsumeRearly() &&
                 globalUserData.doesUserConsumeFrootsAndVegetables();

    if(isOdd) {

        while(true) {
            let result = generateRandomNumber(0, 9);
            if(isOdd(result)) return result;
        }
    }

    if(isEven) {

        while(true) {
            let result = generateRandomNumber(0, 9);
            if(isEven(result)) return result;
        }
    }

    return 0;
}