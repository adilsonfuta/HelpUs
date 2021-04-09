
/// <reference types="cypress" /> 

describe('Ongs Testes', () => {

it('deve realizar cadastro', () => {
        cy.visit('/register')
        cy.get('[placeholder="Nome da ONG"]').type('Leão').should('not.be.NaN')
        cy.get('[type="email"]').type('teste@mailinator.com')
        cy.get('[placeholder="WhatsApp"]').type('934567890')
        cy.get('[placeholder="Cidade"]').type('Luanda')
        cy.get('[placeholder="UF"]').type('LD')

       // pode ser removido pois no index.js ja tem um padrao
        cy.server()
        cy.route('POST', '**/ongs').as('Postongs')

        cy.get('.button').click()

        cy.wait('@Postongs').then((xhr) => {
            expect(xhr.status).be.eq(200)
            expect(xhr.response.body).has.property('id')
            expect(xhr.response.body.id).is.not.null
        })
    })


    it.skip('Deve realizar Login', () => {

        // const meuid=Cypress.env('createdOng')
        // cy.log(meuid)

        cy.visit('/')
        cy.get('input').type(Cypress.env('createdOngID'))
        cy.get('.button').click()

    })


    it.skip('devem poder fazer logout',()=>{
      cy.Login()  
      cy.get('.logout').click();

    });


    it.skip(' cadastrar casos Ongs', ()=>{
       
        cy.Login();
        cy.get('.button').click();

        cy.get('[placeholder="Titulo do Caso"]').type('animal abandonado');
        cy.get('textarea').type('animal precisa de apoio');
        cy.get('[placeholder="Valor em Reais"]').type('3000');
        
        // POST 200 /incidents
        cy.route('POST','**/incidents').as('newIncident');

        cy.get('.button').click();

        cy.wait('@newIncident').then((xhr)=>{
            expect(xhr.status).be.eq(200)
            expect(xhr.response.body).has.property('id')
            expect(xhr.response.body.id).is.not.null
        })
    })


    it('excluir caso Ongs', ()=>{

        cy.InserirCaso()
        cy.Login()
        
       // cy.get('ul > :nth-child(1) > button').click
    })



})

