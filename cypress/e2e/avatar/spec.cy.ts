import { runTestServer } from '../../support/testUtils';

describe('Avatar', () => {
  before(() => {
    runTestServer();
  });

  it('should be able to display avatars', () => {
    cy.get('.step').should('have.length', 5);

    cy.get('.step').eq(0).find('.message-avatar').should('have.length', 0);
    cy.get('.step').eq(1).find('.message-avatar').should('have.length', 1);
    cy.get('.step').eq(2).find('.message-avatar').should('have.length', 0);
    cy.get('.step').eq(3).find('.message-avatar').should('have.length', 1);
    cy.get('.step').eq(4).find('.message-avatar').should('have.length', 1);

    cy.get('.element-link').should('have.length', 0);
  });
});
