const { $ } = require('@wdio/globals')
const BasePage = require("./base.page");

class MainPage extends BasePage{
    get investmentIdeasHeader(){
        return $('//android.widget.TextView[@text="Investment Ideas"]')
    }

    get createAccountButton(){
        return $('//android.widget.TextView[@text="Create account"]')
    }

    get iconOfUser(){
        return $('-android uiautomator:new UiSelector().className("com.horcrux.svg.PathView").instance(2)')
    }

    async clickOnIconOfUser(){
        await this.click(this.iconOfUser)
    }
}

module.exports = new MainPage();