const fs            = require('fs');
const testRunner    = require('./lib/test-runner.js');
const customAssert  = require('./lib/assert.js');

testRunner.suite('check if customer folders and files are correct', function() {

    // Scenario 1 
    testRunner.test('check if all main folders are available', function() {
        
        const TEST_DIR_SRC      = `${__dirname}\\test_scenarios\\scenario-1`;
        const scenior1FileList  = fs.readdirSync(TEST_DIR_SRC);


        customAssert.isTrue(scenior1FileList.includes('main'    ), 'Main file is not available');
        customAssert.isTrue(scenior1FileList.includes('click1'   ), 'Click file is not available');
        customAssert.isTrue(scenior1FileList.includes('traffic' ), 'Traffic file is not available');
        customAssert.isTrue(scenior1FileList.includes('volume'  ), 'Volume file is not available');
        customAssert.isTrue(scenior1FileList.includes('capacity'), 'Capacity file is not available');
    });

    // Scenario 2
    testRunner.test('check if customer folder with id id45eres4774561w does exists', function() {

        const TEST_DIR_SRC      = `${__dirname}\\test_scenarios\\scenario-2\\id45eres4774561w`;

        customAssert.doesNotThrowException(function() {
            fs.readdirSync(TEST_DIR_SRC);
        }, 'The folder id45eres4774561A does not exists');
    });
});