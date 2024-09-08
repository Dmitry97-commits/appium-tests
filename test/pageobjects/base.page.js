class BasePage {
    get timeout(){
        return 10000;
    }

    async click(locator){
        await locator.waitForExist({ timeout: this.timeout });
        await locator.waitForDisplayed({ timeout: this.timeout });
        await locator.isEnabled()
        await locator.click();
    }

    async setValue(locator, text){
        await locator.waitForExist({ timeout: this.timeout });
        await locator.setValue(text)
    }

}

module.exports = BasePage;
