function operationTurnOn() {
    applicationManager.isSystemTurnOn = true;
}

function operationTurnOff() {
    applicationManager.isSystemTurnOn = false;
}

function operationLoad() {

    const activeHandHtmlSpan = document.getElementById("active-hand");
    const activeHandXHtmlSpan = document.getElementById("active-hand-x");
    const activeHandYHtmlSpan = document.getElementById("active-hand-y");

    let robotHandId         =   prompt("Въвдете идентификатор на роботска ръка");
    let isHandIdProcessable =   robotHandId == 'A' || 
                                robotHandId == 'B' || 
                                robotHandId == 'C';
    let isHandIdUnoperatable = !isHandIdProcessable;

    if(isHandIdUnoperatable) {
        terminal("Не разполагате с подобно устройство");
    }

    if(isHandIdProcessable) {
        applicationManager.activeHandId = robotHandId;

        panelRender(
            applicationManager.activeHandId, 
            applicationManager[`hand${robotHandId}onX`], 
            applicationManager[`hand${robotHandId}onY`]
        );
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
        let stepCoefficient = getStepCoefficient(direction, "right");
        moveOperation(applicationManager.activeHandId, "X", stepCoefficient);
    }
}

function operationMoveY() {

    let direction               =   prompt("Въведете посока");
    let isDirectionProcessable  =   direction == 'up' || 
                                    direction == 'down';
    
    if(isDirectionProcessable) {

        let stepCoefficient = getStepCoefficient(direction, "up"); 
        moveOperation(applicationManager.activeHandId, "Y", stepCoefficient);
    }
}

function moveOperation(handId, direction, stepCoefficient) {

    let dynamicKey = `hand${handId}on${direction}`;
    applicationManager[dynamicKey] = stepCoefficient;

    panelRender(
        applicationManager.activeHandId, 
        applicationManager[`hand${applicationManager.activeHandId}onX`], 
        applicationManager[`hand${applicationManager.activeHandId}onY`]
    );

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