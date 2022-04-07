import {datagrateURL, loginPage, url_helper} from "../helpers/url_handler";
import {usernameForLogin, passwordForLogin, login_helper} from "../helpers/login_page";

describe('02_LoginPage', () => {
    beforeEach(() => {
        url_helper.navigateToUrl(datagrateURL.concat(loginPage));
        url_helper.verifyUrl(datagrateURL.concat(loginPage));
    })

    it('Input wrong credentials', () => {
        login_helper.usernameVisible();
        login_helper.passwordVisible();
        login_helper.typeInUsername(usernameForLogin);
        login_helper.typeInPassword(passwordForLogin);
        login_helper.clickLoginButton();
        login_helper.emailErrorMessage();
    });
})