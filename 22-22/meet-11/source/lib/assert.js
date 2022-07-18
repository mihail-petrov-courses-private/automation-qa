function nottifyAssertProcessor(message, given) {

    throw {
        name    : "assertError",
        message : `${message}. Given input ${given} `
    }
}

function isTrue(input, message) {
    
    if(input != true) {
        nottifyAssertProcessor(message, input);
    }
}

function isFalse(input, message) {
    isTrue(!input, message);
}



function doesNotThrowException(callback, message) {

    try {
        callback();
    }
    catch(error) {
        nottifyAssertProcessor(message);
    }
}

function doesTrowException(callback, message) {

    try {

        callback();
        nottifyAssertProcessor(message);
    }
    catch(error) {

    }
}


function isEqual(input, expect, message) {

    if(input != expect) {
        nottifyAssertProcessor(message, input);
    }
}

function isNotEqual(input, expect, message) {
    
    if(input == expect) {
        nottifyAssertProcessor(message, input);
    }
}


module.exports = {
    isTrue, isFalse, doesNotThrowException, doesTrowException,
    isEqual, isNotEqual
}