describe('Verifying homepage information', () =>  {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5501/')
    })

    it('Confirms tab title is "Macs Star Wars Referendum"', ()  => {
        cy.title().should('eq', 'Macs Star Wars Referendum')

    })

    it('Displays boba information after clicking', () => {
        cy.get('#boba').click()
        cy.get('#field1').should('be.visible')
        cy.get('#field1').should('contain', 'Boba Fett')

    })

    it('Redirects to the feedback page after selecting Give Feedback', () => {
        cy.get('[href="./feedback.html"]').should('exist').click()
        cy.url().should('contain', 'http://127.0.0.1:5501/feedback')

    })

    it('Redirects to the feedback page after selecting Give About Me', () => {
        cy.get('[href="./aboutme.html"]').should('exist').click()
        cy.log('We redirected')
        // cy.url().should('contain', 'http://127.0.0.1:5501/aboutme')

    })

    it('Redirects to the feedback page after selecting Give About Me', () => {
        cy.get('[href="https://www.starwars.com/databank"]').should('exist').click()
        cy.log('We redirected')
        cy.url().should('contain', 'https://www.starwars.com/databank')

    })
})


     