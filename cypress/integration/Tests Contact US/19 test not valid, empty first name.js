import {testData} from '../../fixtures/testData';

describe('19 test not valid, empty first name', () => {
    before(() => {
        cy.visit('/');
    });

    it('Checking the required field First name, leave it empty. The Submit button is disabled.', () => {

        cy.get('.contact-us-header').scrollIntoView()
        cy.get('#mat-input-1').type(testData.validTestData.last_name)
        cy.get('#mat-input-2').type(testData.validTestData.corporate_name)
        cy.get('#mat-input-3').type(testData.validTestData.number_of_users)
        cy.get('#mat-input-4').type(testData.validTestData.work_email)
        cy.get('#mat-input-5').type(testData.validTestData.phone_number)
        cy.get('#mat-input-6').type(testData.validTestData.comments)
        cy.get('.outline-form > .mat-focus-indicator').should('have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' не активна")
    })
            
    it('Checking for hints and matching text. The Submit button is disabled.', () => {

        cy.get('#mat-input-0').click()
                //cy.log("Проверка обязательного поля'First name', оставляем пустым.")
        cy.get('#mat-input-6').click()
        cy.get('#mat-error-0').contains( 'The First name cannot be empty.')
                cy.log("Проверка наличия подсказки и соответствия текста")
        cy.get('.outline-form > .mat-focus-indicator').should('have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' не активна")


    })
})