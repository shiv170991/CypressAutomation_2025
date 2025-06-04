describe('EaseMyTrip Login Email Validation', () => {
    it('should enable the Continue button when a valid email is entered', () => {
        cy.visit('https://www.easemytrip.com/flights.html');

        // Click on the login/sign-up button to open the login modal
        cy.get('#spnMyAcc').click();

        // Enter a valid email address in the email input box
        cy.get('input[type="email"]').type('n
        // Assert that the Continue button is enabled
        cy.get('button').contains('Continue').should('not.be.disabled');
    });
});