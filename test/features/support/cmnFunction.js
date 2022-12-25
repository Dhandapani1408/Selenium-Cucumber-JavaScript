const driver = require("../support/driverUtil").getDriver();
const { setDefaultTimeout } = require("@cucumber/cucumber");
const { By, until, Key } = require("selenium-webdriver");
const Default_Time_Out = 30000;

setDefaultTimeout(30 * 1000);

var getElement = function (elementId) {
    // switch (elementId) {
    //     case elementId.startsWith("id="):
    //         var ele = elementId.replace("id=", "");
    //          driver.wait(until.elementLocated(By.id(ele)), Default_Time_Out);
    //         return  driver.findElement(By.id(ele));

    //     case elementId.startsWith("class="):
    //         var ele = elementId.replace("class=", "");
    //         driver.wait(until.elementLocated(By.className(ele)), Default_Time_Out);
    //         return driver.findElement(By.className(ele));

    //     case elementId.startsWith("xpath="):
    //         var ele = elementId.replace("xpath=", "");
    //          driver.wait(until.elementLocated(By.xpath(ele)), Default_Time_Out);
    //         return  driver.findElement(By.xpath(ele));

    //     case elementId.startsWith("link="):
    //         var ele = elementId.replace("link=", "");
    //         driver.wait(until.elementLocated(By.linkText(ele)), Default_Time_Out);
    //         return driver.findElement(By.linkText(ele));

    //     case elementId.startsWith("name="):
    //         var ele = elementId.replace("name=", "");
    //         driver.wait(until.elementLocated(By.name(ele)), Default_Time_Out);
    //         return driver.findElement(By.name(ele));

    //     case elementId.startsWith("css="):
    //         var ele = elementId.replace("css=", "");
    //         driver.wait(until.elementLocated(By.css(ele)), Default_Time_Out);
    //         return driver.findElement(By.css(ele));

    //     case elementId.startsWith("//"):
    //         var ele = elementId.replace("//", "");
    //          driver.wait(until.elementLocated(By.xpath(ele)), Default_Time_Out);
    //         return  driver.findElement(By.xpath(ele));

    //     default:
    //         console.log("Please give valid loacator!! Locaator value should starts with xpath= | id= | css= | etc...")
    // }


    if (elementId.startsWith("id=")) {
        var ele = elementId.replace("id=", "");
        driver.wait(until.elementLocated(By.id(ele)), Default_Time_Out);
        // driver.wait(until.stalenessOf(By.id(ele)), Default_Time_Out);
        return driver.findElement(By.id(ele));
    }

    if (elementId.startsWith("class=")) {
        var ele = elementId.replace("class=", "");
        driver.wait(until.elementLocated(By.className(ele)), Default_Time_Out);
        driver.wait(until.stalenessOf(By.className(ele)), Default_Time_Out);
        return driver.findElement(By.className(ele));
    }

    if (elementId.startsWith("xpath=")) {
        var ele = elementId.replace("xpath=", "")
        driver.wait(until.elementLocated(By.xpath(ele)), Default_Time_Out);
        // driver.wait(until.stalenessOf(By.xpath(ele)), Default_Time_Out);
        return driver.findElement(By.xpath(ele));
    }


    if (elementId.startsWith("link=")) {
        var ele = elementId.replace("link=", "");
        driver.wait(until.elementLocated(By.linkText(ele)), Default_Time_Out);
        return driver.findElement(By.linkText(ele));
    }

    if (elementId.startsWith("name=")) {
        var ele = elementId.replace("name=", "");
        driver.wait(until.elementLocated(By.name(ele)), Default_Time_Out);
        return driver.findElement(By.name(ele));
    }

    if (elementId.startsWith("css=")) {
        var ele = elementId.replace("css=", "");
        driver.wait(until.elementLocated(By.css(ele)), Default_Time_Out);
        // driver.wait(until.stalenessOf(By.css(ele)), Default_Time_Out);
        return driver.findElement(By.css(ele));
    }

    if (elementId.startsWith("//")) {
        var ele = elementId.replace("//", "");
        driver.wait(until.elementLocated(By.xpath(ele)), Default_Time_Out);
        // driver.wait(until.stalenessOf(By.xpath(ele)), Default_Time_Out);
        return driver.findElement(By.xpath(ele));
    }
}

var getElements = function (elementId) {
    switch (elementId) {
        case elementId.startsWith("id="):
            var ele = elementId.replace("id=", "");
            driver.wait(until.elementLocated(By.id(ele)), Default_Time_Out);
            return driver.findElements(By.id(ele));

        case elementId.startsWith("class="):
            var ele = elementId.replace("class=", "");
            driver.wait(until.elementLocated(By.className(ele)), Default_Time_Out);
            return driver.findElements(By.className(ele));

        case elementId.startsWith("xpath="):
            var ele = elementId.replace("xpath=", "");
            driver.wait(until.elementLocated(By.xpath(ele)), Default_Time_Out);
            return driver.findElements(By.xpath(ele));

        case elementId.startsWith("link="):
            var ele = elementId.replace("link=", "");
            driver.wait(until.elementLocated(By.linkText(ele)), Default_Time_Out);
            return driver.findElements(By.linkText(ele));

        case elementId.startsWith("name="):
            var ele = elementId.replace("name=", "");
            driver.wait(until.elementLocated(By.name(ele)), Default_Time_Out);
            return driver.findElements(By.name(ele));

        case elementId.startsWith("css="):
            var ele = elementId.replace("css=", "");
            driver.wait(until.elementLocated(By.css(ele)), Default_Time_Out);
            return driver.findElements(By.css(ele));

        case elementId.startsWith("//"):
            var ele = elementId.replace("//", "");
            driver.wait(until.elementLocated(By.xpath(ele)), Default_Time_Out);
            return driver.findElements(By.xpath(ele));

        default:
            console.log("Please give valid loacator!! Locaator value should starts with xpath= | id= | css= | etc...")
    }
}

var clickElement = function (elementLocatorValue) {
    var ele = getElement(elementLocatorValue)
    ele.click();
}

var sendValue = function (elementLocatorValue, value) {
    var ele = getElement(elementLocatorValue)
    ele.sendKeys(value);
}

var sendValueNoClear = function (elementLocatorValue, value) {
    var ele = getElement(elementLocatorValue);
    ele.sendKeys(value);
}

var sendValueWithTab = function (elementLocatorValue, value) {
    var ele = getElement(elementLocatorValue);
    ele.sendKeys(value, Key.TAB);
}

var clickAndSendValue = function (elementLocatorValue, value) {
    var ele = getElement(elementLocatorValue);
    ele.click();
    ele.sendKeys(value);
}

var doubleClickAndSendValue = function (elementLocatorValue, value) {
    var ele = getElement(elementLocatorValue);
    driver.actions().doubleClick(ele).perform();
    ele.sendKeys(value);
}

var getTextOfElement = function (elementLocatorValue) {
    var ele = getElement(elementLocatorValue)
    return ele.getText();
}

var getAttributeValue = function (elementLocatorValue, attributeName) {
    var ele = getElement(elementLocatorValue);
    return ele.getAttribute(attributeName);
}


module.exports = {
    'getElement': getElement,
    'getElements': getElements,
    'clickElement': clickElement,
    'sendValue': sendValue,
    'sendValueNoClear': sendValueNoClear,
    'sendValueWithTab': sendValueWithTab,
    'clickAndSendValue': clickAndSendValue,
    'doubleClickAndSendValue': doubleClickAndSendValue,
    'getTextOfElement': getTextOfElement,
    'getAttributeValue': getAttributeValue
}