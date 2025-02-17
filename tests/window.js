const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

init = async () => {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    // navigate().go will take to defined url webpage
    await driver.navigate().to("https://www.google.com/ncr");
    // Window methods to maximize the browser size
    await driver.manage().window().maximize();
    await driver.sleep(2000);
    // window method to minimize the browser size
    await driver.manage().window().minimize();
    // window method to window size
    // this method will be useful for checking responsive design of web page
    await driver.manage().window().setSize(900, 500);
    // get browser window dimension
    const { width, height } = await driver.manage().window().getSize();
    console.log(`${width} and ${height}`);
    await driver.sleep(20000);
  } catch (error) {
  } finally {
    await driver.quit();
  }
};

init();
