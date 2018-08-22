const { expect } = require("chai");
const BrowserHelpers = require("e2e_training_wheels")
const browser = new BrowserHelpers()

describe("User can calculate BMI using the metric option", () => {
    before(async () => {
        await browser.init()
        await browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await browser.page.reload();
    });

    after(async () => {
        await browser.close();
    });


    it("by inputing his weight and height", async () => {
        await browser.fillIn("input[id='weight-in-kgs']", {with: "95"})
        await browser.fillIn("input[id='height-in-cm']", {with: "185"}) 

        await browser.clickOnButton("button")
        let content = await browser.getContent("span[id='display_value']");
        expect(content).to.eql("Your BMI is 27.76")
    });

});

describe("User can calculate BMI using the imperial method", () => {
    before(async () => {
        await browser.init()
        await browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await browser.page.reload();
    });

    after(async () => {
        await browser.close();
    });


    it("by inputing his weight and height", async () => {
        await browser.selectRadioButton("select[id='my_select']", {option: 'imperial'});
        await browser.fillIn("input[id='weight-in-lbs']", {with: "170"});
        await browser.fillIn("input[id='h   eight-in-in']", {with: "70"}); 

        await browser.clickOnButton("button");
        let content = await browser.getContent("span[id='display_value']");
        expect(content).to.eql("Your BMI is 24.39")
    });

});