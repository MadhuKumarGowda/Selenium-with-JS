const { Builder, By } = require("selenium-webdriver");

init = async () => {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    // navigate().go will take to defined url webpage
    await driver.navigate().to("https://www.youtube.com/");

    // Below code is to perform drag and drop
    // Need to provide css / id details to get actual element
    const srcElement = await driver.findElement(By.id(""));
    const tarElement = await driver.findElement(By.id(""));
    await driver
      .actions({ async: true })
      .dragAndDrop(srcElement, tarElement)
      .perform();

    // Below code snippet is for click event
    const element = await driver.findElement(By.id(""));
    // contextClick is to perform right click of the button
    await driver.actions().contextClick(element).perform();
    // doubleClick is to perform click of the button
    await driver.actions().doubleClick(element).perform();

    // Note click can be performed in 2 ways
    // 1 is single Click is t perform single click of the button
    await driver.actions().click(element).perform();
    // other way is to perform click event is
    await driver.findElement(By.id("").click());

    // Note enter text into textbox can be performed in 2 ways
    // 1. to enter some text into textbox then
    const txtElement = await driver.findElement(By.id(""));
    await driver.actions().sendKeys(txtElement, "text here").perform();

    // other way is
    await driver.findElement(By.id("").sendKeys(""));

    await driver.sleep(5000);
  } catch (error) {
  } finally {
    await driver.quit();
  }
};

init();
