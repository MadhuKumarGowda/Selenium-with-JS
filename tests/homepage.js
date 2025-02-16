const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

init = async () => {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get("https://www.google.com/ncr");
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.wait(until.titleIs("webdriver - Google Search"), 10000);
  } catch (error) {
  } finally {
    await driver.quit();
  }
};

init();
