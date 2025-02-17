const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

init = async () => {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    // navigate().go will take to defined url webpage
    await driver.navigate().to("https://www.youtube.com/");
    // below code is to find q tag with id endpoint and scroll to that tag position
    await driver.executeScript(
      `document.querySelector("a[id='endpoint']").scrollIntoView()`
    );

    await driver.sleep(5000);
  } catch (error) {
  } finally {
    await driver.quit(); 
};

init();
