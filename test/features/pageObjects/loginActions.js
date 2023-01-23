const cmnFunction = require("../support/cmnFunction");
const loginPageLocators = require("../pageObjects/loginPageLocators").config;
const { expect } = require("chai");
const driver = require("../support/driverUtil").getDriver();
require("chromedriver");


var enterUserName = async function () {
    await cmnFunction.sendValue(loginPageLocators.userName, "DemoSalesManager")
    console.log("enter user name");
}

var enterPassword = async function () {
    await cmnFunction.sendValue(loginPageLocators.password, "crmsfa")
    console.log("enter password");
}

var clickLogin = async function () {
    await cmnFunction.clickElement(loginPageLocators.loginButton);
    console.log("click login");
}

var validateErrorMsg = async function (errorMsg) {

}

var validateUserLoggedIn = async function () {
    let text = await cmnFunction.getTextOfElement(loginPageLocators.welcomeNote)
    expect(text).contains("Welcome");
    console.log("verify user is logged in");
}

var clickCrmsfa = async function () {
    await cmnFunction.clickElement(loginPageLocators.crmsfaLink)
}


var launchUrl = async function () {
    await driver.get(loginPageLocators.url);
    console.log("Url launched!!!");
}


module.exports = {
    'enterUserName': enterUserName,
    'enterPassword': enterPassword,
    'clickLogin': clickLogin,
    'validateErrorMsg': validateErrorMsg,
    'validateUserLoggedIn': validateUserLoggedIn,
    'clickCrmsfa': clickCrmsfa,
    'launchUrl': launchUrl

}

