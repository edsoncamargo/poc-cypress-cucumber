Feature: Image Registration

    Background:
        Given I am on the image registration page

    @submitWithInvalidInputs
    Scenario: Submitting an image with invalid inputs
        When I enter "" in the title field - submitWithInvalidInputs 1
        Then I enter "" in the URL field - submitWithInvalidInputs 1
        Then I click the submit button - submitWithInvalidInputs 1
        Then I should see "Please type a title for the image" message above the title field - submitWithInvalidInputs 1
        Then I should see "Please type a valid URL" message above the imageUrl field - submitWithInvalidInputs 1
        Then I should see an exclamation icon in the title and URL fields - submitWithInvalidInputs 1

    @submitWithEnterKey
    Scenario: Submitting an image with valid inputs using enter key
        When I enter "Lion" in the title field - submitWithEnterKey 1
        Then I hit enter to submit the form - submitWithEnterKey 1
        Then I should see a check icon in the title field - submitWithEnterKey 1
        When I enter a "https:\/\/www.krugerpark.co.za\/images\/black-maned-lion-shem-compion-786x500.jpg" in the URL field - submitWithEnterKey 1
        Then I should see a check icon in the "https:\/\/www.krugerpark.co.za\/images\/black-maned-lion-shem-compion-786x500.jpg" field - submitWithEnterKey 1
        Then I hit enter to submit the form - submitWithEnterKey 2
        Then the list of registered images should be updated with the new item - submitWithEnterKey 1
        Then the new item should be stored in the localStorage - submitWithEnterKey 1
        Then the inputs should be cleared - submitWithEnterKey 1

    @submitAndUpdateList
    Scenario: Submitting an image and updating the list
        When I enter "Lion" in the title field - submitAndUpdateList 1
        Then I enter a "https:\/\/www.krugerpark.co.za\/images\/black-maned-lion-shem-compion-786x500.jpg" in the URL field - submitAndUpdateList 1
        Then I click the submit button - submitAndUpdateList 1
        Then the list of registered images should be updated with the new item - submitAndUpdateList 1
        Then the new item should be stored in the localStorage - submitAndUpdateList 1
        Then the inputs should be cleared - submitAndUpdateList 1

    @refreshAfterSubmit
    Scenario: Refreshing the page after submitting an image by clicking the submit button
        When I enter "Lion" in the title field - refreshAfterSubmit 1
        Then I enter a "https:\/\/www.krugerpark.co.za\/images\/black-maned-lion-shem-compion-786x500.jpg" in the URL field - refreshAfterSubmit 1
        Then I click the submit button - refreshAfterSubmit 1
        Then I refresh the page - refreshAfterSubmit 1
        Then I should still see the submitted image in the list of registered images - refreshAfterSubmit 1