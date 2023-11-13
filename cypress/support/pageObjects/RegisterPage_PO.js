class RegisterPage_PO {
  constructor() {
    this.emailInput = "#emailControl";
    this.passwordInput = "#passwordControl";
    this.repeatPasswordInput = "#repeatPasswordControl";
    this.securityQuestionField = "#mat-select-2";
    this.securityQuestionInput = "mat-select-value-3";
    this.answerInput = "#securityAnswerControl";
    this.option1 = "#mat-option-3";
    this.option2 = "#mat-option-4";
    this.option3 = "#mat-option-5";
    this.option4 = "#mat-option-6";
    this.option5 = "#mat-option-7";
    this.option6 = "#mat-option-8";
    this.option7 = "#mat-option-9";
    this.option8 = "#mat-option-10";

    this.registerBtn = "#registerButton";
  }

  // commands:
  fillRegisterInputFormValid(email, password, question, answer) {
    cy.get(this.emailInput).type(email);
    cy.get(this.passwordInput).type(password);
    cy.get(this.repeatPasswordInput).type(password);
    cy.get(this.securityQuestionField).click();
    if ((this.question = "Your eldest siblings middle name?")) {
      cy.get(this.option1).click();
    }
    cy.get(this.answerInput).type(answer);
  }

  submitRegisterNewAccountForm() {
    cy.get(this.registerBtn).click();
  }
}

export default RegisterPage_PO;
