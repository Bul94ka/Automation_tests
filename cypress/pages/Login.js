export class Login {
    navigate() {
      cy.visit("https://www.edu.goit.global/account/login");
    }
  
    validateLoginTitle() {
      cy.get(".css-10stgr7 > .css-c1vj7d").should("be.visible");
      cy.get(".css-10stgr7 > .css-c1vj7d").should("have.text", "Login");
    }
  
    validateInputs() {
      cy.get("#user_email").should("be.visible");
      cy.get("#user_password").should("be.visible");
    }
  
    validateButton() {
      cy.get(".eckniwg2").should("be.visible");
    }
  
    validatePasswordLink() {
      cy.get(".css-1f1fv1i > .css-1qrvie4").should("be.visible");
      cy.get(".css-1f1fv1i > .css-1qrvie4").should("have.text", "I can't remember the password");
    }
  }
  