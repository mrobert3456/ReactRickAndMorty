/// <reference types="Cypress"/>

import HomePage from "./pageObjects/HomePage";
import NotFound from "./pageObjects/NotFound";

describe("Home page tests", () => {
  before("Init test", () => {
    globalThis.homePage = new HomePage();
    globalThis.notFound = new NotFound();

    cy.fixture("characters.json").then((data) => {
      globalThis.characters = data;
    });
  });

  beforeEach("Load page", () => {
    cy.interceptGetAllCharacters(
      globalThis.characters,
      1,
      "",
      "all_characters"
    );
    cy.visit(Cypress.env("FRONTEND_ORIGIN"));
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
      "Rick",
      "all_characters"
    );
    globalThis.homePage.getDataTableSearchBar().then(($el) => {
      cy.wrap($el).type("Rick");
    });

    globalThis.homePage
      .getCustomRowName(globalThis.characters.results[0].id)
      .invoke("text")
      .then((text) => {
        expect(text).to.equal(globalThis.characters.results[0].name);
      });
  });

  it("clicking on a character name will redirect the user to its profile page", () => {
    globalThis.homePage
      .getCustomRowName(globalThis.characters.results[0].id)
      .click()
      .then(() => {
        cy.location().should((loc) => {
          expect(loc.pathname).to.contain(
            `profile/${globalThis.characters.results[0].id}`
          );
        });
      });
  });

  it("clicking on the next page button gets the second page", () => {
    cy.interceptGetAllCharacters(
      {
        info: globalThis.characters.info,
        results: [globalThis.characters.results[2]],
      },
      2,
      "",
      "second_page"
    );
    globalThis.homePage.getNextPageButton().click();

    cy.wait("@second_page").then((interception) => {
      assert.deepEqual(
        interception.response.body.results[0],
        globalThis.characters.results[2]
      );
    });
  });

  it("next page button is disabled on the second page", () => {
    cy.interceptGetAllCharacters(
      {
        info: globalThis.characters.info,
        results: [globalThis.characters.results[2]],
      },
      2,
      "",
      "second_page"
    );
    globalThis.homePage.getNextPageButton().click();

    globalThis.homePage.getNextPageButton().should("be.disabled");
  });

  it("previous page button is enabled on the second page", () => {
    cy.interceptGetAllCharacters(
      {
        info: globalThis.characters.info,
        results: [globalThis.characters.results[2]],
      },
      2,
      "",
      "second_page"
    );
    globalThis.homePage.getNextPageButton().click();

    globalThis.homePage.getPrevPageButton().should("be.enabled");
  });

  it("previous page button is disabled on the first page", () => {
    globalThis.homePage.getPrevPageButton().should("be.disabled");
  });

  it("next page button is enabled on the first page", () => {
    globalThis.homePage.getNextPageButton().should("be.enabled");
  });

  it("navigating to a unknown page displays notfound component", () => {
    cy.visit(Cypress.env("FRONTEND_ORIGIN") + "/somepage").then(() => {
      globalThis.notFound.getNotFound().should("exist");
    });
  });
});
