/// <reference path="../support/commands.d.ts" />

describe('Login', () => {
  it('successfully log in', () => {
    cy.sessionLogin(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    cy.visit('/')

    cy.contains('h1', 'Your Notes').should('be.visible')
    cy.contains('a', 'Create a new note').should('be.visible')
  })
})