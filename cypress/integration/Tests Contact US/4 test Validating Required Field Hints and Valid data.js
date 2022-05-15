import {testData} from './testData';

describe('4 test Validating Required Field Hints and Valid data', () => {
    before(() => {
        cy.visit('/');
    });

    it('Checking for hints of required fields. And match text hints.', () => {

        cy.get('.contact-us-header').scrollIntoView()
        cy.get('#mat-input-0').click()
        cy.get('#mat-input-1').click()
        cy.get('#mat-input-2').click()
        cy.get('#mat-input-3').click()
        cy.get('#mat-input-4').click()
        cy.get('#mat-input-5').click()
        cy.get('#mat-input-6').click()
        cy.get('#mat-error-0').contains('The First name cannot be empty.')
                cy.log("Проверка наличия подсказки и соответствия текста")
        cy.get('#mat-error-1').contains('The Last name cannot be empty.')
                cy.log("Проверка наличия подсказки и соответствия текста")
        cy.get('#mat-error-2').contains('The Corporate name cannot be empty.')
                cy.log("Проверка наличия подсказки и соответствия текста")
        cy.get('#mat-error-3').contains('The Number of users cannot be empty.')
                cy.log("Проверка наличия подсказки и соответствия текста")
        cy.get('#mat-error-4').contains('The Work email cannot be empty.')
                cy.log("Проверка наличия подсказки и соответствия текста")
        cy.get('.outline-form > .mat-focus-indicator').should('have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' не активна")
    })

    it('Checking the submission of a form filled with valid data.', () => {

        cy.get('#mat-input-0').type(testData.validTestData.first_name)
        cy.get('#mat-input-1').type(testData.validTestData.last_name)
        cy.get('#mat-input-2').type(testData.validTestData.corporate_name)
        cy.get('#mat-input-3').type(testData.validTestData.number_of_users)
        cy.get('#mat-input-4').type(testData.validTestData.work_email)
        cy.get('#mat-input-5').type(testData.validTestData.phone_number)
        cy.get('#mat-input-6').type(testData.validTestData.comments)
        cy.get('.outline-form > .mat-focus-indicator').click()
                cy.log("Форма заполнена валидными данными и отправлена.")  
        cy.get('.mat-snack-bar-container').contains("Thank you for contacting us, we'll get back to you as soon as possible")
                cy.log('Проверка сообщения об успешной отправке.')      
               
    })
})