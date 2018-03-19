const {Builder, By, Key, until, WebDriver} = require('selenium-webdriver');
const firefox = require("selenium-webdriver/firefox");
var fs = require("fs");

// set firefox profile
const options = new firefox.Options();


options.setProfile("/Users/Jose/AppData/Roaming/Mozilla/Firefox/Profiles/6l6vz5sv.Automation");

driver = new Builder().forBrowser("firefox");
driver.setFirefoxOptions(options);
driver = driver.build();

(async function example() {
  try {
    driver.get('about:support');
    driver.sleep(4000);

    
    await driver.get('http://www.facebook.com');
    await driver.sleep(2000);
    await driver.findElement(By.name('q')).sendKeys('Jose Medina', Key.RETURN);
    await driver.getTitle().then(function(title) {
      console.log("Yo page title is: " + title);
    });
    await driver.sleep(10 * 1000);
  } finally {
    await driver.quit();
  }
})();