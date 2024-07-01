/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

declare namespace Cypress {
  interface Chainable {
    interceptGetAllCharacters(
      CharactersData,
      page,
      name,
      requestId
    ): Chainable<void>;

    interceptGetOneCharacter(CharacterData): Chainable<void>;
    interceptGetOneEpisode(EpisodeData): Chainable<void>;
  }
}

Cypress.Commands.add(
  "interceptGetAllCharacters",
  (CharactersData, page, name, requestId) => {
    cy.intercept(
      {
        method: "GET",
        url: `${Cypress.env("API_URL")}/character/?page=${page}&name=${name}`,
      },
      {
        statusCode: 200,
        body: CharactersData,
      }
    ).as(requestId);
  }
);

Cypress.Commands.add("interceptGetOneCharacter", (CharacterData) => {
  cy.intercept(
    {
      method: "GET",
      url: `${Cypress.env("API_URL")}/character/${CharacterData.id}`,
    },
    {
      statusCode: 200,
      body: CharacterData,
    }
  ).as(`character_${CharacterData.id}`);
});

Cypress.Commands.add("interceptGetOneEpisode", (EpisodeData) => {
  cy.intercept(
    {
      method: "GET",
      url: `${Cypress.env("API_URL")}/episode/${EpisodeData.id}`,
    },
    {
      statusCode: 200,
      body: EpisodeData,
    }
  ).as(`episode_${EpisodeData.id}`);
});
