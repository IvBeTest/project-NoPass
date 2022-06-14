import {testData} from '../../fixtures/testData';

describe('27 test negative number of users', () => {
    before(() => {
        cy.visit('/');
});

    it('Checking the validation of the Number of users field for a negative value.', () => {

        cy.get('.contact-us-header').scrollIntoView()
        cy.get('#mat-input-0').type(testData.validTestData.first_name)
        cy.get('#mat-input-1').type(testData.validTestData.last_name)
        cy.get('#mat-input-2').type(testData.validTestData.corporate_name)
        cy.get('#mat-input-3').type(testData.notValidTestData.negative_number_of_users)
                cy.log("Поле принимает отрицательное значение, но срабатывает валидация.")
        cy.get('#mat-input-4').type(testData.validTestData.work_email)
        cy.get('#mat-input-5').type(testData.validTestData.phone_number)
        cy.get('#mat-input-6').type(testData.validTestData.comments)
       
//.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick


        cy.get('.outline-form > .mat-focus-indicator').should('have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' не активна")
            
    })
})