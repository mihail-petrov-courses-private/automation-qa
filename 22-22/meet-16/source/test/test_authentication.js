// библиотеки с код
const assert        = require('assert');
const webdriver     = require('selenium-webdriver');
const chromeBrowser = require('selenium-webdriver/chrome');
const chromeDriver  = require('chromedriver');

// добавите функции за работа с тестовата среда
const { describe }  = require('mocha');
const LoginPage = require('../pages/LoginPage');

// настройки на Chrome браузъра
const service = new chromeBrowser.ServiceBuilder(chromeDriver.path).build();
const options = new chromeBrowser.Options();

// браузърна сесия
const driverSession = chromeBrowser.Driver.createSession(options, service);


describe('Test Wordpress - authentication feature', function() {

    it("Try to log in as Admin user - correctly", function(done) {

        new LoginPage(driverSession).login("wp_admin", "password", async () => {
            
            const element       = await driverSession.findElement(webdriver.By.xpath(`//*[@id="wpbody-content"]/div[3]/h1`));
            const elementText   = await element.getText();
            console.log(elementText);

            // -    //*[@id="wpbody-content"]/div[3]/h1
            // -    /html/body/div[1]/div[2]/div[2]/div[1]/div[3]/h1

        });
    });

    it("Try to log in as Subscriver user - correctly", function() {

    });

    it("Try to log in with incorect credentials - username", function() {

    });

    it("Try to log in with incorect credentials - password", function() {

    });
});
