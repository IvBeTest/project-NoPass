import {testData} from './testData';

describe('29 test not valid 100000001', () => {
    before(() => {
        cy.visit('/');
});

    it('Checking the Number of users field, enter an invalid value of 1000000001.', () => {

        cy.get('.contact-us-header').scrollIntoView()
        cy.get('#mat-input-0').type(testData.validTestData.first_name)
        cy.get('#mat-input-1').type(testData.validTestData.last_name)
        cy.get('#mat-input-2').type(testData.validTestData.corporate_name)
        cy.get('#mat-input-3').type(testData.notValidTestData.users_1000000001)
                cy.log("Проверка поля 'Number of users', вводим не допустимое значение 1000000001 символа.")
        cy.get('#mat-input-4').type(testData.validTestData.work_email)
        cy.get('#mat-input-5').type(testData.validTestData.phone_number)
        cy.get('#mat-input-6').type(testData.validTestData.comments)
        cy.get('.outline-form > .mat-focus-indicator').should('have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' не активна")


    })
})