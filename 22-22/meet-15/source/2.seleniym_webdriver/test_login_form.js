// библиотеки с код
const webdriver     = require('selenium-webdriver');
const chromeBrowser = require('selenium-webdriver/chrome');
const chromeDriver  = require('chromedriver');

// настройки на Chrome браузъра
const service = new chromeBrowser.ServiceBuilder(chromeDriver.path).build();
const options = new chromeBrowser.Options();

// браузърна сесия
const driverSession = chromeBrowser.Driver.createSession(options, service);

// Нашия тест
// ***
driverSession.get(`http://localhost:1337/wordpress/wp-login.php`);

// откриване на INPUT - user_login
const domElementSelector    = webdriver.By.id("user_login");
const domElement            = driverSession.findElement(domElementSelector);
domElement.sendKeys('wp_','a', 'd', 'm', 'i', 'n');

// откриване на INPUT - user_pass
const passwordDomElement = driverSession.findElement(webdriver.By.id("user_pass"));
passwordDomElement.sendKeys("password");

const submitDomElement = driverSession.findElement(webdriver.By.id('wp-submit'));
submitDomElement.click();


// Navigation 
// Selection / Find
// Executors