import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { colors, RegisterForm } from "../../../../support/register-form";

const registerForm = new RegisterForm();
// TESTANDO TRIGGER DO GITHUB ACTIONS

describe("Image Registration", () => {
  Given(`I am on the image registration page`, () => {
    cy.clearAllLocalStorage();
    cy.visit("/");
  });

  describe("Submitting an image with invalid inputs", () => {
    const input = {
      title: "",
      url: "",
    };

    before(() => {
      cy.visit("/");
    });

    after(() => {
      cy.clearAllLocalStorage();
    });

    When(`I enter "" in the title field - submitWithInvalidInputs 1`, () => {
      registerForm.typeTitle(input.title);
    });

    Then(`I enter "" in the URL field - submitWithInvalidInputs 1`, () => {
      registerForm.typeUrl(input.url);
    });

    Then(`I click the submit button - submitWithInvalidInputs 1`, () => {
      registerForm.clickSubmit();
    });

    Then(
      `I should see "Please type a title for the image" message above the title field - submitWithInvalidInputs 1`,
      () => {
        registerForm.elements
          .titleFeedback()
          .should("contains.text", "Please type a title for the image");
      }
    );

    Then(
      `I should see "Please type a valid URL" message above the imageUrl field - submitWithInvalidInputs 1`,
      () => {
        registerForm.elements
          .imageUrlFeedback()
          .should("contains.text", "Please type a valid URL");
      }
    );

    Then(
      `I should see an exclamation icon in the title and URL fields - submitWithInvalidInputs 1`,
      () => {
        registerForm.elements.titleInput().should(([element]) => {
          const styles = window.getComputedStyle(element);
          const border = styles.getPropertyValue("border-right-color");
          assert.strictEqual(border, colors.errors);
        });
      }
    );
  });

  describe("Submitting an image with valid inputs using enter key", () => {
    const input = {
      title: "Lion",
      url: "https://www.krugerpark.co.za/images/black-maned-lion-shem-compion-786x500.jpg",
    };

    before(() => {
      cy.clearAllLocalStorage();
      cy.visit("/");
    });

    after(() => {
      cy.clearAllLocalStorage();
    });

    When(`I enter "Lion" in the title field - submitWithEnterKey 1`, () => {
      registerForm.typeTitle(input.title);
    });

    Then(`I hit enter to submit the form - submitWithEnterKey 1`, () => {
      registerForm.inputTitleEnter();
    });

    Then(
      `I should see a check icon in the title field - submitWithEnterKey 1`,
      () => {
        registerForm.elements.titleInput().should(([element]) => {
          const styles = window.getComputedStyle(element);
          const border = styles.getPropertyValue("border-right-color");
          assert.strictEqual(border, colors.success);
        });
      }
    );

    When(`I enter a {string} in the URL field - submitWithEnterKey 1`, () => {
      registerForm.typeUrl(input.url);
    });

    Then(
      `I should see a check icon in the {string} field - submitWithEnterKey 1`,
      () => {
        registerForm.elements.imageUrlInput().should(([element]) => {
          const styles = window.getComputedStyle(element);
          const border = styles.getPropertyValue("border-right-color");

          assert.strictEqual(border, colors.success);
        });
      }
    );

    Then(`I hit enter to submit the form - submitWithEnterKey 2`, () => {
      registerForm.inputUrlEnter();
    });

    Then(
      `the list of registered images should be updated with the new item - submitWithEnterKey 1`,
      () => {
        registerForm.elements.cardList().children().should("have.length", 4);
        registerForm.elements
          .cardList()
          .children()
          .last()
          .find(".card-img")
          .should("have.attr", "src", input.url);
        registerForm.elements
          .cardList()
          .children()
          .last()
          .find(".card-title")
          .should("contains.text", input.title);
      }
    );

    Then(
      `the new item should be stored in the localStorage - submitWithEnterKey 1`,
      () => {
        cy.getAllLocalStorage().should((ls) => {
          const currentLs = ls[window.location.origin];
          const elements = JSON.parse(Object.values(currentLs));
          const lastElement = elements[elements.length - 1];

          assert.deepStrictEqual(lastElement, {
            title: input.title,
            imageUrl: input.url,
          });
        });
      }
    );

    Then(`the inputs should be cleared - submitWithEnterKey 1`, () => {
      registerForm.elements.titleInput().should("be.empty");
      registerForm.elements.imageUrlInput().should("be.empty");
    });
  });

  describe("Submitting an image and updating the list", () => {
    const input = {
      title: "Lion",
      url: "https://www.krugerpark.co.za/images/black-maned-lion-shem-compion-786x500.jpg",
    };

    before(() => {
      cy.clearAllLocalStorage();
      cy.visit("/");
    });

    after(() => {
      cy.clearAllLocalStorage();
    });

    Then(`I enter "Lion" in the title field - submitAndUpdateList 1`, () => {
      registerForm.typeTitle(input.title);
    });

    Then(`I enter a {string} in the URL field - submitAndUpdateList 1`, () => {
      registerForm.typeUrl(input.url);
    });

    When(`I click the submit button - submitAndUpdateList 1`, () => {
      registerForm.clickSubmit();
    });

    Then(
      `the list of registered images should be updated with the new item - submitAndUpdateList 1`,
      () => {
        registerForm.elements.cardList().children().should("have.length", 4);
        registerForm.elements
          .cardList()
          .children()
          .last()
          .find(".card-img")
          .should("have.attr", "src", input.url);
        registerForm.elements
          .cardList()
          .children()
          .last()
          .find(".card-title")
          .should("contains.text", input.title);
      }
    );

    Then(
      `the new item should be stored in the localStorage - submitAndUpdateList 1`,
      () => {
        cy.getAllLocalStorage().should((ls) => {
          const currentLs = ls[window.location.origin];
          const elements = JSON.parse(Object.values(currentLs));
          const lastElement = elements[elements.length - 1];

          assert.deepStrictEqual(lastElement, {
            title: input.title,
            imageUrl: input.url,
          });
        });
      }
    );

    Then(`the inputs should be cleared - submitAndUpdateList 1`, () => {
      registerForm.elements.titleInput().should("be.empty");
      registerForm.elements.imageUrlInput().should("be.empty");
    });
  });

  describe("Refreshing the page after submitting an image clicking in the submit button", () => {
    const input = {
      title: "Lion",
      url: "https://www.krugerpark.co.za/images/black-maned-lion-shem-compion-786x500.jpg",
    };

    before(() => {
      cy.clearAllLocalStorage();
      cy.visit("/");
    });

    after(() => {
      cy.clearAllLocalStorage();
    });

    Then(`I enter "Lion" in the title field - refreshAfterSubmit 1`, () => {
      registerForm.typeTitle(input.title);
    });

    Then(`I enter a {string} in the URL field - refreshAfterSubmit 1`, () => {
      registerForm.typeUrl(input.url);
    });

    Then(`I click the submit button - refreshAfterSubmit 1`, () => {
      registerForm.clickSubmit();
    });

    When(`I refresh the page - refreshAfterSubmit 1`, () => {
      cy.wait(200);
      cy.reload();
    });

    Then(
      `I should still see the submitted image in the list of registered images - refreshAfterSubmit 1`,
      () => {
        registerForm.elements.cardList().children().should("have.length", 4);
        registerForm.elements
          .cardList()
          .children()
          .last()
          .find(".card-img")
          .should("have.attr", "src", input.url);
        registerForm.elements
          .cardList()
          .children()
          .last()
          .find(".card-title")
          .should("contains.text", input.title);
      }
    );
  });
});
