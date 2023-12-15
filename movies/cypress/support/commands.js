
Cypress.Commands.add('login', (email, password) => {
    cy.get('input[id=email]').type(email);
    cy.get('input[id=password]').type(password);
    // if use get(button), it has the same name as the header button.
    cy.get('form').contains('Login').click();
  });

  
  Cypress.Commands.add('register', (uniqueEmail, password) => {
    cy.get('input[id=email]').type(uniqueEmail);
    cy.get('input[id=password]').type(password);
    cy.get('button').contains('Sign Up').click();
  });

Cypress.Commands.add('requestMovies', (url, variableName) => {
    cy.request(url)
        .its("body")
        .then(response => {
            cy.wrap(response.results).as(variableName);
        });
});

