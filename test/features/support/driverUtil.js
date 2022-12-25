const { setDefaultTimeout } = require("@cucumber/cucumber");
const { Builder } = require("selenium-webdriver");
require("chromedriver")
setDefaultTimeout(30 * 1000);

var initDriver = (function () {
    let driver = new Builder()
        .forBrowser("chrome")
        .build();
    console.log("launched browser!!!");
    driver.manage().window().maximize();
    driver.manage().setTimeouts({
        implicit: 30000, pageLoad: 30000, script: 30000
    });
    console.log("Maximise!!!")
    return {
        'getDriver': function () {
            return driver;
        }
    };
})();

module.exports = initDriver;