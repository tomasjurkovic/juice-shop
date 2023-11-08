class LoginPage_PO {
  constructor() {
    this.emailInput = "#email";
    this.passwordInput = "#password";
    this.registerNewCustomerBtnLink = "a[href*='#/register']";
  }

  // commands:
  registerNewCustomer() {
    cy.get(this.registerNewCustomerBtnLink).click({ force: true });
  }
}

export default LoginPage_PO;
