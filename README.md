# React app uses the Rick and Morty API

### ⚙ About

This application uses the [Rick and Morty API](https://rickandmortyapi.com/documentation/)

# 📦 Installation

## This Repository

Download this repository by running:

```
git clone https://github.com/mrobert3456/ReactRickAndMorty.git
cd ReactRickAndMorty
```

## ⚡ Software Dependencies

- [Node.js](https://nodejs.org/en)

Create a `.env.developlment` and `.env.production` file in the project's root folder with the following structure:

```
REACT_APP_API_URL=
```

Install dependecies running:
`npm install`

To start the development server run:
`npm start`

To run the application with nginx on `localhost:8080` run:
`docker compose up`

To deploy the application with `minikube` run the following commands:

```
kubectl apply -f deploy/app-config.yaml
kubectl apply -f deploy/deployment.yaml
kubectl apply -f deploy/service.yaml

minikube service app-service
```

or run `./deploy/deploy_app.sh`

[Minikube](https://minikube.sigs.k8s.io/docs/) - local Kubernetes cluster

## ⚡ Running tests

To run the e2e test in headless mode, start the application and then run:
`npx cypress run`

To run the unit test run:
`npm test`

## Resources

[Chakra UI](https://v2.chakra-ui.com/) - Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications

[Rick and Morty API](https://rickandmortyapi.com/documentation/) - API for getting the episodes, characters and locations from the Rick and Morty TV show

[Cypress](https://www.cypress.io/) - easily create tests for your modern web applications, debug them visually, and automatically run them in your continuous integration builds.

[Jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity
