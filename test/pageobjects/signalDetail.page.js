const { $ } = require('@wdio/globals')
const BasePage = require("./base.page");

class SignalDetailPage extends BasePage{
    get buyNowButton(){
        return $('~Buy now')
    }

    get aaplHeader(){
        return $('//android.widget.TextView[@text="AAPL"]')
    }

    get buyButton(){
        return $('//android.view.ViewGroup[contains(@content-desc,"Buy")]')
    }

    async clickOnAaplHeader(){
        await this.click(this.aaplHeader)
    }

    async clickOnBuyButton(){
        await this.click(this.buyButton)
    }
}

module.exports = new SignalDetailPage();