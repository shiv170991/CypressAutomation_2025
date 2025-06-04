describe('Contact Us Form', () => {
    it('should submit the form successfully with valid details', () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');

        cy.get('input[name="first_name"]').type('John');
        cy.get('input[name="last_name"]').type('Doe');
        cy.get('input[name="email"]').type('john.doe@example.com');
        cy.get('textarea[name="message"]').type('This is a test message.');

        cy.get('input[type="submit"]').click();

        cy.get('h1').should('contain.text', 'Thank You for your Message!');
    });

     it('should not submit the form if any required detail is missing', () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');

        // Try missing first name
        cy.get('input[name="last_name"]').type('Doe');
        cy.get('input[name="email"]').type('john.doe@example.com');
        cy.get('textarea[name="message"]').type('Test message');
        cy.get('input[type="submit"]').click();
        cy.get('body').should('contain.text', 'Error: all fields are required');

        // Try missing last name
        // Try missing last name
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('input[name="first_name"]').type('John');
        cy.get('input[name="email"]').type('john.doe@example.com');
        cy.get('textarea[name="message"]').type('Test message');
        cy.get('input[type="submit"]').click();
        cy.get('body').should('contain.text', 'Error: all fields are required');

        // Try missing email
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('input[name="first_name"]').type('John');
        cy.get('input[name="last_name"]').type('Doe');
        cy.get('textarea[name="message"]').type('Test message');
        cy.get('input[type="submit"]').click();
        cy.get('body').should('contain.text', 'Error: all fields are required');

        // Try missing message
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('input[name="first_name"]').type('John');
        cy.get('input[name="last_name"]').type('Doe');
        cy.get('input[name="email"]').type('john.doe@example.com');
        cy.get('input[type="submit"]').click();
        cy.get('body').should('contain.text', 'Error: all fields are required');
    });
});