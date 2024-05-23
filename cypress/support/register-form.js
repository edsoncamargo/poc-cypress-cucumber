export class RegisterForm {
  elements = {
    titleInput: () => cy.get("#title"),
    titleFeedback: () => cy.get("#titleFeedback"),
    imageUrlInput: () => cy.get("#imageUrl"),
    imageUrlFeedback: () => cy.get("#urlFeedback"),
    submitBtn: () => cy.get("#btnSubmit"),
    cardList: () => cy.get("#card-list"),
  };

  typeTitle(text) {
    if (Boolean(text) === false) return;
    this.elements.titleInput().type(text);
  }

  typeUrl(text) {
    if (Boolean(text) === false) return;
    this.elements.imageUrlInput().type(text);
  }

  clickSubmit() {
    this.elements.submitBtn().click();
  }

  inputTitleEnter() {
    this.elements.titleInput().type("{enter}");
  }

  inputUrlEnter() {
    this.elements.imageUrlInput().type("{enter}");
  }
}

export const colors = {
  errors: "rgb(220, 53, 69)",
  success: "rgb(25, 135, 84)",
};
