Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Higor')
    cy.get('#lastName').type('Torquetti')
    cy.get('#email').type('higor.torquetti@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
})