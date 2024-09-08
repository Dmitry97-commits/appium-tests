const BasePage = require('./base.page');

class AppPage extends BasePage {
    get signInButton() {
        return $('~Sign in');
    }

    async clickSignInButton() {
        await this.click(this.signInButton);
    }
}

module.exports = new AppPage();
