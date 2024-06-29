/// <reference types="Cypress"/>

import ProfilePage from "./pageObjects/ProfilePage";

describe("Profile page tests", () => {
  before("Init test", () => {
    globalThis.profilePage = new ProfilePage();

    cy.fixture("oneCharacter.json").then((data) => {
      globalThis.character = data;
    });

    cy.fixture("characters.json").then((data) => {
      globalThis.allCharacters = data;
    });
  });

  beforeEach("Load page", () => {
    cy.interceptGetOneCharacter(globalThis.character);
    cy.visit(`${Cypress.env("FRONTEND_ORIGIN")}/profile/1`);
  });

  it("clicking on the Back to Home page button redirects the user to the home page", () => {
    cy.interceptGetAllCharacters(
      globalThis.allCharacters,
      1,
      "",
      "all_characters"
    );
    globalThis.profilePage
      .getBackNavButton()
      .click()
      .then(() => {
        cy.location().should((loc) => {
          expect(loc.pathname).to.equal("/");
        });
      });
  });

  it("clicking on Home breadcrumb redirects the user to the home page", () => {
    cy.interceptGetAllCharacters(
      globalThis.allCharacters,
      1,
      "",
      "all_characters"
    );
    globalThis.profilePage
      .getHomeBreadcrumbLink()
      .click()
      .then(() => {
        cy.location().should((loc) => {
          expect(loc.pathname).to.equal("/");
        });
      });
  });
});
