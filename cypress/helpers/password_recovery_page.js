
class Password_recovery_page {

    clickResetMyPasswordButton() {
        cy.get('button').contains('Reset my password').click();
    }

    emailRecoverySentMessage(){
        cy.get('#client-snackbar').contains('E-mail sent').should('exist');
    }

    get email() {
        return cy.get(`input[name="email"]`);
    }

    emailVisible() {
        this.email.should('be.visible');
    }

    typeInEmail(email) {
        this.email.type(email);
        this.email.should('have.attr', 'value', email);
    }

    getPostRequest(alias){
        cy.wait(`@${alias}`).then(xhr => {
            cy.log(JSON.stringify(xhr.request.body));
            expect(xhr.method).to.eq('POST');
        });
    }
}

export const passwordRecoveryPage_helper = new Password_recovery_page();