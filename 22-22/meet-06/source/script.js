while(applicationManager.isApplicationRunning) {

    let commandId = prompt(statusMessages.ENTER_COMMAND);

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


    // if(commandId == commands.EXIT) {

    //     alert(statusMessages.END_APP);
    //     isApplicationRunning = false;
    //     continue;
    // }

    // if(applicationManager.isSystemTurnOff) {

    //     let isCommandProcessable =  commandId == commands.TURNON 
    //                                 ||  
    //                                 commandId == commands.ON;

    //     if(isCommandProcessable) {

    //         applicationManager.isSystemTurnOn = true;
    //         alert(statusMessages.INIT_APP);
    //     }
    //     else {
    //         alert(statusMessages.TURNON_FAIL);
    //         continue;
    //     }
    // }

    // if(commandId == commands.FINISH) {
    //     alert(statusMessages.FINISH_END);    
    // }
    // else if(commandId == commands.STATUS) {
    //     alert(statusMessages.STATUS_END);    
    // }
    // else {
    //     alert(statusMessages.INCORECT_COMMAND);
    // }
}