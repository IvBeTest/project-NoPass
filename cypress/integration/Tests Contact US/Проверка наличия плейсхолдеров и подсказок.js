import {testData} from '../../fixtures/testData';
import { DATA_LOCATORS } from '../../fixtures/locators.js';

describe('Проверка наличия плейсхолдеров, подсказок обязательных полей, сообщений об ошибки, видимости выпадающего списка', () => {
    before(() => {
        cy.visit('/');
    });

    it('Проверка наличия плейсхолдеров и соответствие текста', () => {

        cy.get(DATA_LOCATORS.contactUSform).scrollIntoView()

        cy.get(DATA_LOCATORS.firstName).invoke('attr', 'placeholder').should('eq', 'First name')
                cy.log("Проверка наличия плейсхолдера и соответствия текста")
        cy.get(DATA_LOCATORS.lastName).invoke('attr', 'placeholder').should('eq', 'Last name')
                cy.log("Проверка наличия плейсхолдера и соответствия текста")
        cy.get(DATA_LOCATORS.corporateName).invoke('attr', 'placeholder').should('eq', 'Corporate name')
                cy.log("Проверка наличия плейсхолдера и соответствия текста")
        cy.get(DATA_LOCATORS.numberOfUsers).invoke('text').should('eq', 'Number of users')
                cy.log("Проверка наличия плейсхолдера и соответствия текста")
        cy.get(DATA_LOCATORS.workEmail).invoke('attr', 'placeholder').should('eq', 'Work email')
                cy.log("Проверка наличия плейсхолдера и соответствия текста")
        cy.get(DATA_LOCATORS.phoneNumber).invoke('attr', 'placeholder').should('eq', 'Phone number (optional)')
                cy.log("Проверка наличия плейсхолдера и соответствия текста")
        cy.get(DATA_LOCATORS.comments).invoke('attr', 'placeholder').should('eq', 'Comments (optional)')
                cy.log("Проверка наличия плейсхолдера и соответствия текста")
      
        })

    it('Проверка наличия подсказок обязательных полей и соответствие теста', () => {
        
        cy.get(DATA_LOCATORS.firstName).click()
        cy.get(DATA_LOCATORS.lastName).click()
        cy.get(DATA_LOCATORS.corporateName).click()
        cy.get(DATA_LOCATORS.numberOfUsers).click()
        cy.get('.cdk-overlay-backdrop').click()
        cy.get(DATA_LOCATORS.workEmail).click()
        cy.get(DATA_LOCATORS.phoneNumber).click()
        cy.get(DATA_LOCATORS.comments).click()

        cy.get(DATA_LOCATORS.firstNameEmpty).invoke('text').should('eq', ' The First name cannot be empty. ')
                cy.log("Проверка наличия подсказки и соответствия текста")
        cy.get(DATA_LOCATORS.lastNameEmpty).invoke('text').should('eq', ' The Last name cannot be empty. ')
                cy.log("Проверка наличия подсказки и соответствия текста")
        cy.get(DATA_LOCATORS.corporateNameEmpty).invoke('text').should('eq', ' The Corporate name cannot be empty. ')
                cy.log("Проверка наличия подсказки и соответствия текста")
        cy.get(DATA_LOCATORS.numberOfUsersEmpty).invoke('text').should('eq', ' The Number of users cannot be empty. ')
             cy.log("Проверка наличия подсказки и соответствия текста")
        cy.get(DATA_LOCATORS.workEmailEmpty).invoke('text').should('eq', ' The Work email cannot be empty. ')
             cy.log("Проверка наличия подсказки и соответствия текста")
        cy.get(DATA_LOCATORS.buttonSubmit).should('have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' не активна")               
        })

    it('Проверка текста сообщений об ошибке на ввод не допустимого количества символов', () => {

        cy.get(DATA_LOCATORS.firstName).type(testData.notValid.first_name_65_characters)
        cy.get(DATA_LOCATORS.firstName65characters).invoke('text').should('eq', ' You can enter no more than 64 characters. ')
                cy.log("Проверка наличия сообщения об ошибке и соответствия текста")
        cy.get(DATA_LOCATORS.lastName).type(testData.notValid.last_name_65_characters)
        cy.get(DATA_LOCATORS.lastName65characters).invoke('text').should('eq', ' You can enter no more than 64 characters. ')
                cy.log("Проверка наличия сообщения об ошибке и соответствия текста")
        cy.get(DATA_LOCATORS.corporateName).type(testData.notValid.corporate_name_65_characters)
        cy.get(DATA_LOCATORS.corporateName65characters).invoke('text').should('eq', ' You can enter no more than 64 characters. ')
                cy.log("Проверка наличия сообщения об ошибке и соответствия текста")
        cy.get(DATA_LOCATORS.workEmail).type(testData.notValid.worked_email_on_255_character)
        cy.get(DATA_LOCATORS.workEmailInvalidEmail).invoke('text').should('eq', ' You have entered an invalid email. Please try again. ')
                cy.log("Проверка наличия сообщения об ошибке и соответствия текста")

        })

    it('Проверка текста сообщений об ошибке на ввод не допустимых символов', () => {

        cy.get(DATA_LOCATORS.firstName).clear().type(testData.notValid.unacceptable_symbols_first_name)
        cy.get(DATA_LOCATORS.firstNameUnacceptableSymbols).invoke('text').should('eq', ' The following character/s: "7,*,/" should not be used. ')
                cy.log("Проверка наличия сообщения об ошибке и соответствия текста")
        cy.get(DATA_LOCATORS.lastName).clear().type(testData.notValid.unacceptable_symbols_first_name)
        cy.get(DATA_LOCATORS.lastNameUnacceptableSymbols).invoke('text').should('eq', ' The following character/s: "7,*,/" should not be used. ')
                cy.log("Проверка наличия сообщения об ошибке и соответствия текста")
        cy.get(DATA_LOCATORS.corporateName).clear().type(testData.notValid.unacceptable_symbols_corp_name)
        cy.get(DATA_LOCATORS.corporateNameUnacceptableSymbols).invoke('text').should('eq', ' The following character/s: "%,#,@,/,*" should not be used. ')
                cy.log("Проверка наличия сообщения об ошибке и соответствия текста")

        })

        it('Проверка видимости выпадающего списка и его значений', () => {

            cy.get(DATA_LOCATORS.dropDownList).should('be.visible')
            cy.get(DATA_LOCATORS.dropDownList).click()
            cy.get(DATA_LOCATORS.numberOfUsers0).invoke('text').should('eq', ' <50 ')
            cy.get(DATA_LOCATORS.numberOfUsers1).invoke('text').should('eq', ' 51-100 ')
            cy.get(DATA_LOCATORS.numberOfUsers2).invoke('text').should('eq', ' 101-500 ')
            cy.get(DATA_LOCATORS.numberOfUsers3).invoke('text').should('eq', ' 501-1,000 ')
            cy.get(DATA_LOCATORS.numberOfUsers4).invoke('text').should('eq', ' 1,001-10,000 ')
            cy.get(DATA_LOCATORS.numberOfUsers5).invoke('text').should('eq', ' >10,000 ')
            cy.get('.cdk-overlay-backdrop').click()
    
        })

        it('Проверка наличия сообщения и соответствия текста об успешной отправке формы', () => {    

            cy.get(DATA_LOCATORS.firstName).clear()
            cy.get(DATA_LOCATORS.lastName).clear()
            cy.get(DATA_LOCATORS.corporateName).clear()
            cy.get(DATA_LOCATORS.workEmail).clear()

            cy.get(DATA_LOCATORS.firstName).type(testData.valid.first_name)
            cy.get(DATA_LOCATORS.lastName).type(testData.valid.last_name)
            cy.get(DATA_LOCATORS.corporateName).type(testData.valid.corporate_name)
            cy.get(DATA_LOCATORS.numberOfUsers).click()
            cy.get(DATA_LOCATORS.numberOfUsers0).click()
            cy.get(DATA_LOCATORS.workEmail).type(testData.valid.work_email)
            cy.get(DATA_LOCATORS.phoneNumber).type(testData.valid.phone_number)
            cy.get(DATA_LOCATORS.comments).type(testData.valid.comments)

            cy.get(DATA_LOCATORS.buttonSubmit).click() 
            cy.get(DATA_LOCATORS.successfulSubmissionMessage).contains("Thank you for contacting us, we'll get back to you as soon as possible")
                cy.log('Проверка сообщения об успешной отправке.')      
                       
        })
})