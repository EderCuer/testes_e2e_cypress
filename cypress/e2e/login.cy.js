describe('Login', () => {
  it('successfully log in', () => {
    cy.guiLogin(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    cy.contains('h1', 'Your Notes').should('be.visible')
    cy.contains('a', 'Create a new note').should('be.visible')
  })
})