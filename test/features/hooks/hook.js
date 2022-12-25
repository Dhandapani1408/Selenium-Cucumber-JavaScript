const { Before, After, BeforeAll, setDefaultTimeout, AfterAll, Status } = require("@cucumber/cucumber");
const driver = require("../support/driverUtil").getDriver();
setDefaultTimeout(30 * 1000);

BeforeAll(function () {
    console.log("Before!!!")
});

After(async function (scenario) {
    if (scenario.result.status == Status.FAILED) {
        const scenarioName = scenario.pickle.name;
        const data18 = await driver.takeScreenshot();
        const image18 = Buffer.from(data18, 'base64');
        await this.attach(image18, 'image/png');
    }
})

AfterAll(async function () {
    console.log("After");
    await driver.close();
});
