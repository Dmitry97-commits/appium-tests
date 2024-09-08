const { $ } = require('@wdio/globals')
const BasePage = require("./base.page");

class LoginPage extends BasePage{
    get inputUsername() {
        return $('-android uiautomator:new UiSelector().className("android.widget.EditText").instance(0)');
    }

    get inputPassword() {
        return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText');
    }

    get signInButton() {
        return $('~Sign in');
    }

    get popUpRing(){
        return $('//*[@resource-id="com.android.permissioncontroller:id/permission_icon"]');
    }

    get allowButtonOnPopUp(){
        return $('//*[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]');
    }

    async login(username, password) {
        await this.setValue(this.inputUsername, username);
        await this.setValue(this.inputPassword, password);
        await this.click(this.signInButton);
    }

    async clickAllowOnPopUp(){
        await this.popUpRing.isDisplayed();
        await this.click(this.allowButtonOnPopUp);
    }
}

module.exports = new LoginPage();
