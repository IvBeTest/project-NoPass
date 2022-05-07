Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
describe('15 test not valid 100000001', () => {
    it('General page!', () => {
        cy.fixture('cypressConfig').then(data =>{
        cy.viewport(1280,720)
        cy.visit(data.baseURL, { timeout: 70000 })
        cy.get('.contact-us-header').scrollIntoView()
        cy.get('#mat-input-0').type(data.first_name)
        cy.get('#mat-input-1').type(data.last_name)
        cy.get('#mat-input-2').type(data.corporate_name)
        cy.get('#mat-input-3').type(data.users_1000000001)
        cy.log("Проверка поля'Проверка поля'Number of users', вводим не допустимое значение 1000000001 символа.")
        cy.get('#mat-input-4').type(data.work_email)
        cy.get('#mat-input-5').type(data.phone_number)
        cy.get('#mat-input-6').type(data.comments)
        cy.get('.outline-form > .mat-focus-indicator')
        .should('have.attr', 'disabled')
        cy.log("Проверка, что кнопка 'Submit' не активна")





        
        })
    })
})