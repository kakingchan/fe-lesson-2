var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://localhost:3000/index/index');

driver.wait(until.elementIsEnabled(driver.findElement(By.className('praise-button'))), 5000);
for (var i = 0; i < 10; i++) {
    driver.findElement(By.id('testThumb')).click();
}
driver.quit();