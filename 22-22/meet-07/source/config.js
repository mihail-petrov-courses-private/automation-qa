const applicationManager = {
    isApplicationRunning    : true,
    isSystemTurnOn          : false,
    isSystemTurnOff         : true,
    activeHandId            : null,

    handAonX                : 1,
    handAonY                : 1,

    handBonX                : 1,
    handBonY                : 1,    

    handConX                : 1,
    handConY                : 1,

    activeHoleCoefficient   : null
}

const applicationData = {
    oxigenQuantity  : 168,
    gasQuantity     : 90
}

const commands = {
    EXIT    : "exit",
    TURNON  : "turnon",
    ON      : "on",
    LOAD    : "load",
    UNLOAD  : "unload",
    MOVE_X  : "movex",
    MOVE_Y  : "movey",
    IDENTIFY : "identify",
    STATUS  : "status",
    FINISH  : "finish"
};

const statusMessages = {
    ENTER_COMMAND    : "Въведи команда ?",
    END_APP          : "Програмата приключи",
    INIT_APP         : "Системата стартира успешно",
    TURNON_FAIL      : "Грешна команда - трябва да включите системата",
    FINISH_END       : "Запълвам дупката",
    STATUS_END       : "Всичко е ок",
    INCORECT_COMMAND : "Грешна команда"
};
