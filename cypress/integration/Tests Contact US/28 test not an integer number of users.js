import {testData} from '../../fixtures/testData';

describe('28 test not an integer number of users', () => {
    before(() => {
        cy.visit('/');
});

    it('The Number of users field accepts a non-integer number.', () => {
      
        cy.get('.contact-us-header').scrollIntoView()
        cy.get('#mat-input-0').type(testData.validTestData.first_name)
        cy.get('#mat-input-1').type(testData.validTestData.last_name)
        cy.get('#mat-input-2').type(testData.validTestData.corporate_name)
        cy.get('#mat-input-3').type(testData.notValidTestData.not_an_integer)
                cy.log("Поле Number of users принимает не целочесленное число.")
        cy.get('#mat-input-4').type(testData.validTestData.work_email)
        cy.get('#mat-input-5').type(testData.validTestData.phone_number)
        cy.get('#mat-input-6').type(testData.validTestData.comments)


        cy.get('.outline-form > .mat-focus-indicator')
            //.click()
                cy.log("Кнопка 'Submit' активна. Можно отправить форму.")
        
       
        
    })
})