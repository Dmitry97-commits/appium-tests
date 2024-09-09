const { $ } = require('@wdio/globals')
const BasePage = require("./base.page");

class MainPage extends BasePage{
    get investmentIdeasHeader(){
        return $('//android.widget.TextView[@text="Investment Ideas"]')
    }

    get tradingSignalAAPL(){
        return $('//android.widget.TextView[@text="AAPL"]')
    }

    get tradingSignalHeader(){
        return $('//android.widget.TextView[@text="Trading Signals"]')
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

    async clickOnAAPL(){
        await this.click(this.tradingSignalAAPL)
    }
}

module.exports = new MainPage();