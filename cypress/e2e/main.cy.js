describe("Main Page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies",
      {
        statusCode: 200,
        fixture: "movie_posters",
      }
    ).as("movieMainPage");
    cy.visit("http://localhost:3000/");
  });

  it("Displays title on page load", () => {
    cy.get("h1").contains("rancid tomatillos");
  });

  it("Posters have a container", () => {
    cy.get(".movies-container").should("have.length", 1);
  });

  it("Displays a collection of movies", () => {
    cy.get(".movies-container").children().should("have.length", 4);

    cy.get('[data-cy="movie-poster"] img')
      .first()
      .should("have.attr", "alt", "The Dark Knight poster");
    cy.get('[data-cy="vote-container"]').first().should("exist");

    cy.get('[data-cy="movie-poster"] img')
      .last()
      .should("have.attr", "alt", "Pulp Fiction poster");
    cy.get('[data-cy="vote-container"]').last().should("exist");
  });

  it("Updates vote count with up and down buttons", () => {
    // this uses the cypress custom command in the commands.js file to work
    cy.checkVoteUpdate(".vote-count", true, 32544);
    cy.checkVoteUpdate(".vote-count", false, 32545);
  });

  it("Displays an error message if the vote update fails", () => {
    cy.intercept(
      "PATCH",
      "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/155",
      {
        statusCode: 500,
        body: { error: "Internal Server Error" },
      }
    ).as("mainPageError");
    cy.get('[data-cy="upvote-button"]').first().click();
    cy.wait("@mainPageError");
    cy.get(".error-message").should(
      "contain",
      "Failed to update vote. Please try again later."
    );
  });

  it("Displays an error message when movies fail to load", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies",
      {
        statusCode: 500,
        body: { error: "Failed to fetch movies" },
      }
    ).as("mainPageError ");
    cy.visit("http://localhost:3000/");
    cy.get(".error-message").should("contain", "Oops, no movies found.");
  });

  it("User can click on a poster and see its details page", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/155",
      {
        statusCode: 200,
        fixture: "dark_knight_details",
      }
    ).as("movieDetailsPage");
    cy.get('[data-cy="movie-poster"] img').first().click();
    cy.get("h2").should("be.visible");
  });
});
