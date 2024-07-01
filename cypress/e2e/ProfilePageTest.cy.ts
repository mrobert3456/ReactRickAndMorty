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
    cy.fixture("oneEpisode.json").then((data) => {
      globalThis.episode = data;
    });
  });

  beforeEach("Load page", () => {
    cy.interceptGetOneCharacter(globalThis.character);
    cy.interceptGetOneEpisode(globalThis.episode);
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

  it("gets the character data ", () => {
    cy.wait(`@character_${globalThis.character.id}`).then((interception) => {
      expect(interception.response.statusCode).to.equal(200);

      expect(interception.response.body).to.have.property("id");
      expect(interception.response.body).to.have.property("name");
      expect(interception.response.body).to.have.property("episode");
      expect(interception.response.body).to.have.property("image");
      expect(interception.response.body).to.have.property("location");
      expect(interception.response.body).to.have.property("gender");
    });
  });

  it("gets the episode data ", () => {
    cy.wait(`@episode_${globalThis.episode.id}`).then((interception) => {
      expect(interception.response.statusCode).to.equal(200);

      expect(interception.response.body).to.have.property("id");
      expect(interception.response.body).to.have.property("name");
      expect(interception.response.body).to.have.property("episode");
    });
  });
});
