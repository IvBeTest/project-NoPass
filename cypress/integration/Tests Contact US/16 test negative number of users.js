Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
describe('16 test negative number of users', () => {
    it('General page!', () => {
        cy.fixture('cypressConfig').then(data =>{
        cy.viewport(1280,720)
        cy.visit(data.baseURL, { timeout: 70000 })
        cy.get('.contact-us-header').scrollIntoView()
        cy.get('#mat-input-0').type(data.first_name)
        cy.get('#mat-input-1').type(data.last_name)
        cy.get('#mat-input-2').type(data.corporate_name)
        cy.get('#mat-input-3').type(data.negative_number_of_users)
        cy.log("Поле принимает отрицательное значение, но срабатывает валидация.")
        cy.get('#mat-input-4').type(data.work_email)
        cy.get('#mat-input-5').type(data.phone_number)
        cy.get('#mat-input-6').type(data.comments)
        cy.get('.mat-form-field-invalid > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
        cy.log("Проверка, invalid")
        cy.get('.outline-form > .mat-focus-indicator')
        .should('have.attr', 'disabled')
        cy.log("Проверка, что кнопка 'Submit' не активна")
                
        
        })
    })
})