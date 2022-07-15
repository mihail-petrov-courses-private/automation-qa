function isTrue(input, message) {
    
    if(input != true) {
        throw {
            name: "assertError",
            message
        }
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
        throw {
            name: "assertError",
            message
        }     
    }
}

function doesTrowException(callback, message) {

    try {

        callback();

        throw {
            name: "assertError",
            message
        }     
    }
    catch(error) {

    }
}

module.exports = {
    isTrue, isFalse, doesNotThrowException, doesTrowException
}