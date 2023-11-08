/// <reference types="cypress" />

import LoginPage_PO from "../support/pageObjects/LoginPage_PO";
import MainPage_PO from "../support/pageObjects/MainPage_PO";

const mainPage_PO = new MainPage_PO();
const loginPage_PO = new LoginPage_PO();

describe("Juice Shop Login tests", () => {
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
    mainPage_PO.goToCreateNewAccountPage();
    loginPage_PO.registerNewCustomer();
  });
});
