const LoginPage = require('../pageobjects/login.page');
const AppPage = require('../pageobjects/app.page');
const MainPage = require('../pageobjects/main.page');
const UserPage = require('../pageobjects/user.page');
const SignalDetailPage = require('../pageobjects/signalDetail.page')
const config = require('../config/default');

describe('Suit of tests with Login, Opening position, Logout', () => {

    beforeEach(async () => {
        await driver.installApp(config.appPath);
        await driver.activateApp(config.appid);
        await AppPage.clickSignInButton();
        await LoginPage.login(config.userData.login, config.userData.password);
        await LoginPage.clickAllowOnPopUp();
    });

    it('Positive Login test', async () => {
        await expect(MainPage.investmentIdeasHeader).toBeDisplayed();
    });

    it('Positive Open Position test', async ()=>{
        await expect(MainPage.tradingSignalHeader).toBeDisplayed();

        await MainPage.clickOnAAPL();
        await expect(SignalDetailPage.buyNowButton).toBeDisplayed();

        await SignalDetailPage.clickOnAaplHeader();
        await expect(SignalDetailPage.buyButton).toBeDisplayed();

        await SignalDetailPage.clickOnBuyButton();
    });

    it('Positive Logout test', async () => {
        await MainPage.clickOnIconOfUser();
        await expect(UserPage.userPageHeader).toBeDisplayed();

        await UserPage.clickOnLogoutButton();
        await expect(MainPage.createAccountButton).toBeDisplayed();
    });

    afterEach(async () => {
        await driver.terminateApp(config.appid);
        await driver.removeApp(config.appid);
    });
});
