describe('Verifying homepage information', () =>  {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5501/')
    })

    it('Confirms tab title is "Macs Star Wars Referendum"', ()  => {
        cy.title().should('eq', 'Macs Star Wars Referendum')

    })
})


     