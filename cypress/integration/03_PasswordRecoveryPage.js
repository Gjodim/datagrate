import {datagrateURL, loginPage, passwordRecoveryPage, url_helper} from "../helpers/url_handler";
import {usernameForLogin, login_helper} from "../helpers/login_page";
import { passwordRecoveryPage_helper } from "../helpers/password_recovery_page"


describe('03_PasswordRecoveryPage', () => {
    beforeEach(() => {
        url_helper.navigateToUrl(datagrateURL.concat(loginPage));
        url_helper.verifyUrl(datagrateURL.concat(loginPage));
    });
    before(() => {
        Cypress.config('baseUrl', datagrateURL.concat(passwordRecoveryPage));
        cy.server();
        cy.route({
            method: 'POST',
            url: '/dbconnections/change_password'
        }).as('passwordReset');
    });

    it('Reset password - verify request', () => {
        login_helper.clickForgotPassword();
        url_helper.verifyUrl(datagrateURL.concat(passwordRecoveryPage));
        passwordRecoveryPage_helper.emailVisible();
        passwordRecoveryPage_helper.typeInEmail(usernameForLogin);
        passwordRecoveryPage_helper.clickResetMyPasswordButton();
        passwordRecoveryPage_helper.getPostRequest('passwordReset');
    })
})