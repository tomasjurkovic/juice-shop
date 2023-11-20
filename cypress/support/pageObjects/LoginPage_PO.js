class LoginPage_PO {
  constructor() {
    this.emailInput = "#email";
    this.passwordInput = "#password";
    this.registerNewCustomerBtnLink = "a[href*='#/register']";
    this.successfullRegisterToolbar = ".mat-simple-snack-bar-content";
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
}

export default LoginPage_PO;
