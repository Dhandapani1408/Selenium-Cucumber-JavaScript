const { Given, When, Then, setDefaultTimeout, } = require("@cucumber/cucumber");
const driver = require("../support/driverUtil").getDriver();
const loginActions = require("../pageObjects/loginActions");
const loginPageLocators = require("../pageObjects/loginPageLocators").config;
require("chromedriver");
setDefaultTimeout(30 * 1000);




Given('launch application', async function () {
  await loginActions.launchUrl();
  console.log("url launched!!!");
});


When('enter user name', async function () {
  await loginActions.enterUserName();
});


When('enter password', async function () {
  await loginActions.enterPassword();
});

When('click login', async function () {
  await loginActions.clickLogin();
});

Then('verify user is logged in', async function () {
  await loginActions.validateUserLoggedIn();
});

Then('click on crmsfa link', async function () {
  await loginActions.clickCrmsfa();
})