// библиотеки с код
const assert        = require('assert');
const webdriver     = require('selenium-webdriver');
const chromeBrowser = require('selenium-webdriver/chrome');
const chromeDriver  = require('chromedriver');

// добавите функции за работа с тестовата среда
const LoginPage     = require('../pages/LoginPage');
const PostPage     = require('../pages/PostPage');
let driverSession   = null;


function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


describe('Test Wordpress - post related features', () => {

    beforeEach(() => {

        const service = new chromeBrowser.ServiceBuilder(chromeDriver.path).build();
        const options = new chromeBrowser.Options();
        driverSession = chromeBrowser.Driver.createSession(options, service);
        
        // преминаване към цял екран
        driverSession.manage().window().maximize();
    });

    afterEach(() => {
        // driverSession.quit();
    });


    it('Create new post entry', async () => {

        const NEW_POST_TITLE    = uuid();
        const NEW_POST_CONTENT  = uuid();

        await new LoginPage(driverSession).loginAsAdmin();

        const postNavigationLink = await driverSession.findElement(webdriver.By.xpath(PostPage.MENU_ID));
        await postNavigationLink.click();

        const postPageHeader     = await driverSession.findElement(webdriver.By.xpath(PostPage.PAGE_HEADER));
        const postPageHeaderText = await postPageHeader.getText();
        assert.equal(postPageHeaderText, "Posts", "Expect page title to be POSTS");

        const addNewPostLink     = await driverSession.findElement(webdriver.By.xpath(`//*[@id="wpbody-content"]/div[3]/a`));
        await addNewPostLink.click();

        const newPostTitle  = await driverSession.findElement(webdriver.By.xpath(`//*[@id="editor"]/div/div[1]/div[1]/div[2]/div[2]/div[3]/div[2]/div/div[2]/div[1]/h1`));
        await newPostTitle.sendKeys(NEW_POST_TITLE);

        const createNewPostContentBlock  = await driverSession.findElement(webdriver.By.xpath(`//*[@id="editor"]/div/div[1]/div[1]/div[2]/div[2]/div[3]/div[2]/div/div[2]/div[2]/div/div/div/button`));
        await createNewPostContentBlock.click();

        const contentBlockParagraf  = await driverSession.findElement(webdriver.By.xpath(`/html/body/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div/div[2]/div/div/div/div/div[2]/div[2]/div/div[1]/div[1]`));
        await contentBlockParagraf.click();
        
        const newPostContent  = await driverSession.findElement(webdriver.By.xpath(`/html/body/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div/div[1]/div[1]/div[2]/div[2]/div[3]/div[3]/div/div[2]/div[2]/p`));
        await newPostContent.sendKeys(NEW_POST_CONTENT);

        const publicButton = await driverSession.findElement(webdriver.By.xpath(`//*[@id="editor"]/div/div[1]/div[1]/div[1]/div/div[3]/button[2]`));
        await publicButton.click();

        const confirmPublicButton = await driverSession.findElement(webdriver.By.xpath(`//*[@id="editor"]/div/div[1]/div[1]/div[2]/div[4]/div[2]/div/div/div[1]/div[1]/button`));
        await confirmPublicButton.click();

        // await driverSession.wait(webdriver.until.elementLocated(webdriver.By.xpath(`//*[@id="editor"]/div/div[1]/div[1]/div[2]/div[4]/div[2]/div/div/div[1]/div[1]/button`)));

        setTimeout(async () => {

            const viewPostLink  = await driverSession.findElement(webdriver.By.xpath(`//*[@id="editor"]/div/div[1]/div[1]/div[2]/div[4]/div[2]/div/div/div[2]/div/div[1]/a`));
            await viewPostLink.click();
            
            const createdPostTitle     = await driverSession.findElement(webdriver.By.xpath(`//*[@id="wp--skip-link--target"]/div[1]/h1`));
            const createdPostTitleText = await createdPostTitle.getText();
    
            assert.equal(createdPostTitleText, NEW_POST_TITLE, `Post title expected to be ${NEW_POST_TITLE}`);
        }, 2000);

    }).timeout(0);

});
