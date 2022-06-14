import {testData} from '../../fixtures/testData';
import { DATA_LOCATORS } from '../../fixtures/locators.js';

describe('4 test Validating Required Field Hints and Valid data', () => {
    before(() => {
        cy.visit('/');
    });

    it('Checking for hints of required fields. And match text hints.', () => {

        cy.get(DATA_LOCATORS.contactUSform).scrollIntoView()
        cy.get(DATA_LOCATORS.firstName).click()
        cy.get(DATA_LOCATORS.lastName).click()
        cy.get(DATA_LOCATORS.corporateName).click()
        cy.get(DATA_LOCATORS.numberOfUsers).click()
        cy.get('.cdk-overlay-backdrop').click()
        cy.get(DATA_LOCATORS.workEmail).click()
        cy.get(DATA_LOCATORS.phoneNumber).click()
        cy.get(DATA_LOCATORS.comments).click()

        cy.get(DATA_LOCATORS.firstNameEmpty).contains('The First name cannot be empty.')
                cy.log("Проверка наличия подсказки и соответствия текста")
        cy.get(DATA_LOCATORS.lastNameEmpty).contains('The Last name cannot be empty.')
                cy.log("Проверка наличия подсказки и соответствия текста")
        cy.get(DATA_LOCATORS.corporateNameEmpty).contains('The Corporate name cannot be empty.')
                cy.log("Проверка наличия подсказки и соответствия текста")
        cy.get(DATA_LOCATORS.numberOfUsersEmpty).contains('The Number of users cannot be empty.')
                cy.log("Проверка наличия подсказки и соответствия текста")
        cy.get(DATA_LOCATORS.workEmailEmpty).contains('The Work email cannot be empty.')
                cy.log("Проверка наличия подсказки и соответствия текста")
        cy.get(DATA_LOCATORS.buttonSubmit).should('have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' не активна")
    })

    it('Checking the submission of a form filled with valid data.', () => {

        cy.get('#mat-input-0').type(testData.valid.first_name)
        cy.get('#mat-input-1').type(testData.valid.last_name)
        cy.get('#mat-input-2').type(testData.valid.corporate_name)
        cy.get('#mat-input-3').type(testData.valid.number_of_users)
        cy.get('#mat-input-4').type(testData.valid.work_email)
        cy.get('#mat-input-5').type(testData.valid.phone_number)
        cy.get('#mat-input-6').type(testData.valid.comments)
        cy.get('.outline-form > .mat-focus-indicator').click()
                cy.log("Форма заполнена валидными данными и отправлена.")  
        cy.get('.mat-snack-bar-container').contains("Thank you for contacting us, we'll get back to you as soon as possible")
                cy.log('Проверка сообщения об успешной отправке.')      
               
    })
})