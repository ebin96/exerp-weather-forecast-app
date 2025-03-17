describe("Visit Experp Weather Home Page", () => {
  it("Visits the homepage and checks for title", () => {
    // Visit the homepage
    cy.visit("/");

    // Check Tile
    cy.title().should("include", "Exerp Weather");
  });
});

describe("Visit Experp Weather About Page and Navigate Back to Home Page", () => {
  it("Visits the homepage, clicks on the About button, then clicks on the Home button to return", () => {
    // Visit the homepage
    cy.visit("/");

    // Click the About button and verify URL changes
    cy.get('[data-test-id="about-button"]').click();
    cy.url().should("eq", `${Cypress.config("baseUrl")}/about`);

    // Click the Home button and verify URL changes back to homepage
    cy.get('[data-test-id="home-button"]').click();
    cy.url().should("eq", `${Cypress.config("baseUrl")}/`);
  });
});

describe("Test Dark Mode", () => {
  it("Toggles dark mode and verifies the change", () => {
    // Visit the homepage
    cy.visit("/");

    // Click the dark mode button to toggle dark mode
    cy.get('[data-test-id="dark-mode-button"]').click();

    // Verify if dark mode is enabled by checking the 'app-content' class
    cy.get(".app-content").should("have.class", "dark"); // Adjust this class if needed

    // Toggle back to light mode (optional if you want to test toggling both ways)
    cy.get('[data-test-id="dark-mode-button"]').click();

    // Verify if dark mode is disabled (light mode, no dark-mode class)
    cy.get(".app-content").should("not.have.class", "dark");
  });
});
