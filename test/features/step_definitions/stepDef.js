const { Given, When, Then, setDefaultTimeout, } = require("@cucumber/cucumber");
const { By, Builder } = require("selenium-webdriver");
const { expect } = require("chai");
const driver = require("../support/driverUtil").getDriver();
const elements = require("../pageObjects/pageLocators").config;
const cmnFunction = require("../support/cmnFunction")

require("chromedriver");
setDefaultTimeout(30 * 1000);




Given('launch application', { timeout: 30 * 1000 }, async function () {
  await driver.get(elements.url);
  console.log("Url entered!!!")
});


When('enter user name', { timeout: 30 * 1000 }, async function () {
  //  driver.findElement(By.id(elements.userName)).sendKeys("DemoSalesManager");
  await cmnFunction.sendValue(elements.userName, "DemoSalesManager")
  console.log("enter user name");
});


When('enter password', { timeout: 30 * 1000 }, async function () {
  //  driver.findElement(By.id(elements.password)).sendKeys("crmsfa")
  await cmnFunction.sendValue(elements.password, "crmsfa")
  console.log("enter password");
});

When('click login', { timeout: 30 * 1000 }, async function () {
  //  driver.findElement(By.xpath(elements.loginButton)).click();
  await cmnFunction.clickElement(elements.loginButton);
  console.log("click login");
});

Then('verify user is logged in', { timeout: 30 * 1000 }, async function () {
  // let text =  driver.findElement(By.xpath(elements.welcomeNote)).getText();
  let text = await cmnFunction.getTextOfElement(elements.welcomeNote)
  await expect(text).contains("Welcome");
  console.log("verify user is logged in");
});