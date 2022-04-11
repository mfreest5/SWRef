

describe('Verifying homepage information', () =>  {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl)
    })

    it('Confirms tab title is "Macs Star Wars Referendum"', ()  => {
        cy.title().should('eq', 'Macs Star Wars Referendum')

    })

    it('Displays boba information after clicking', () => {
        cy.get('#boba').click()
        cy.get('#field1').should('be.visible')
        cy.get('#field1').should('contain', 'Boba Fett')

    })

//     it('Redirects to the feedback page after selecting Give Feedback', () => {
//         cy.get('[href="./feedback.html"]').should('exist').click()
//         cy.url().should('contain', '/feedback')

//     })

    it('Redirects to the feedback page after selecting Give About Me', () => {
        cy.get('[href="./aboutme.html"]').should('exist').then(aboutme => {
            const href= aboutme.attr('href')
            console.log(href)
            cy.request(href).its('status').should('eq', 200)
        })
        // cy.get('[href="./aboutme.html"]').should('exist').click()
        // cy.log('We redirected')
        // cy.url().should('contain', '/aboutme')

    })

    it('Redirects to the feedback page after selecting Databank', () => {
        cy.validateLink('[href="https://www.starwars.com/databank"]')

        // cy.get('[href="https://www.starwars.com/databank"]').should('exist').then(databank => {
        //     const href= databank.attr('href')
        //     console.log(href)
        //     cy.request(href).its('status').should('eq', 200)
        // })
        // cy.get('[href="https://www.starwars.com/databank"]').should('exist').click()
        // cy.log('We redirected')
        // cy.url().should('contain', 'https://www.starwars.com/databank')

    })

    // it('Luke displays lukes information', () => {
    //     cy.get('#referendum').find('')

    // })

    
})


     