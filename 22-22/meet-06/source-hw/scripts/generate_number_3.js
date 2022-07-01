function generateThirdNumber() {
    
    if(globalUserData.isAdoult) {
       return 0; 
    }

    let motherBirthYear = +prompt("Дата на раждане на мама ?");
    let fatherBirthYear = +prompt("Дата на раждане на тати ?");
    

    let lastDigitMotherBirthYear = motherBirthYear % 10;
    let lastDigitFatherBirthYear = fatherBirthYear % 10;
    let isProcessable            = lastDigitMotherBirthYear == lastDigitFatherBirthYear;

    let secondToLastDifigMotherBirthYear = Math.floor((motherBirthYear % 100) / 10);

    return (isProcessable)
    ? secondToLastDifigMotherBirthYear
    : lastDigitFatherBirthYear;
}