const webdriver     = require('selenium-webdriver');

module.exports = class LoginPage {

    constructor(driver) {
        this.driverSession = driver;
    }

    login($username, $password, afterLoginFunction) {

        const promiseToGetWpLogin = this.driverSession.get(`http://localhost:1337/wordpress/wp-login.php`);

        promiseToGetWpLogin.then(() => {

            const domElement = this.driverSession.findElement(webdriver.By.id("user_login"));

            domElement.then(() => {

                domElement.sendKeys($username).then(() => {

                    const passwordDomElement = this.driverSession.findElement(webdriver.By.id("user_pass"));
                    passwordDomElement.then(() => {
                        passwordDomElement.sendKeys($password).then(() => {

                            const submitDomElement = this.driverSession.findElement(webdriver.By.id('wp-submit'));
                            submitDomElement.click().then(() => {
                                afterLoginFunction();
                            });
                        });
                    })
                })
            })
        });
    }
}
