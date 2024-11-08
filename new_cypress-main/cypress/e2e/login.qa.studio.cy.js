describe('Проверка авторизации', function () {

 
    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
     })

     it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#forgotForm > .header').contains('Восстановите пароль');
        cy.get('#mailForgot').type('testmail@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
     })

     it('Правильный логин и НЕправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('23iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
     })

     it('НЕправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('negerman@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
     })

     it('Ошибка валидации логина и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
     })

     it('Приведение к строчным буквам логина и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
     })
 
 
 })
 
 
 // npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome