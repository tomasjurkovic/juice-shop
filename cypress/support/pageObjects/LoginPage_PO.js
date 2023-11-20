class LoginPage_PO {
  constructor() {
    this.emailInput = "#email";
    this.passwordInput = "#password";
    this.registerNewCustomerBtnLink = "a[href*='#/register']";
    this.successfullRegisterToolbar = ".mat-simple-snack-bar-content";
    this.loginBtn = "#loginButton";
  }

  // commands:
  registerNewCustomer() {
    cy.get(this.registerNewCustomerBtnLink).click({ force: true });
  }

  checkNewAccountWasCreatedSuccessfully() {
    cy.get(this.successfullRegisterToolbar)
      .invoke("text")
      .should("include", "Registration completed successfully");
  }

  loginWithCredentials(email, password) {
    cy.get(this.emailInput).type(email);
    cy.get(this.passwordInput).type(password);
    cy.get(this.loginBtn).click({ force: true });
  }
}

export default LoginPage_PO;
