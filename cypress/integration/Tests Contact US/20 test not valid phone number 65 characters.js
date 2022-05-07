Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
describe('20 test not valid phone number 65 characters', () => {
    it('General page!', () => {
        cy.fixture('cypressConfig').then(data =>{
        cy.viewport(1280,720)
        cy.visit(data.baseURL, { timeout: 70000 })
        cy.get('.contact-us-header').scrollIntoView()
        cy.get('#mat-input-0').type(data.first_name)
        cy.get('#mat-input-1').type(data.last_name)
        cy.get('#mat-input-2').type(data.corporate_name)
        cy.get('#mat-input-3').type(data.users_100000000)
        cy.get('#mat-input-4').type(data.work_email)
        cy.get('#mat-input-5').type(data.phone_number_65_characters)
        cy.log("Проверка поля'Phone number', вводим yt допустимое значение 65 символа.")
        cy.get('#mat-input-6').type(data.comments)
        cy.get('.outline-form > .mat-focus-indicator')
        .should('have.attr', 'disabled')
        cy.log("Проверка, что кнопка 'Submit' не активна")




        
        })
    })
})