describe('Hits Home Page', () => {
  it('passes', () => {
    cy.visit('https://hangryhippo.quantic.host/');
  });
  it('displays the Welcome message', () => {
    cy.contains('Handhelds').click();
    cy.contains('Cheese Burger');
    cy.contains('Fajita Tacos');
    cy.contains('Appeteasers').click();
    cy.contains('Tater Tots');
    cy.contains('Buffalo Wings');
    cy.contains('Cheese Burger').should('not.exist');
    cy.contains('Fajita Tacos').should('not.exist');
    cy.get('h1').should(
      'have.text',
      "Welcome to Hangry Hippo! Hungry? Let's get started!"
    );
  });
  it('shows the Menu items', () => {
    //Check for the Appeteasers menu item
    cy.get('[data-testid=category-item]')
      .should('be.visible')
      .and('contain', 'Appeteasers');

    //Check for the Handhelds menu item
    cy.get('[data-testid=category-item]')
      .should('be.visible')
      .and('contain', 'Handhelds');
  });
});

describe('Hits Order Page', () => {
  it('passes', () => {
    cy.visit('https://hangryhippo.quantic.host/order');
  });
  it('shows Your Order title', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    //Check to see if 'Your Order' exists
    cy.get('h3').should('have.text', 'Your Order');
  });
});
