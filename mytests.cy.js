describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
 
     })
      
      it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('hope8484@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
       it('Верный логин и неверный пароль', function () {
         cy.visit('/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio!');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
       it('Неверный логин и верный пароль', function () {
        cy.visit('/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#mail').type('gurman@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
 
       it('Валидация на наличие @', function () {
         cy.visit('/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#pass').type('iLoveqastudio');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
       it('Верный пароль и верный логин', function () {
        cy.visit('/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

     }) 
        
 })
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome

 //1.
// а) Ввести правильный логин
// б) Ввести правильный пароль
// в) Нажать войти
// г) Проверить нужный текст и наличие кнопки крестик
//2.
// а) Нажать «Забыли пароль»
// б) Ввести любой имейл
// в) Проверка, что получили нужный текст и есть кнопка крестика
//3.
// а) Ввести правильный логин
// б) Ввести НЕправильный пароль
// в) Нажать войти
// г) Проверить нужный текст и наличие кнопки крестик
//4.
// а) Ввести НЕправильный логин
// б) Ввести правильный пароль
// в) Нажать войти
// г) Проверить нужный текст и наличие кнопки крестик
//5.
// а) Ввести логин без @
// б) Ввести правильный пароль
// в) Нажать войти
// г) Проверить, что получаем текст с ошибкой
//6.
// а) Ввести логин GerMan@Dolnikov.ru
// б) Ввести правильный пароль
// в) Нажать войти
// г) Проверить, что авторизация успешна (текст именно «Авторизация прошла успешно» и наличие кнопки крестик)