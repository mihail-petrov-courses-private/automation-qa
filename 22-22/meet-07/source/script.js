// взема бутона за стартиране на приложението
const commandTurnOnButton       = document.getElementById("command-turnon");
const textCommandHtmlInput      = document.getElementById("text-command");
const processCommandHtmlButton  = document.getElementById("process-command");

const state = {
    isTurnOn : false
};


// когато - бутона бъда натиснат - искам да направя нещо
// чрез -- слушател за събития
function bootstrapSystem(eventObject) {

    console.log(eventObject);

    state.isTurnOn = !state.isTurnOn;

    if(state.isTurnOn) {
        operationTurnOn();
    }
    else {
        operationTurnOff();
    }

    commandTurnOnButton.innerText       = state.isTurnOn ? "Turn off" : "Turn on";
    textCommandHtmlInput.disabled       = !textCommandHtmlInput.disabled;
    processCommandHtmlButton.disabled   = !processCommandHtmlButton.disabled;
}


commandTurnOnButton.addEventListener('click', bootstrapSystem);


processCommandHtmlButton.addEventListener('click', function(eventObject) {

    eventObject.preventDefault();

    let commandId = textCommandHtmlInput.value;

    if(commandId == commands.TURNON) {
        operationTurnOn();
    }

    if(commandId == commands.LOAD) {
        operationLoad();
    }

    if(commandId == commands.UNLOAD) {
        operationUnload();
    }

    if(commandId == commands.MOVE_X) {
        operationMoveX();
    }

    if(commandId == commands.MOVE_Y) {
        operationMoveY();
    }

    if(commandId == commands.IDENTIFY) {
        operationIdentify();
    }

    textCommandHtmlInput.value = '';
});



