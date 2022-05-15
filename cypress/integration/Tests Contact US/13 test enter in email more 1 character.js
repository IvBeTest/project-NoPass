import {testData} from './testData';

describe('13 test enter in email more 1 character', () => {
    before(() => {
        cy.visit('/');
    });

    it('Checking the validation of the Email field, enter 1 character.', () => {

        cy.get('.contact-us-header').scrollIntoView()
        cy.get('#mat-input-0').type(testData.validTestData.first_name)
        cy.get('#mat-input-1').type(testData.validTestData.last_name)
        cy.get('#mat-input-2').type(testData.validTestData.corporate_name)
        cy.get('#mat-input-3').type(testData.validTestData.number_of_users)
        cy.get('#mat-input-4').type(testData.notValidTestData.not_valid_worked_email_on_1_character)
        cy.get('#mat-input-5').type(testData.validTestData.phone_number)
        cy.get('#mat-input-6').type(testData.validTestData.comments)
        cy.get('.outline-form > .mat-focus-indicator').should('have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' не активна")
 })

    it('Checking for hints and matching text.', () => {
        cy.get('#mat-error-5').contains('You have entered an invalid email. Please try again.')
                cy.log("Проверка наличия подсказки и соответствия текста")
    })
})