/// <reference types="cypress" />

import LoginPage_PO from "../support/pageObjects/LoginPage_PO";
import MainPage_PO from "../support/pageObjects/MainPage_PO";
import RegisterPage_PO from "../support/pageObjects/RegisterPage_PO";

const mainPage_PO = new MainPage_PO();
const loginPage_PO = new LoginPage_PO();
const registerPage_PO = new RegisterPage_PO();

describe("Juice Shop Login tests", () => {
  const email = Math.random().toString(35) + "tomas@jurkovic.sk";
  const password = "strongP@$$w0rd";
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit("/");
    mainPage_PO.hideModalWindow();
  });

  it("Register new account", () => {
    mainPage_PO.goToLoginPage();
    loginPage_PO.registerNewCustomer();
    registerPage_PO.fillRegisterInputFormValid(
      email,
      password,
      "Your eldest siblings middle name?",
      "Chelsea"
    );
    registerPage_PO.submitRegisterNewAccountForm();
    loginPage_PO.checkNewAccountWasCreatedSuccessfully();
  });

  it("Login with newly created account", () => {
    mainPage_PO.goToLoginPage();
    loginPage_PO.loginWithCredentials(email, password);
    mainPage_PO.verifyUserIsLoggedIn(email);
    mainPage_PO.logout();
  });

  it("Login with API", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/rest/user/login",
      body: {
        email: email,
        password: password,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.authentication.umail).to.eql(email);
    });
  });
});
