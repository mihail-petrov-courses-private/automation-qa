function generateFourthNumber() {
    
    let cursomerHeight = prompt("Височина в см ? ");
    let customerWeight = prompt("Тегло в килограми ?")

    // Системата изчислява индекса на телесната маса по формулата (тегло) разделено на (височина на квадрат). Резултатът от операцията трябва да е задължително дробно число.
    let reduceHight = cursomerHeight / 100;
    let massIndex   = customerWeight / (reduceHight * reduceHight );

    // под 16	        под норма	генерираме цифра - 1
    if(massIndex < 16) {
        globalUserData.massIndexCategory = 1;
        return 1;
    }
    // от 16 до 16,99	нормално	генерираме цифра - 2
    if(massIndex >= 16 && massIndex <= 16.99 ) {
        globalUserData.massIndexCategory = 2;
        return 2;
    } 
    // от 17 до 18,49	нормално - атлетично	генерираме цифра - 3
    if(massIndex >= 17 && massIndex <= 18.49 ) {
        globalUserData.massIndexCategory = 3;
        return 3;
    }
    // от 18,5 до 24,99	нормално	генерираме цифра - 4
    if(massIndex >= 18.5 && massIndex <= 24.99 ) {
        globalUserData.massIndexCategory = 4;
        return 4;
    } 
    // от 25 до 29,99	пред наднормено	генерираме цифра - 5
    if(massIndex >= 25 && massIndex <= 29.99 ) {
        globalUserData.massIndexCategory = 5;
        return 5;
    } 
    // от 30 до 34,99	наднормено - дебел	генерираме цифра - 6
    if(massIndex >= 30 && massIndex <= 34.99 ) {
        globalUserData.massIndexCategory = 6;
        return 6;
    } 
    // от 35 до 39,99	наднормено - затлъстял	генерираме цифра - 7
    if(massIndex >= 35 && massIndex <= 39.99 ) {
        globalUserData.massIndexCategory = 7;
        return 7;
    } 
    // от 40 и нагоре	наднормено - мега затлъстял	генерираме цифра - 8
    if(massIndex >= 40) {
        globalUserData.massIndexCategory = 8;
        return 8;
    } 

}