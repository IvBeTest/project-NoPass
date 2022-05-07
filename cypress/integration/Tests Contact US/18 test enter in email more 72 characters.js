Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
describe('18 test enter in email more 72 characters', () => {
    it('General page!', () => {
        cy.fixture('cypressConfig').then(data =>{
        cy.viewport(1280,720)
        cy.visit(data.baseURL, { timeout: 70000 })
        cy.get('.contact-us-header').scrollIntoView()
        cy.get('#mat-input-0').type(data.first_name)
        cy.get('#mat-input-1').type(data.last_name)
        cy.get('#mat-input-2').type(data.corporate_name)
        cy.get('#mat-input-3').type(data.number_of_users)
        cy.get('#mat-input-4').type(data.email_not_validation_worked_on_72_characters)
        cy.log("Поле 'Email' принимает больше max доустимого значения. 72 символа")
        cy.get('#mat-input-5').type(data.phone_number)
        cy.get('#mat-input-6').type(data.comments)
        cy.get('.outline-form > .mat-focus-indicator')
                //.click()
        cy.log("Кнопка 'Submit' активна")




        
        })
    })
})