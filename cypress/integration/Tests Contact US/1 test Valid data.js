import {testData} from '../../fixtures/testData';
import { DATA_LOCATORS } from '../../fixtures/locators.js';

describe('1 test Valid data', () => {
    before(() => {
        cy.visit('/');
        cy.get('.contact-us-header').scrollIntoView()
    });

    it('Validation, sending the form with valid data.', () => {
        cy.get(DATA_LOCATORS.firstName).type(testData.valid.first_name).should("have.value", testData.valid.first_name);
    })

    it('Validation, sending the form with valid data.', () => {
        cy.get(DATA_LOCATORS.lastName).type(testData.valid.last_name).should("have.value", testData.valid.last_name);
    })

    it('Validation, sending the form with valid data.', () => {
        cy.get(DATA_LOCATORS.corporateName).type(testData.valid.corporate_name).should("have.value", testData.valid.corporate_name);
    })

    it('Validation, sending the form with valid data.', () => {
        cy.get(DATA_LOCATORS.numberOfUsers).type(testData.valid.number_of_users).should("have.value", testData.valid.number_of_users);
    })

    it('Validation, sending the form with valid data.', () => {
        cy.get(DATA_LOCATORS.workEmail).type(testData.valid.work_email).should("have.value", testData.valid.work_email);
    })

    it('Validation, sending the form with valid data.', () => {
        cy.get(DATA_LOCATORS.phoneNumber).type(testData.valid.phone_number).should("have.value", testData.valid.phone_number);
    })

    it('Validation, sending the form with valid data.', () => {
        cy.get(DATA_LOCATORS.comments).type(testData.valid.comments).should("have.value", testData.valid.comments);
    })

    it('Validation, sending the form with valid data.', () => {
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' активна") 
    })  
    it('Validation, sending the form with valid data.', () => {                        
        cy.get(DATA_LOCATORS.buttonSubmit).click()              
        cy.get(DATA_LOCATORS.successfulSubmissionMessage).contains("Thank you for contacting us, we'll get back to you as soon as possible")
                cy.log('Проверка сообщения об успешной отправке.')      
               
    })

    it('Validation, sending the form with valid data.', () => {
    cy.intercept('POST', '/', {
        statusCode: 200,
        https: true
     
        })
    })
})