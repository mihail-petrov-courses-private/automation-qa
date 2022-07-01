function generateNingthNumber() {

    // A
    let maxOdd = globalCardData.getMaxNumberOddPosition();

    // B
    let maxEven = globalCardData.getMaxNumberEvenPosition();

    // Ако A > B - последното число трябва да е по-голямо от A с единица. 
    if(maxOdd > maxEven) {
        return (maxOdd + 1 == 9) ? 0 : maxOdd + 1;
    }

    // Ако A < B - последното число трябва да е по-малко от A с единица. 
    if(maxEven > maxOdd) {
        return (maxOdd - 1 == 0) ? 1 : maxOdd - 1;
    }

    // Ако A = B - последното число е 0
    return 0;
}