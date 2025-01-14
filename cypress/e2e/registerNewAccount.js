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

  describe("UI tests", () => {
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
  });

  describe("API tests", () => {
    let token;
    const userCredentials = {
      email: email,
      password: password,
    };

    before(() => {
      cy.fixture("example").then(function (data) {
        globalThis.data = data;
      });
    });

    it("Login with API", () => {
      cy.request(
        "POST",
        "http://localhost:3000/rest/user/login",
        userCredentials
      ).then((response) => {
        expect(response.status).to.eql(200);
        expect(response.body.authentication.umail).to.eql(email);
        cy.log(response.body.authentication.token);
        token = response.body.authentication.token;
        cy.log(token);
      });
    });

    it("Different Test to check if token is available", () => {
      cy.log(token);
      expect(token.length).to.be.greaterThan(10);
    });

    it("Login via Token (non UI}", () => {
      cy.request(
        "POST",
        "http://localhost:3000/rest/user/login",
        userCredentials
      )
        .its("body")
        .then((body) => {
          const tokenExtracted = body.authentication.token;
          cy.wrap(tokenExtracted).as("userToken");
          cy.log("@userToken");

          const userToken = cy.get("@userToken");
          cy.visit("/", {
            onBeforeLoad(browser) {
              browser.localStorage.setItem("token", userToken);
            },
          });

          // verify it exists:
          cy.wait(3000);
          cy.get(".close-dialog").click({ force: true });
          cy.get(".fa-layers-counter").contains(0);
        });
    });
  });
});
