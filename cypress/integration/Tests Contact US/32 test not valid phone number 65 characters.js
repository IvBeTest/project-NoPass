import {testData} from './testData';

describe('32 test not valid phone number 65 characters', () => {
    before(() => {
        cy.visit('/');
});

    it('Checking the Phone number field, enter an invalid value of 65 characters.', () => {
     
        cy.get('.contact-us-header').scrollIntoView()
        cy.get('#mat-input-0').type(testData.validTestData.first_name)
        cy.get('#mat-input-1').type(testData.validTestData.last_name)
        cy.get('#mat-input-2').type(testData.validTestData.corporate_name)
        cy.get('#mat-input-3').type(testData.validTestData.users_100000000)
        cy.get('#mat-input-4').type(testData.validTestData.work_email)
        cy.get('#mat-input-5').type(testData.notValidTestData.phone_number_65_characters)
                cy.log("Проверка поля'Phone number', вводим не допустимое значение 65 символа.")
        cy.get('#mat-input-6').type(testData.validTestData.comments)
    })

        it('Check that the Submit button is disabled.', () => {

        cy.get('.outline-form > .mat-focus-indicator').should('have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' не активна.")


    })
})