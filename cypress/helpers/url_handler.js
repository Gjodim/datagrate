export const datagrateURL = 'http://app.datagrate.co/';
export const passwordRecoveryPage = 'password_recovery';
export const loginPage = 'login';

class Url_handler {

    navigateToUrl(url) {
        try {
            cy.visit(url);
            cy.log(`Navigating to URL: ${url}.`);
        } catch (error) {
            cy.log(`Error in navigating to URL: ${url}!`);
            throw error;
        }
    }

    async verifyUrl(url) {
        try {
            let actualUrl = cy.url();
            actualUrl.should('include', url);
            cy.log(`Requested URL: ${url} is current URL: ${actualUrl}`);
        } catch (error) {
            cy.log(`Expected url is not: ${url}!`);
            throw error;
        }
    }
}

export const url_helper = new Url_handler();