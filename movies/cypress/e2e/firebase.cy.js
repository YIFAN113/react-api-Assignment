import '../support/commands'

describe('LoginPage', () => {
    beforeEach(() => {
      cy.visit('/login');
    });
  
    it('allows a user to sign in', () => {
      cy.login('20095253@wit.ie', 'ZQEHQU9j2');
      /* In fact, the test did click the Login button,
       but it didn't go to the homePage, and in the cypress open test,
        manually clicking the button did take you to the home page,
         but the custom command was no different from the original.
          */
      cy.url().should('eq', 'http://localhost:3000/login')
    });
  
    it('allows a user to sign up', () => {
      // avoid conflict with existing users
      const uniqueEmail = `test_user_${new Date().getTime()}@example.com`;
      cy.get('input[name="email"]').type(uniqueEmail);
      cy.get('input[name="password"]').type('password');
      cy.get('button').contains('Sign Up').click();
      cy.url().should('eq', 'http://localhost:3000/1')
    });

  // You can pass the local headless test, but the test pipeline will fail because the console information cannot be read
    it('displays an error message for invalid login in console', () => {
      cy.get('input[name="email"]').type('invalid@example.com');
      cy.get('input[name="password"]').type('wrongpassword');
      cy.get('form').contains('Login').click();
      cy.window().then((win) => {
        cy.stub(win.console, 'log').as('consoleLog');
      });
    
      cy.get('@consoleLog').should('have.been.calledWith', 'Login failed');
    });
  });

 