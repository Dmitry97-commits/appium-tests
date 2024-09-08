const BasePage = require("./base.page");
const {$} = require("@wdio/globals");

class UserPage extends BasePage{
    get userPageHeader(){
        return $('//android.widget.TextView[@text="Name Surname"]')
    }

    get logoutButton(){
        return $('//android.widget.TextView[@text="Logout"]')
    }

    async clickOnLogoutButton(){
        await this.click(this.logoutButton)
    }
}
module.exports = new UserPage();