
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


    it('Deve realizar Login', () => {

        const meuid=Cypress.env('createdOng')
        cy.log(meuid)
        cy.visit('/')
        cy.get('input').type(meuid)
        cy.get('.button').click()

    })



})

