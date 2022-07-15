const chalk = require('chalk');



// набор от семантично свързани тестове
function suite(name, callback) {

    console.log(`# ${chalk.blue(name)}`);
    console.group();
    callback();
    console.groupEnd();
}

// фактически тест
function test(name, callback) {

    try {
        callback();
        console.log(`✔️  ${chalk.green(name)}`);
    }
    catch(error) {

        const messageIcon   = (error.name == 'assertError') ? '>' : '$';

        console.log(`❌  ${chalk.red(name)}`);
        console.log(`${messageIcon} ${chalk.grey(error.message)}`);
    }
}


module.exports = {
    suite, test
};

// module.exports = {
//     suite(name, callback) {
//         callback();
//     },

//     test(name, callback) {
//         callback();
//     }
// };
