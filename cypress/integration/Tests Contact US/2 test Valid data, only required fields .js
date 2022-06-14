import {testData} from '../../fixtures/testData';
import { DATA_LOCATORS } from '../../fixtures/locators.js';

describe('2 test Valid data, only required fields ', () => {
    before(() => {
        cy.visit('/');
    });

    it('Validation, sending the form with filling in only the required fields. The Submit button is active.', () => {

        cy.get('.contact-us-header').scrollIntoView()
        cy.get(DATA_LOCATORS.firstName).type(testData.valid.first_name)
        cy.get(DATA_LOCATORS.lastName).type(testData.valid.last_name)
        cy.get(DATA_LOCATORS.corporateName).type(testData.valid.corporate_name)
        cy.get(DATA_LOCATORS.numberOfUsers).type(testData.valid.number_of_users)
        cy.get(DATA_LOCATORS.workEmail).type(testData.valid.work_email)
        cy.get(DATA_LOCATORS.phoneNumber).click()
        cy.get(DATA_LOCATORS.comments).click()
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' активна") 
    })

    it('Sending message received, checking text.', () => {   
        cy.get(DATA_LOCATORS.buttonSubmit).click()                    
        cy.get(DATA_LOCATORS.successfulSubmissionMessage).contains("Thank you for contacting us, we'll get back to you as soon as possible")
                cy.log('Проверка сообщения об успешной отправке.')                
    })
})