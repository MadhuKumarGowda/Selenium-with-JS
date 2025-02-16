const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

init = async () => {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    // navigate().go will take to defined url webpage
    await driver.navigate().to("https://www.google.com/ncr");
    // back method will take to previous page of browser
    await driver.navigate().back();
    // forward method will take to previous of back method
    await driver.navigate().forward();
    // page will be refreshed
    await driver.navigate().refresh();
    // we can set delay for browser
    await driver.sleep(2000);
  } catch (error) {
  } finally {
    await driver.quit();
  }
};

init();
