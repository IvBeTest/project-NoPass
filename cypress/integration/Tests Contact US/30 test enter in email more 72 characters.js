import {testData} from './testData';

describe('30 test enter in email more 72 characters', () => {
    before(() => {
        cy.visit('/');
});

    it('The Work email field accepts more than the max allowed value. 72 characters.', () => {

        cy.get('.contact-us-header').scrollIntoView()
        cy.get('#mat-input-0').type(testData.validTestData.first_name)
        cy.get('#mat-input-1').type(testData.validTestData.last_name)
        cy.get('#mat-input-2').type(testData.validTestData.corporate_name)
        cy.get('#mat-input-3').type(testData.validTestData.number_of_users)
        cy.get('#mat-input-4').type(testData.validTestData.email_not_validation_worked_on_72_characters)
                cy.log("Поле 'Email' принимает больше max доустимого значения. 72 символа")
        cy.get('#mat-input-5').type(testData.validTestData.phone_number)
        cy.get('#mat-input-6').type(testData.validTestData.comments)


        cy.get('.outline-form > .mat-focus-indicator')
                //.click()
                cy.log("Кнопка 'Submit' активна")


    })
})