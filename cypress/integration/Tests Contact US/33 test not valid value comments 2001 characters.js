import {testData} from './testData';

describe('33 test not valid value comments 2001 characters', () => {
    before(() => {
        cy.visit('/');
});

    it('Checking the Comments field, enter more than the allowed value, 2001 characters.', () => {

        cy.get('.contact-us-header').scrollIntoView()
        cy.get('#mat-input-0').type(testData.validTestData.first_name)
        cy.get('#mat-input-1').type(testData.validTestData.last_name)
        cy.get('#mat-input-2').type(testData.validTestData.corporate_name)
        cy.get('#mat-input-3').type(testData.validTestData.number_of_users)
        cy.get('#mat-input-4').type(testData.validTestData.work_email)
        cy.get('#mat-input-5').type(testData.validTestData.phone_number)
        cy.get('#mat-input-6').type(testData.notValidTestData.not_valid_value_comments_2001_characters)
                cy.log("Поле Comments принимает больше допустимого значения, 2001 символ.")
})

    it('Check that the Submit button is disabled.', () => {

        cy.get('.outline-form > .mat-focus-indicator').should('have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' не активна.")

    })
})