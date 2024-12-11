const { Builder, By, until } = require('selenium-webdriver');

(async function testCalculator() {
  // Set up the browser driver
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Load the calculator HTML file (replace with the actual file path)
    await driver.get('"C:\Selenium\calculator\calculator.html"');

    // Find the input fields and buttons
    let num1 = await driver.findElement(By.id('num1'));
    let num2 = await driver.findElement(By.id('num2'));
    let addButton = await driver.findElement(By.id('addButton'));
    let subtractButton = await driver.findElement(By.id('subtractButton'));
    let result = await driver.findElement(By.id('result'));

    // Test addition
    await num1.sendKeys('5');
    await num2.sendKeys('3');
    await addButton.click();
    await driver.wait(until.elementTextIs(result, '8'), 1000);
    console.log('Addition test passed.');

    // Test subtraction
    await num1.clear();
    await num1.sendKeys('10');
    await num2.clear();
    await num2.sendKeys('4');
    await subtractButton.click();
    await driver.wait(until.elementTextIs(result, '6'), 1000);
    console.log('Subtraction test passed.');
  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    // Quit the driver
    await driver.quit();
  }
})();
