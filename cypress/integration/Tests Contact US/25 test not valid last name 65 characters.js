import {testData} from './testData';

describe('25 test not valid last name 65 characters', () => {
    before(() => {
        cy.visit('/');
    });

    it('Checking the Last name field, enter an invalid value of 65 characters.', () => {
     
        cy.get('.contact-us-header').scrollIntoView()
        cy.get('#mat-input-0').type(testData.validTestData.first_name)
        cy.get('#mat-input-1').type(testData.notValidTestData.not_valid_last_name_65_characters)
                cy.log("Проверка поля'Last name', вводим не допустимое значение 65 символа.")
        cy.get('#mat-input-2').type(testData.validTestData.corporate_name)
        cy.get('#mat-input-3').type(testData.validTestData.number_of_users)
        cy.get('#mat-input-4').type(testData.validTestData.work_email)
        cy.get('#mat-input-5').type(testData.validTestData.phone_number)
        cy.get('#mat-input-6').type(testData.validTestData.comments)
        cy.get('#mat-error-5').contains('You can enter no more than 64 characters.')
                cy.log("Проверка наличия подсказки и соответствия текста")
    })

    it('Check that the Submit button is disabled.', () => {

        cy.get('.outline-form > .mat-focus-indicator').should('have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' не активна")
          
        })
    })
