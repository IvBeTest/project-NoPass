Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
describe('11 test random class equivalence check', () => {
    it('General page!', () => {
        cy.fixture('cypressConfig').then(data =>{
        cy.viewport(1280,720)
        cy.visit(data.baseURL, { timeout: 70000 })
        cy.get('.contact-us-header').scrollIntoView()

        var first = 'JohnMichaelRaymondKristopherGeorgeRobertDerickJeffryAbelHarryJob'
        var first_len = Math.floor(Math.random() * first.length)
        var first_name = first.slice(0, first_len)

        cy.get('#mat-input-0').type(first_name)
                cy.log("Проверка поля'First name', вводим рандомное значение, диапазон 1-64 символа.")



        var last = 'AllenBooneCaldwellLittleWilcoxHenryArmstrongPattersonNashSpencer'
        var last_len = Math.floor(Math.random() * last.length)
        var last_name = last.slice(0, last_len)
      
        cy.get('#mat-input-1').type(last_name)
                cy.log("Проверка поля'Last name', вводим рандомное значение, диапазон 1-64 символа.")



        var corporate = 'PadawansPadawansPadawansPadawansPadawansPadawansPadawansPadawans'
        var corporate_len = Math.floor(Math.random() * corporate.length)
        var corporate_name = corporate.slice(0, corporate_len)

        cy.get('#mat-input-2').type(corporate_name)
                cy.log("Проверка поля'Corporate name', вводим рандомное значение, диапазон 1-64 символа.")


               
        var number = '100000000'
        var num_len = Math.floor(Math.random() * number.length)
        var num_user = number.slice(0, num_len)
        
        cy.get('#mat-input-3').type(num_user)
                cy.log("Проверка поля'Number of users', вводим рандомное значение, диапазон 1-100000000.")


        
        var email = 'PadawansPadawansPadawansPadawansPadawansPadawansPadawansPadawa@w'
        var email_len = Math.floor(Math.random() * email.length)
        var email_user = email.slice(email_len, 64)
        
        cy.get('#mat-input-4').type(email_user)
                cy.log("Проверка поля'Work email', вводим рандомное значение, диапазон 1-64 символа.")

        cy.get('#mat-input-5').type(data.phone_number)
        cy.get('#mat-input-6').type(data.comments)
        cy.get('.outline-form > .mat-focus-indicator')
                //.click()
        cy.log("Форма заполнена валидными данными и отправлена")



        })
    })
})