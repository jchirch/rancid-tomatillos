describe("Main Page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies",
      {
        statusCode: 200,
        fixture: "movie_details",
      }
    );
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="movie-poster"] img').first().click();
  });

  it("Can access movieDetails page and it's details", () => {
    cy.get("h1").contains("rancid tomatillos");
    cy.get(
      '[alt="Poster for The Lord of the Rings: The Return of the King "]'
    ).should("exist");
    cy.get("h2").contains("The Lord of the Rings: The Return of the King");
    cy.get(".genre-box > :nth-child(1)").contains("Adventure");
    cy.get(".genre-box > :nth-child(2)").contains("Fantasy");
    cy.get(".genre-box > :nth-child(3)").contains("Action");
    cy.get("p").contains(
      "As armies mass for a final battle that will decide the fate of the world"
    );
  });

  it("Can return to main page", () => {
    cy.get("button > img").click();
    cy.get(".MoviesContainer").children().should("have.length", 2);
  });

  // it('displays an error message when movie details fail to load', () => {
   
  //   cy.intercept("GET", "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/155", {
  //     statusCode: 500,
  //     body: { error: "Failed to fetch movie details" }
  //   });
  
  //   cy.visit('http://localhost:3000/155');
  
  //   cy.get('.error-message').should('contain', 'Movie details not available.');
  // });
});
