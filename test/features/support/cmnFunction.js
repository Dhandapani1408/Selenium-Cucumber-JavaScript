const driver = require("../support/driverUtil").getDriver();
const { setDefaultTimeout } = require("@cucumber/cucumber");
const { By, until, Key } = require("selenium-webdriver");
const Default_Time_Out = 30000;

setDefaultTimeout(30 * 1000);

var getElement = async function (elementId) {
    // switch (elementId) {
    //     case elementId.startsWith("id="):
    //         var ele = elementId.replace("id=", "");
    //          await driver.wait(until.elementLocated(By.id(ele)), Default_Time_Out);
    //         return  await driver.findElement(By.id(ele));

    //     case elementId.startsWith("class="):
    //         var ele = elementId.replace("class=", "");
    //         await driver.wait(until.elementLocated(By.className(ele)), Default_Time_Out);
    //         return await driver.findElement(By.className(ele));

    //     case elementId.startsWith("xpath="):
    //         var ele = elementId.replace("xpath=", "");
    //          await driver.wait(until.elementLocated(By.xpath(ele)), Default_Time_Out);
    //         return  await driver.findElement(By.xpath(ele));

    //     case elementId.startsWith("link="):
    //         var ele = elementId.replace("link=", "");
    //         await driver.wait(until.elementLocated(By.linkText(ele)), Default_Time_Out);
    //         return await driver.findElement(By.linkText(ele));

    //     case elementId.startsWith("name="):
    //         var ele = elementId.replace("name=", "");
    //         await driver.wait(until.elementLocated(By.name(ele)), Default_Time_Out);
    //         return await driver.findElement(By.name(ele));

    //     case elementId.startsWith("css="):
    //         var ele = elementId.replace("css=", "");
    //         await driver.wait(until.elementLocated(By.css(ele)), Default_Time_Out);
    //         return await driver.findElement(By.css(ele));

    //     case elementId.startsWith("//"):
    //         var ele = elementId.replace("//", "");
    //          await driver.wait(until.elementLocated(By.xpath(ele)), Default_Time_Out);
    //         return  await driver.findElement(By.xpath(ele));

    //     default:
    //         console.log("Please give valid loacator!! Locaator value should starts with xpath= | id= | css= | etc...")
    // }


    if (elementId.startsWith("id=")) {
        var ele = await elementId.replace("id=", "");
        await driver.wait(until.elementLocated(By.id(ele)), Default_Time_Out);
        // await driver.wait(until.stalenessOf(By.id(ele)), Default_Time_Out);
        return await driver.findElement(By.id(ele));
    }

    if (elementId.startsWith("class=")) {
        var ele = await elementId.replace("class=", "");
        await driver.wait(until.elementLocated(By.className(ele)), Default_Time_Out);
        await driver.wait(until.stalenessOf(By.className(ele)), Default_Time_Out);
        return await driver.findElement(By.className(ele));
    }

    if (elementId.startsWith("xpath=")) {
        var ele = await elementId.replace("xpath=", "")
        await driver.wait(until.elementLocated(By.xpath(ele)), Default_Time_Out);
        // await driver.wait(until.stalenessOf(By.xpath(ele)), Default_Time_Out);
        return await driver.findElement(By.xpath(ele));
    }


    if (elementId.startsWith("link=")) {
        var ele = await elementId.replace("link=", "");
        await driver.wait(until.elementLocated(By.linkText(ele)), Default_Time_Out);
        return await driver.findElement(By.linkText(ele));
    }

    if (elementId.startsWith("name=")) {
        var ele = await elementId.replace("name=", "");
        await driver.wait(until.elementLocated(By.name(ele)), Default_Time_Out);
        return await driver.findElement(By.name(ele));
    }

    if (elementId.startsWith("css=")) {
        var ele = await elementId.replace("css=", "");
        await driver.wait(until.elementLocated(By.css(ele)), Default_Time_Out);
        // await driver.wait(until.stalenessOf(By.css(ele)), Default_Time_Out);
        return await driver.findElement(By.css(ele));
    }

    if (elementId.startsWith("//")) {
        var ele = await elementId.replace("//", "");
        await driver.wait(until.elementLocated(By.xpath(ele)), Default_Time_Out);
        // await driver.wait(until.stalenessOf(By.xpath(ele)), Default_Time_Out);
        return await driver.findElement(By.xpath(ele));
    }
}

var getElements = async function (elementId) {
    switch (elementId) {
        case elementId.startsWith("id="):
            var ele = elementId.replace("id=", "");
            await driver.wait(until.elementLocated(By.id(ele)), Default_Time_Out);
            return await driver.findElements(By.id(ele));

        case elementId.startsWith("class="):
            var ele = elementId.replace("class=", "");
            await driver.wait(until.elementLocated(By.className(ele)), Default_Time_Out);
            return await driver.findElements(By.className(ele));

        case elementId.startsWith("xpath="):
            var ele = elementId.replace("xpath=", "");
            await driver.wait(until.elementLocated(By.xpath(ele)), Default_Time_Out);
            return await driver.findElements(By.xpath(ele));

        case elementId.startsWith("link="):
            var ele = elementId.replace("link=", "");
            await driver.wait(until.elementLocated(By.linkText(ele)), Default_Time_Out);
            return await driver.findElements(By.linkText(ele));

        case elementId.startsWith("name="):
            var ele = elementId.replace("name=", "");
            await driver.wait(until.elementLocated(By.name(ele)), Default_Time_Out);
            return await driver.findElements(By.name(ele));

        case elementId.startsWith("css="):
            var ele = elementId.replace("css=", "");
            await driver.wait(until.elementLocated(By.css(ele)), Default_Time_Out);
            return await driver.findElements(By.css(ele));

        case elementId.startsWith("//"):
            var ele = elementId.replace("//", "");
            await driver.wait(until.elementLocated(By.xpath(ele)), Default_Time_Out);
            return await driver.findElements(By.xpath(ele));

        default:
            console.log("Please give valid loacator!! Locaator value should starts with xpath= | id= | css= | etc...")
    }
}

var clickElement = async function (elementLocatorValue) {
    var ele = await getElement(elementLocatorValue)
    await ele.click();
}

var sendValue = async function (elementLocatorValue, value) {
    var ele = await getElement(elementLocatorValue)
    await ele.sendKeys(value);
}

var sendValueNoClear = async function (elementLocatorValue, value) {
    var ele = await getElement(elementLocatorValue);
    await ele.sendKeys(value);
}

var sendValueWithTab = async function (elementLocatorValue, value) {
    var ele = await getElement(elementLocatorValue);
    await ele.sendKeys(value, Key.TAB);
}

var clickAndSendValue = async function (elementLocatorValue, value) {
    var ele = await getElement(elementLocatorValue);
    await ele.click();
    await ele.sendKeys(value);
}

var doubleClickAndSendValue = async function (elementLocatorValue, value) {
    var ele = await getElement(elementLocatorValue);
    await driver.actions().doubleClick(ele).perform();
    await ele.sendKeys(value);
}

var getTextOfElement = async function (elementLocatorValue) {
    var ele = await getElement(elementLocatorValue)
    return await ele.getText();
}

var getAttributeValue = async function (elementLocatorValue, attributeName) {
    var ele = await getElement(elementLocatorValue);
    return await ele.getAttribute(attributeName);
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