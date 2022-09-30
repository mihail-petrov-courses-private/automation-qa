const webdriver     = require('selenium-webdriver');

module.exports = class LoginPage {

    constructor(driver) {
        this.driverSession = driver;
    }

    sleep() {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // бавим се и вършим някаква работа
                resolve("Sample string");
            }, 10000);
        })
    }

    loginAsAdmin() {
        return this.login("wp_admin", "password");
    }

    login($username, $password) {

        return new Promise((resolve, reject) => {

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
                                    resolve();
                                });
                            });
                        })
                    })
                })
            });
        });
    }
}
