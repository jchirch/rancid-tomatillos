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

Cypress.Commands.add('checkVoteUpdate', (voteSelector, upvote = true, expectedCount) => {
    cy.get(voteSelector).should('contain', expectedCount);
  
    if (upvote) {
      cy.get('[data-cy="upvote-button"]').first().click();
    } else {
      cy.get('[data-cy="downvote-button"]').first().click();
    }
  
    cy.get(voteSelector).should('contain', upvote ? expectedCount + 1 : expectedCount - 1);
  });