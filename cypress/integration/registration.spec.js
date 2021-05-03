import selectors from '../support/selectors.js';

describe('Registration form', () => {

    beforeEach(() => {
        cy.visit('https://coinmarketcap.com/')

        cy.get(selectors.signUpButton).click()
      })
    it('Should be unable to create an account using an incorrect email address format', () => {

        cy.get(selectors.emailInput).type('email')
        cy.get(selectors.passwordInput).type('password123')

        cy.get(selectors.createAccountButton).click()

        cy.get(selectors.errorLabel).should('contain', 'The email you entered is not in the correct format. Please check.')
    });

    it('Should be unable to create an account using an too short password', () => {

        cy.get(selectors.emailInput).type('email@gmail.com')
        cy.get(selectors.passwordInput).type('abc123')

        cy.get(selectors.createAccountButton).click()

        cy.get(selectors.errorLabel).should('contain', 'Password should contain both letters and numbers, with minimum length of 8 characters')
    });
});