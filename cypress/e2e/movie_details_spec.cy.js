describe("Main Page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/155",
      {
        statusCode: 200,
        fixture: "dark_knight_details",
      }
    ).as("darkKnightDetails");
    cy.intercept(
      "GET",
      "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies",
      { 
        statusCode: 200, 
        body: [] 
      }
    ).as("moviesList");
    cy.visit("http://localhost:3000/155");
  });

  it("Can access movieDetails page and it's details", () => {
    cy.get("h1").contains("rancid tomatillos");
    cy.get('[alt="Poster for The Dark Knight "]').should("exist");
    cy.get("h2").contains("The Dark Knight");
    cy.get(".genre-box > :nth-child(1)").contains("Drama");
    cy.get(".genre-box > :nth-child(2)").contains("Action");
    cy.get(".genre-box > :nth-child(3)").contains("Crime");
    cy.get(".genre-box > :nth-child(4)").contains("Thriller");
    cy.get("p").contains(
      "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker."
    );
  });

  it("Can return to main page", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies",
      {
        statusCode: 200,
        fixture: "movie_posters",
      }
    ).as("movieMainPage");
    cy.visit("http://localhost:3000/155");
    cy.get("button > img").click();
    cy.get(".movies-container").children().should("have.length", 4);
  });

  it("Displays an error message when movie details fail to load", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/155",
      {
        statusCode: 500,
        body: { error: "Failed to fetch movie details" },
      }
    ).as("movieDetailsError");
    cy.visit("http://localhost:3000/155");
    cy.get(".error-message").should("contain", "Movie details not available.");
  });
});
