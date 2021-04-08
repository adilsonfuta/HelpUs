// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('createOng',()=>{
      cy.request({
            method: 'POST',
            url: 'http://localhost:3333/ongs',
            body: {
                city: "Viana",
                email: "ad@tm.com",
                name: "NovaDev Treinamento",
                uf: "vn",
                whatsapp: "222453212"
            }
        }).then(response=>{
            expect(response.body.id).is.not.null
            cy.log(response.body.id)
            Cypress.env('createdOngID',response.body.id)
            Cypress.env('createdOngName',response.body.name)

        })
})


Cypress.Commands.add('Login',()=>{
    
    cy.visit('http://localhost:3000/profile',{
        onBeforeLoad: (browser) => {
            browser.localStorage.setItem('ongId',Cypress.env('createdOngID'))               
            browser.localStorage.setItem('ongId',Cypress.env('createdOngName'))
           // browser.localStorage.setItem('ongId','NovaDev Treinamento')           
        }
     });

})

  // 'Authorization': '228b4b19'
Cypress.Commands.add('InserirCaso',()=>{
    cy.request({
          method: 'POST',
          url: 'http://localhost:3333/incidents',
          headers: {
              'Accept-Language': 'pt-Br',            
              'Authorization': `${Cypress.env('createdOngID')}`,
         },
          body: {
            descriptions: "Rabbit sick e vai morrer",
            title: "Rabbit",
            value: "2341"
          }
      }).then(response=>{
          expect(response.body.id).is.not.null
          cy.log(response.body.id)
          Cypress.env('createdIncidentID',response.body.id)         

      })
})

