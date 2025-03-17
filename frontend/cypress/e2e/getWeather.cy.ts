describe("Weather Location Search", () => {
  it("Visits the homepage, types a location, and checks if the location is displayed correctly", () => {
    // Visit the homepage
    cy.visit("/");

    // Define the user input
    const typedLocation = "London";

    // Type a location in the GMapAutocomplete input field and wait for the dropdown to appear
    cy.get('[data-test-id="location-input"]').type(typedLocation).wait(1000);

    // Select the first option in the dropdown
    cy.get(".pac-item").first().click();

    // Verify that the location name is displayed in the h3 tag
    cy.get('[data-test-id="location-name-display"]').should(
      "include.text",
      typedLocation
    );
  });

  it("Visits the homepage, types an invalid location, presses Enter, and checks for an error message", () => {
    // Visit the homepage
    cy.visit("/");

    // Define the user input
    const typedLocation = "InvalidLocation";

    // Type an invalid location in the GMapAutocomplete input field
    cy.get('[data-test-id="location-input"]').type(typedLocation);

    // Press Enter to submit the location
    cy.get('[data-test-id="location-input"]').type("{enter}");

    // Verify that an error message is displayed for an invalid location
    cy.get(".location-error-message")
      .should("be.visible")
      .and(
        "contain.text",
        "Location input is invalid. Please enter a valid location."
      );
  });
});
