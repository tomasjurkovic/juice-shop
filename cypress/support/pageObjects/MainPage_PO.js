class MainPage_PO {
  constructor() {
    this.accountBtn = "#navbarAccount";
    this.loginBtn = "#navbarLoginButton";
    this.cancelModalBtn = ".close-dialog";
  }

  // commands:
  hideModalWindow() {
    cy.get(this.cancelModalBtn).click();
  }

  goToCreateNewAccountPage() {
    cy.get(this.accountBtn).click();
    cy.get(this.loginBtn).click();
  }
}

export default MainPage_PO;
