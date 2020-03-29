// cypress/integration/counter_spec.js

context('Counter', () => {
  it('loads', () => {
    cy.visit('');
    cy.contains('Times clicked: 0');
  });
});
