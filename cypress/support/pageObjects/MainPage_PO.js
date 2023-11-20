class MainPage_PO {
  constructor() {
    this.accountBtn = "#navbarAccount";
    this.loginBtn = "#navbarLoginButton";
    this.cancelModalBtn = ".close-dialog";
    this.userProfilListItem =
      '.mat-menu-content > [aria-label="Go to user profile"]';
    this.logoutBtn = "#navbarLogoutButton";
  }

  // commands:
  hideModalWindow() {
    cy.get(this.cancelModalBtn).click();
  }

  goToLoginPage() {
    cy.get(this.accountBtn).click();
    cy.get(this.loginBtn).click();
  }

  verifyUserIsLoggedIn(email) {
    cy.get(this.accountBtn).click();
    cy.get(this.userProfilListItem).invoke("text").should("include", email);
  }

  logout() {
    cy.get(this.logoutBtn).click({ force: true });
  }
}

export default MainPage_PO;
