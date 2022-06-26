function operationTurnOn() {
    applicationManager.isSystemTurnOn = true;
}

function operationLoad() {

    let robotHandId         =   prompt("Въвдете идентификатор на роботска ръка");
    let isHandIdProcessable =   robotHandId == 'A' || 
                                robotHandId == 'B' || 
                                robotHandId == 'C';
    let isHandIdUnoperatable = !isHandIdProcessable;

    if(isHandIdUnoperatable) {
        alert("Не разполагате с подобно устройство");
    }

    if(isHandIdProcessable) {
        applicationManager.activeHandId = robotHandId;
    }
}

function operationUnload() {
    applicationManager.activeHandId = null;
}

function operationMoveX() {

    let direction               =   prompt("Въведете посока");
    let isDirectionProcessable  =   direction == 'left' || 
                                    direction == 'right';
    
    if(isDirectionProcessable) {
        // let moveStep = prompt("Въведете стойност на преместване");

        // // взимам посоката
        // let stepCoefficient = (direction == 'left') 
        //                       ? moveStep 
        //                       : (-moveStep);
        let stepCoefficient = getStepCoefficient(direction, "right");


        // взимам активната ръка 
        moveOperation(applicationManager.activeHandId, "X", stepCoefficient);

        // if(applicationManager.activeHandId == 'A') {
        //     applicationManager.handAonX = stepCoefficient;
        // }

        // if(applicationManager.activeHandId == 'B') {
        //     applicationManager.handBonX = stepCoefficient;
        // }

        // if(applicationManager.activeHandId == 'C') {
        //     applicationManager.handConX = stepCoefficient;
        // }
    }
}

function operationMoveY() {

    let direction               =   prompt("Въведете посока");
    let isDirectionProcessable  =   direction == 'left' || 
                                    direction == 'right';
    
    if(isDirectionProcessable) {
        // let moveStep = prompt("Въведете стойност на преместване");

        // // взимам посоката
        // let stepCoefficient = (direction == 'up') 
        //                       ? moveStep 
        //                       : (-moveStep);
        let stepCoefficient = getStepCoefficient(direction, "up");


        // взимам активната ръка 
        moveOperation(applicationManager.activeHandId, "Y", stepCoefficient);
        // if(applicationManager.activeHandId == 'A') {
        //     applicationManager.handAonY = stepCoefficient;
        // }

        // if(applicationManager.activeHandId == 'B') {
        //     applicationManager.handBonY = stepCoefficient;
        // }

        // if(applicationManager.activeHandId == 'C') {
        //     applicationManager.handConY = stepCoefficient;
        // }
    }
}

function moveOperation(handId, direction, stepCoefficient) {

    let dynamicKey = `hand${handId}on${direction}`;
    applicationManager[dynamicKey] = stepCoefficient;
}

function getStepCoefficient(direction, positiveDirection) {

    let moveStep = prompt("Въведете стойност на преместване");

    // взимам посоката
    let stepCoefficient = (direction == positiveDirection) 
                          ? moveStep 
                          : (-moveStep);

    return stepCoefficient;
}

function operationIdentify() {
    applicationManager.activeHoleCoefficient = getRandomNumber(1, 5);
}