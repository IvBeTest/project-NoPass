const faker = require("faker"); 

describe('34 test random class equivalence check', () => {
        before(() => {
                cy.visit('/');
        });

    it('General page!', () => {
        
        cy.get('.contact-us-header').scrollIntoView()

        // function firstName() {
        //         var result = '';
        //         var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        //         var charactersLength = characters.length;
              
        // function getRandomFloat(min, max) {
        //         return Math.floor(Math.random() * (max - min) + min);
        //         }
        //         let length = getRandomFloat(1, 64)
              
        //         for ( var i = 0; i < length; i++ ) {
        //                 result += characters.charAt(Math.floor(Math.random() * 
        //                 charactersLength));
        //         }
        //         return result;
        //       }

              
        let firstname = faker.name.firstName()

        cy.get('#mat-input-0').type(firstname)
                        cy.log("Заполняем поле 'First name', вводим рандомное значение, диапазон 1-64 символа.")       


        // function lastName() {
        //         var result = '';
        //         var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        //         var charactersLength = characters.length;
              
        // function getRandomFloat(min, max) {
        //         return Math.floor(Math.random() * (max - min) + min);
        //         }
        //         let length = getRandomFloat(1, 64)
              
        //         for ( var i = 0; i < length; i++ ) {
        //                 result += characters.charAt(Math.floor(Math.random() * 
        //                 charactersLength));
        //         }
        //         return result;
        //       }
        let lastname = faker.name.firstName()

        cy.get('#mat-input-1').type(lastname)
                cy.log("Заполняем поле 'Last name', вводим рандомное значение, диапазон 1-64 символа.")


        function corporateName() {
                var result = '';
                var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
              
        function getRandomFloat(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
                }
                let length = getRandomFloat(1, 64)
              
                for ( var i = 0; i < length; i++ ) {
                        result += characters.charAt(Math.floor(Math.random() * 
                        charactersLength));
                }
                return result;
              }
        cy.get('#mat-input-2').type(corporateName())
                cy.log("Заполняем поле 'Corporate name', вводим рандомное значение, диапазон 1-64 символа.")

      
        var number = '100000000'
        var num_len = Math.floor(Math.random() * number.length)
        var num_user = number.slice(0, num_len)
        cy.get('#mat-input-3').type(num_user)
                cy.log("Заполняем поле 'Number of users', вводим рандомное значение, диапазон 1-100000000.")



        //const faker = require('faker')
        const randomEmail1 = faker.internet.email()

        cy.get('#mat-input-4').type(randomEmail1)
                cy.log("Заполняем поле 'Work email', вводим рандомное значение.")



        function phone_randomNumberLength(min, max) {
        min = Math.ceil(1); 
        max = Math.floor(64); 
        return '7'.repeat(Math.floor(Math.random() * (max - min)) + min);
        }       
        cy.get('#mat-input-5').type(phone_randomNumberLength(1,64))
                cy.log("Заполняем поле 'Phone number', вводим рандомное значение, диапазон 1-64 символа.")



        function comments() {
                var result = '';
                var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                      
        function getRandomFloat(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
                }
                let length = getRandomFloat(1, 2000)
                      
                for ( var i = 0; i < length; i++ ) {
                        result += characters.charAt(Math.floor(Math.random() * 
                        charactersLength));
                }
                return result;
                }
        cy.get('#mat-input-6').type(comments())
                cy.log("Заполняем поле 'Comments', вводим рандомное значение, диапазон 1-2000 символа.")


        cy.get('.outline-form > .mat-focus-indicator').click()
                cy.log("Форма заполнена валидными данными и отправлена.")  
        cy.get('.mat-snack-bar-container').contains("Thank you for contacting us, we'll get back to you as soon as possible")
                cy.log('Проверка сообщения об успешной отправке.')      
      
    })
})