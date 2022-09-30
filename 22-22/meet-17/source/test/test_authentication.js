// библиотеки с код
const assert        = require('assert');
const webdriver     = require('selenium-webdriver');
const chromeBrowser = require('selenium-webdriver/chrome');
const chromeDriver  = require('chromedriver');

// добавите функции за работа с тестовата среда
const LoginPage     = require('../pages/LoginPage');

// браузърна сесия
// const driverSession = chromeBrowser.Driver.createSession(options, service);

let driverSession = null;

describe.skip('Test Wordpress - authentication feature', function() {

    // Пример за употреба на Promise обекта в JS
    // it("Execute assert after specific time frame", async function() {

    //     const stringResult = await new LoginPage(driverSession).sleep();
    //     console.log(stringResult);
    //     assert.equal(1,2, "Expected result 1");
    // }).timeout(0);

    beforeEach(() => {

        const service = new chromeBrowser.ServiceBuilder(chromeDriver.path).build();
        const options = new chromeBrowser.Options();
        driverSession = chromeBrowser.Driver.createSession(options, service);
    });

    afterEach(() => {
        driverSession.quit();
    });


    it("Try to log in as Admin user - correctly", async function() {

        await new LoginPage(driverSession).login("wp_admin", "password");

        const element       = await driverSession.findElement(webdriver.By.xpath(`//*[@id="wpbody-content"]/div[3]/h1`));
        const elementText   = await element.getText();

        assert.equal(elementText, 'Dashboard', "Expected end page is Dashboard");
    }).timeout(0);

    it("Try to log in as Admin user - icorrect password", async function() {

        await new LoginPage(driverSession).login("wp_admin", "icorect");

        const element       = await driverSession.findElement(webdriver.By.id(`login_error`));
        const elementText   = await element.getText();

        const assertMessage = `Error: The password you entered for the username wp_admin is incorrect. Lost your password?`;
        assert.equal(elementText, assertMessage, "Expected error message for incorrect password");

    }).timeout(0);


    it("Try to log in as Admin user - icorrect username", async function() {

        const LOGIN_USERNAME = "incorect_user";
        const LOGIN_PASSWORD = "icorect";
        await new LoginPage(driverSession).login(LOGIN_USERNAME, LOGIN_PASSWORD);

        const element       = await driverSession.findElement(webdriver.By.id(`login_error`));
        const elementText   = await element.getText();

        const assertMessage = `Error: The username ${LOGIN_USERNAME} is not registered on this site. If you are unsure of your username, try your email address instead.`;
        assert.equal(elementText, assertMessage, "Expected error message for incorrect password");
    }).timeout(0);

});
