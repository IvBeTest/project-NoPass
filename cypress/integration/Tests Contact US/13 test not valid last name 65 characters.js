Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
describe('13 test not valid last name 65 characters', () => {
    it('General page!', () => {
        cy.fixture('cypressConfig').then(data =>{
        cy.viewport(1280,720)
        cy.visit(data.baseURL, { timeout: 70000 })
        cy.get('.contact-us-header').scrollIntoView()
        cy.get('#mat-input-0').type(data.first_name)
        cy.get('#mat-input-1').type(data.not_valid_last_name_65_characters)
        cy.log("Проверка поля'Last name', вводим не допустимое значение 65 символа.")
        cy.get('#mat-input-2').type(data.corporate_name)
        cy.get('#mat-input-3').type(data.number_of_users)
        cy.get('#mat-input-4').type(data.work_email)
        cy.get('#mat-input-5').type(data.phone_number)
        cy.get('#mat-input-6').type(data.comments)
        cy.get('#mat-error-5').contains('You can enter no more than 64 characters.')
        cy.log("Проверка наличия подсказки и соответствия текста")
        cy.get('.outline-form > .mat-focus-indicator')
        .should('have.attr', 'disabled')
        cy.log("Проверка, что кнопка 'Submit' не активна")



        
        })
    })
})