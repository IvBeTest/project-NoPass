Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
describe('2 test validating Required Field Hints', () => {
    it('General page!', () => {
        cy.fixture('cypressConfig').then(data =>{
        cy.viewport(1280,720)
        cy.visit(data.baseURL, { timeout: 70000 })
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
        cy.get('.outline-form > .mat-focus-indicator')
        .should('have.attr', 'disabled')
        cy.log("Проверка, что кнопка 'Submit' не активна")
        
        })
    })
})