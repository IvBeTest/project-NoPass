
describe('3 test, presence of placeholders , validating Required Field Hints', () => {
    before(() => {
        cy.visit('/');
    });

    it('Checking for placeholders and matching text.', () => {

        cy.get('#mat-input-0').invoke('attr', 'placeholder').should('eq', 'First name')
        cy.get('#mat-input-1').invoke('attr', 'placeholder').should('eq', 'Last name')
        cy.get('#mat-input-2').invoke('attr', 'placeholder').should('eq', 'Corporate name')
        cy.get('#mat-input-3').invoke('attr', 'placeholder').should('eq', 'Number of users')
        cy.get('#mat-input-4').invoke('attr', 'placeholder').should('eq', 'Work email')
        cy.get('#mat-input-5').invoke('attr', 'placeholder').should('eq', 'Phone number (optional)')
        cy.get('#mat-input-6').invoke('attr', 'placeholder').should('eq', 'Comments (optional)')

        })

    it('Checking for hints of required fields and matching text.', () => {
        
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
        cy.get('.outline-form > .mat-focus-indicator').should('have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' не активна")
               
    })
})