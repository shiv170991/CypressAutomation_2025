describe('Contact Us Form', () => {
    it('should submit the form successfully with valid details', () => {
        cy.visit('https://automationteststore.com');
        cy.get('.info_links_footer > :nth-child(5) > a', { timeout: 10000 }).should('be.visible').click({ force: true });
        cy.get('#ContactUsFrm_first_name').type('John');
        cy.get('#ContactUsFrm_email').type('singh25_shivesh@yahoo.com')
        cy.get('#ContactUsFrm_enquiry').type('This is a test enquiry message.');
        cy.get('.col-md-6 > .btn').click();	
        cy.url().should('include', 'https://automationteststore.com/index.php?rt=content/contact/success');
        cy.get('.mb40 > :nth-child(3)', { timeout: 10000 })
          .should('be.visible')
          .and('contain', 'Your enquiry has been successfully sent to the store owner!');
})
});