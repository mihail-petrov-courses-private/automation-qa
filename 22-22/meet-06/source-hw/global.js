const globalCardData = {
    _maxNumberOddPosition : -1,
    _maxNumberEvenPosition : -1,
    _barCode : "",

    processOddPositionNumber(number) {

        if(number > globalCardData._maxNumberOddPosition) {
            globalCardData._maxNumberOddPosition = number;
        }
    },

    processEvenPositionNumber(number) {

        if(number > globalCardData._maxNumberEvenPosition) {
            globalCardData._maxNumberEvenPosition = number;
        }
    },    

    getMaxNumberOddPosition() {
        return globalCardData._maxNumberOddPosition;
    },

    getMaxNumberEvenPosition() {
        return globalCardData._maxNumberEvenPosition;
    },


    processCardNumberToSimbol(number) {

        if(number == 0) return "*";
        if(number == 1) return "!";
        if(number == 2) return "@";
        if(number == 3) return "#";
        if(number == 4) return "$";
        if(number == 5) return "%";
        if(number == 6) return "^";
        if(number == 7) return "&";
        if(number == 8) return "/";
        if(number == 9) return "+";        
    },

    acomulateCardNumberBarCode(number) {
        globalCardData._barCode = globalCardData._barCode + globalCardData.processCardNumberToSimbol(number);
    },

    getCardBarCode() {
        return globalCardData._barCode;
    }
};

const globalUserData = {
    isAdoult            : false,
    foodCategory        : -1,
    frequencyCategory   : -1,
    massIndexCategory   : -1,

    isUserAdoult() {
        return globalUserData.isAdoult == true;
    },

    isUserUnderaged() {
        return globalUserData.isAdoult == false;
    },    

    isBodyTypeNormal    : function() {
        return globalUserData.massIndexCategory == 2 ||
               globalUserData.massIndexCategory == 3 ||
               globalUserData.massIndexCategory == 4;
    },

    isBodyTypeOverweight() {
        return  globalUserData.massIndexCategory == 6 ||
                globalUserData.massIndexCategory == 7 ||
                globalUserData.massIndexCategory == 8;
    },

    isBodySubTypeAttletic() {
        return globalUserData.massIndexCategory == 3;
    },

    doesUserConsumeFrootsAndVegetables() {
        return globalUserData.foodCategory == 1;   
    },

    doesUserConsumeMeat() {
        return globalUserData.foodCategory == 2;   
    },

    doesUserConsumeAlcoholAndTabaco() {
        return globalUserData.foodCategory == 3;   
    },    

    doesUserConsumeMilk() {
        return globalUserData.foodCategory == 4;   
    },        

    doesUserConsumeSugar() {
        return globalUserData.foodCategory == 5;   
    },            

    isConsumeRearly() {
        return globalUserData.frequencyCategory == 1;
    },

    isConsumeSometimes() {
        return globalUserData.frequencyCategory == 2;
    },

    isConsumeOften() {
        return globalUserData.frequencyCategory == 3;
    }
}

// под норма	                - 1
// нормално	                    - 2
// нормално - атлетично	        - 3
// нормално	                    - 4
// пред наднормено	            - 5
// наднормено - дебел	        - 6
// наднормено - затлъстял	    - 7
// наднормено - мега затлъстял	- 8