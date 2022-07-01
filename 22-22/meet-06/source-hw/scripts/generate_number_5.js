function generateFifthNumber() {

    let categoryNumber  = +prompt("Коя категория продукти пазарувате?");
    let frequancy       = +prompt("Колко често?");

    globalUserData.foodCategory         = categoryNumber;
    globalUserData.frequencyCategory    = frequancy;

    return categoryNumber + frequancy;
}