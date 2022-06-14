import {testData} from '../../fixtures/testData';
import { DATA_LOCATORS } from '../../fixtures/locators.js';

describe('Проверка "Граничных значений" полей формы "Contact US"', () => {
    before(() => {
        cy.visit('/');
    });

    it('Проверка формы на ввод валидных данных', () => {

        cy.get(DATA_LOCATORS.contactUSform).scrollIntoView()
        cy.get(DATA_LOCATORS.firstName).type(testData.valid.first_name)
        cy.get(DATA_LOCATORS.lastName).type(testData.valid.last_name)
        cy.get(DATA_LOCATORS.corporateName).type(testData.valid.corporate_name)
        cy.get(DATA_LOCATORS.numberOfUsers).click()
        cy.get(DATA_LOCATORS.numberOfUsers0).click()
        cy.get(DATA_LOCATORS.workEmail).type(testData.valid.work_email)
        cy.get(DATA_LOCATORS.phoneNumber).type(testData.valid.phone_number)
        cy.get(DATA_LOCATORS.comments).type(testData.valid.comments)
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' активна")                
    })

    it('Границы поля "First name" -1 от min значения, оставляем поле пустым', () => {

        cy.get(DATA_LOCATORS.firstName).clear()
        cy.get(DATA_LOCATORS.buttonSubmit).should('have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' не активна")
    })

    it('Границы поля "First name" вводим min границу, 1 символ', () => {

        cy.get(DATA_LOCATORS.firstName).clear()
        cy.get(DATA_LOCATORS.firstName).type(testData.valid.first_name_1_character).should("have.value", testData.valid.first_name_1_character)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' активна")
    })

    it('Границы поля "First name" -1 от max границы, 63 символа', () => {

        cy.get(DATA_LOCATORS.firstName).clear()
        cy.get(DATA_LOCATORS.firstName).type(testData.valid.first_name_63_characters).should("have.value", testData.valid.first_name_63_characters)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                    cy.log("Проверка, что кнопка 'Submit' активна")
    })

    it('Границы поля "First name" max граница, 64 символа', () => {

        cy.get(DATA_LOCATORS.firstName).clear()
        cy.get(DATA_LOCATORS.firstName).type(testData.valid.first_name_64_characters).should("have.value", testData.valid.first_name_64_characters)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                    cy.log("Проверка, что кнопка 'Submit' активна")
    })

    it('Границы поля "First name" +1 к max границе, 65 символов', () => {

        cy.get(DATA_LOCATORS.firstName).clear()
        cy.get(DATA_LOCATORS.firstName).type(testData.notValid.first_name_65_characters).should("have.value", testData.notValid.first_name_65_characters)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('have.attr', 'disabled')
                    cy.log("Проверка, что кнопка 'Submit' не активна")
        cy.get(DATA_LOCATORS.firstName).clear().type(testData.valid.first_name).should("have.value", testData.valid.first_name)
     
    })

    it('Границы поля "Last name" -1 от min значения, оставляем поле пустым', () => {

        cy.get(DATA_LOCATORS.lastName).clear()
        cy.get(DATA_LOCATORS.buttonSubmit).should('have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' не активна")
    })

    it('Границы поля "Last name" вводим min границу, 1 символ', () => {

        cy.get(DATA_LOCATORS.lastName).clear()
        cy.get(DATA_LOCATORS.lastName).type(testData.valid.last_name_1_character).should("have.value", testData.valid.last_name_1_character)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                        cy.log("Проверка, что кнопка 'Submit' активна")

    })

    it('Границы поля "Last name" -1 от max границы, 63 символа', () => {

        cy.get(DATA_LOCATORS.lastName).clear()
        cy.get(DATA_LOCATORS.lastName).type(testData.valid.last_name_63_characters).should("have.value", testData.valid.last_name_63_characters)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' активна")
    })

    it('Границы поля "Last name" max граница, 64 символа', () => {

        cy.get(DATA_LOCATORS.lastName).clear()
        cy.get(DATA_LOCATORS.lastName).type(testData.valid.last_name_64_characters).should("have.value", testData.valid.last_name_64_characters)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' активна")
    })

    it('Границы поля "Last name" +1 к max границе, 65 символов', () => {

        cy.get(DATA_LOCATORS.lastName).clear()
        cy.get(DATA_LOCATORS.lastName).type(testData.notValid.last_name_65_characters).should("have.value", testData.notValid.last_name_65_characters)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' не активна")
        cy.get(DATA_LOCATORS.lastName).clear().type(testData.valid.last_name).should("have.value", testData.valid.last_name)
        
    })

    it('Границы поля "Corporate name" -1 от min значения, оставляем поле пустым', () => {

        cy.get(DATA_LOCATORS.corporateName).clear()
        cy.get(DATA_LOCATORS.buttonSubmit).should('have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' не активна")
    })

    it('Границы поля "Corporate name" вводим min границу, 1 символ', () => {

        cy.get(DATA_LOCATORS.corporateName).clear()
        cy.get(DATA_LOCATORS.corporateName).type(testData.valid.corporate_name_1_character).should("have.value", testData.valid.corporate_name_1_character)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' активна")
    })

    it('Границы поля "Corporate name" -1 от max границы, 63 символа', () => {

        cy.get(DATA_LOCATORS.corporateName).clear()
        cy.get(DATA_LOCATORS.corporateName).type(testData.valid.corporate_name_63_characters).should("have.value", testData.valid.corporate_name_63_characters)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' активна")
    })

    it('Границы поля "Corporate name" max граница, 64 символа', () => {

        cy.get(DATA_LOCATORS.corporateName).clear()
        cy.get(DATA_LOCATORS.corporateName).type(testData.valid.corporate_name_64_characters).should("have.value", testData.valid.corporate_name_64_characters)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' активна")
    })

    it('Границы поля "Corporate name" +1 к max границе, 65 символов', () => {

        cy.get(DATA_LOCATORS.corporateName).clear()
        cy.get(DATA_LOCATORS.corporateName).type(testData.notValid.corporate_name_65_characters).should("have.value", testData.notValid.corporate_name_65_characters)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' не активна")
        cy.get(DATA_LOCATORS.corporateName).clear().type(testData.valid.corporate_name).should("have.value", testData.valid.corporate_name)

    })

    it('Выбор диапазона в поле "Number of users" <50 ', () => {

        cy.get(DATA_LOCATORS.numberOfUsers).click()
        cy.get(DATA_LOCATORS.numberOfUsers0).click()
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' активна")

    })   

    it('Выбор диапазона в поле "Number of users" 51-100 ', () => {

        cy.get(DATA_LOCATORS.numberOfUsers).click()
        cy.get(DATA_LOCATORS.numberOfUsers1).click()
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' активна")

    })   

    it('Выбор диапазона в поле "Number of users" 101-500 ', () => {

        cy.get(DATA_LOCATORS.numberOfUsers).click()
        cy.get(DATA_LOCATORS.numberOfUsers2).click()
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' активна")

    })   

    it('Выбор диапазона в поле "Number of users" 501-1000 ', () => {

        cy.get(DATA_LOCATORS.numberOfUsers).click()
        cy.get(DATA_LOCATORS.numberOfUsers3).click()
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' активна")

    }) 

    it('Выбор диапазона в поле "Number of users" 10001-10000 ', () => {

        cy.get(DATA_LOCATORS.numberOfUsers).click()
        cy.get(DATA_LOCATORS.numberOfUsers4).click()
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' активна")

    })  

    it('Выбор диапазона в поле "Number of users" >10000 ', () => {

        cy.get(DATA_LOCATORS.numberOfUsers).click()
        cy.get(DATA_LOCATORS.numberOfUsers5).click()
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' активна")

    })  


    it('Границы поля "Work email" -1 от min границы до @', () => {

        cy.get(DATA_LOCATORS.workEmail).clear()
        cy.get(DATA_LOCATORS.workEmail).type(testData.valid.email_0_character_local_part).should("have.value", testData.valid.email_0_character_local_part)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' не активна")
    })   

    it('Границы поля "Work email" min граница до @', () => {

        cy.get(DATA_LOCATORS.workEmail).clear()
        cy.get(DATA_LOCATORS.workEmail).type(testData.valid.email_1_character_local_part).should("have.value", testData.valid.email_1_character_local_part)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' активна")
    })  

    it('Границы поля "Work email" -1 от max границы, 63 символа до @', () => {

        cy.get(DATA_LOCATORS.workEmail).clear()
        cy.get(DATA_LOCATORS.workEmail).type(testData.valid.email_63_characters_local_part).should("have.value", testData.valid.email_63_characters_local_part)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' активна")
        
    })   

    it('Границы поля "Work email" max граница, 64 символа до @', () => {

        cy.get(DATA_LOCATORS.workEmail).clear()
        cy.get(DATA_LOCATORS.workEmail).type(testData.valid.email_64_characters_local_part).should("have.value", testData.valid.email_64_characters_local_part)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' активна")
    }) 

    it('Границы поля "Work email" +1 к max границе, 65 символов до @', () => {

        cy.get(DATA_LOCATORS.workEmail).clear()
        cy.get(DATA_LOCATORS.workEmail).type(testData.valid.email_65_characters_local_part).should("have.value", testData.valid.email_65_characters_local_part)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' не активна")
        cy.get(DATA_LOCATORS.workEmail).clear().type(testData.valid.work_email).should("have.value", testData.valid.work_email)  
    
    }) 
    
    it('Границы поля "Phone number" min значения, оставляем поле пустым', () => {

        cy.get(DATA_LOCATORS.phoneNumber).clear()
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' активна")
    })
    
    it('Границы поля "Phone number" 1 допустимый символ', () => {

        cy.get(DATA_LOCATORS.phoneNumber).clear()
        cy.get(DATA_LOCATORS.phoneNumber).type(testData.valid.phone_number_1_character).should("have.value", testData.valid.phone_number_1_character)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' активна")
    }) 

    it('Границы поля "Phone number" -1 от max границы, 63 символа', () => {

        cy.get(DATA_LOCATORS.phoneNumber).clear()
        cy.get(DATA_LOCATORS.phoneNumber).type(testData.valid.phone_number_63_characters).should("have.value", testData.valid.phone_number_63_characters)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' активна")
    })  
    
    it('Границы поля "Phone number" max граница, 64 символа', () => {

        cy.get(DATA_LOCATORS.phoneNumber).clear()
        cy.get(DATA_LOCATORS.phoneNumber).type(testData.valid.phone_number_64_characters).should("have.value", testData.valid.phone_number_64_characters)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' активна")
    })    

    it('Границы поля "Phone number" +1 к max границе, 65 символов', () => {

        cy.get(DATA_LOCATORS.phoneNumber).clear()
        cy.get(DATA_LOCATORS.phoneNumber).type(testData.valid.phone_number_65_characters).should("have.value", testData.valid.phone_number_65_characters)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' не активна")
        cy.get(DATA_LOCATORS.phoneNumber).clear().type(testData.valid.phone_number).should("have.value", testData.valid.phone_number)  
    
    }) 
    
    it('Границы поля "Comments" min значения, оставляем поле пустым', () => {

        cy.get(DATA_LOCATORS.comments).clear()
        cy.get(DATA_LOCATORS.comments).should('not.have.attr', 'disabled')
                cy.log("Проверка, что кнопка 'Submit' активна")
    })
    
    it('Границы поля "Comments" 1 допустимый символ', () => {

        cy.get(DATA_LOCATORS.comments).clear()
        cy.get(DATA_LOCATORS.comments).type(testData.valid.comments_1_character).should("have.value", testData.valid.comments_1_character)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' активна")
    })   

    it('Границы поля "Comments" -1 от max границы, 1999 символов', () => {

        cy.get(DATA_LOCATORS.comments).clear()
        cy.get(DATA_LOCATORS.comments).type(testData.valid.comments_1999_characters).should("have.value", testData.valid.comments_1999_characters)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' активна")
    })   
    
    it('Границы поля "Comments" max граница, 2000 символов', () => {

        cy.get(DATA_LOCATORS.comments).clear()
        cy.get(DATA_LOCATORS.comments).type(testData.valid.comments_2000_characters).should("have.value", testData.valid.comments_2000_characters)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('not.have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' активна")
    })   

    it('Границы поля "Comments" +1 max граница, 2001 символ', () => {

        cy.get(DATA_LOCATORS.comments).clear()
        cy.get(DATA_LOCATORS.comments).type(testData.valid.comments_2001_characters).should("have.value", testData.valid.comments_2001_characters)
                cy.log("Проверка, что введённый символ отображается в поле")
        cy.get(DATA_LOCATORS.buttonSubmit).should('have.attr', 'disabled')
                            cy.log("Проверка, что кнопка 'Submit' не активна")
        cy.get(DATA_LOCATORS.comments).clear().type(testData.valid.comments).should("have.value", testData.valid.comments)  
    })  

})