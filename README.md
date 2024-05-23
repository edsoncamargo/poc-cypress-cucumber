# Cypress com Cucumber (POC)

This is a Proof of Concept (POC) demonstrating the integration of Cypress with Cucumber, allowing the use of Gherkin to describe tests more clearly. This POC was inspired by a video from Eric Wendel about Cypress, using the site he provided for testing.
Additionally, this POC was used to explore how GitHub Actions CI works, and a YAML file was created to run Cypress E2E tests automatically.

## Credits

This project was inspired by the work of Eric Wendel. Special thanks to him for providing valuable resources and insights on Cypress.

## Technology

The following are the key technologies and tools used in the development of this project:

- **cypress**: A next-generation front-end testing tool built for the modern web. Cypress is fast, reliable, and easy to use for testing web applications.
- **cypress-cucumber-preprocessor:**: A preprocessor that integrates Cucumber with Cypress, allowing you to write tests in Gherkin syntax.
- **@badeball/cypress-cucumber-preprocessor**: A preprocessor for Cypress that enables the use of Cucumber, allowing you to write your test specifications in Gherkin.
- **@bahmutov/cypress-esbuild-preprocessor**: A preprocessor that uses esbuild to bundle and transpile your Cypress tests, making the process faster and more efficient.

## Installation

To run the app locally, follow these steps:

Clone the repository:

```bash
git clone https://github.com/edsoncamargo/poc-cypress-cucumber.git
cd your-path/https://github.com/edsoncamargo/poc-cypress-cucumber
```

Next, follow the steps below:

1. Install the dependencies:

```bash
   npm install
```

2. Start the tests:

```bash
    npm run cypress:web
```

## Continuous Integration

## Contribution
This project includes a GitHub Actions workflow to automatically run Cypress E2E tests. The configuration file is located at .github/workflows/cypress-tests.yml. The workflow is triggered on pushes and pull requests to the main branch.

You are welcome to contribute to the development of this project. If you find bugs, wish to add new features, or improve usability, feel free to open an issue or submit a pull request.

## Contact

- Name: Edson Camargo Menezes
- Email: contact@edsoncamargo.dev

Enjoy using **Cypress com Cucumber (POC)!**
