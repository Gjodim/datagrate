export const usernameForLogin = 'RANDOM_EMAIL@test.com';
export const passwordForLogin = 'A1@b3$'

class Login_page {

    get username() {
        return cy.get(`input[name="username"]`);
    }

    get password() {
        return cy.get(`input[name="password"]`);
    }

    usernameVisible() {
        this.username.should('be.visible');
    }

    passwordVisible() {
        this.password.should('be.visible');
    }

    typeInUsername(username) {
        this.username.type(username);
        this.username.should('have.attr', 'value', username);
    }

    typeInPassword(password) {
        this.password.type(password);
        this.password.should('have.attr', 'value', password);
    }

    clickLoginButton() {
        cy.get('button').contains('Log in').click();
    }

    emailErrorMessage() {
        cy.get('.MuiAlert-message').contains('Wrong email or password.').should('exist');
    }

    clickForgotPassword() {
        cy.get('a').contains('Forgot password?').click();
    }
}

export const login_helper = new Login_page();