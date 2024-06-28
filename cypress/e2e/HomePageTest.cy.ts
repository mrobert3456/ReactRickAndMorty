/// <reference types="Cypress"/>

import HomePage from "./pageObjects/HomePage";

describe("Home page tests", () => {
  before("Init test", () => {
    globalThis.homePage = new HomePage();

    cy.fixture("characters.json").then((data) => {
      globalThis.characters = data;
    });
  });
  beforeEach("Load page", () => {
    cy.interceptGetAllCharacters(globalThis.characters, 1, "");
    cy.visit("http://localhost:3000/");
  });
  it("displays characters table", () => {
    globalThis.homePage.getDataTable().should("be.visible");
  });

  it("gets characters data", () => {
    cy.wait("@all_characters").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
      expect(interception.response.body).to.have.property("info");

      expect(interception.response.body).to.have.property("results");
    });
  });

  it("filters characters table by name", () => {
    cy.interceptGetAllCharacters(
      {
        info: globalThis.characters.info,
        results: [globalThis.characters.results[0]],
      },
      1,
      "Rick"
    );
    globalThis.homePage.getDataTableSearchBar().then(($el) => {
      cy.wrap($el).type("Rick");
    });

    globalThis.homePage
      .getCustomRowName(1)
      .invoke("text")
      .then((text) => {
        expect(text).to.equal("Rick Sanchez");
      });
  });

  it("clicking on a character name will redirect the user to its profile page", () => {});
});
