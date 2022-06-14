import {testData} from '../../fixtures/testData';

describe('31 test enter in email more 73 characters', () => {
    before(() => {
        cy.visit('/');
});

    it('Checking the Work email field, enter 73 characters.', () => {

        cy.get('.contact-us-header').scrollIntoView()
        cy.get('#mat-input-0').type(testData.validTestData.first_name)
        cy.get('#mat-input-1').type(testData.validTestData.last_name)
        cy.get('#mat-input-2').type(testData.validTestData.corporate_name)
        cy.get('#mat-input-3').type(testData.validTestData.number_of_users)
        cy.get('#mat-input-4').type(testData.notValidTestData.email_validation_worked_on_73_characters)
        cy.get('#mat-input-5').type(testData.validTestData.phone_number)
        cy.get('#mat-input-6').type(testData.validTestData.comments)
        cy.get('#mat-error-5').contains('You have entered an invalid email. Please try again.')
                cy.log("Проверка наличия подсказки и соответствия текста")
    })
    
    it('Check that the Submit button is disabled.', () => {

        cy.get('.outline-form > .mat-focus-indicator').should('have.attr', 'disabled')
        cy.log("Проверка, что кнопка 'Submit' не активна.")
       
    })
})