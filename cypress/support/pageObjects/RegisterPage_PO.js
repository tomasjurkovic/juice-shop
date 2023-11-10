class RegisterPage_PO {
  constructor() {
    this.emailInput = "#emailControl";
    this.passwordInput = "#passwordControl";
    this.repeatPasswordInput = "#repeatPasswordControl";
    this.securityQuestionInput = "#mat-select-value-3";
    this.answerInput = "#securityAnswerControl";
    this.registerBtn = "#registerButton";
  }

  // commands:
  fillRegisterInputFormValid(email, password, question, answer) {
    cy.get(this.emailInput).type(email);
    cy.get(this.passwordInput).type(password);
    cy.get(this.repeatPasswordInput).type(password);
    cy.get(this.securityQuestionInput).select(question);
    cy.get(this.answerInput).type(answer);
  }

  submitRegisterNewAccountForm() {
    cy.get(this.registerBtn).click();
  }
}

export default RegisterPage_PO;
