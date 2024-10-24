// Mock data to use for testing:
// import posters from '../fixtures/movie_posters.json' (we've added mock data to this file for you!)
// import details from '../fixtures/movie_details.json' (you will need to add your own mock data to this file!)
// import posters from '../fixtures/movie_posters.json'

describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies", {
      statusCode: 200,
      fixture: "movie_posters"
    })
    cy.visit('http://localhost:3000/')
  })

  it('displays title on page load', () => {
    cy.get('h1').contains('rancid tomatillos')
  })

  it('posters have a container', () => {
    cy.get('.MoviesContainer').should("have.length", 1)
  })

  it('displays a collection of movies', () => {
    cy.get('.MoviesContainer').children().should("have.length", 4)

    cy.get('[data-cy="movie-poster"] img').first().should('have.attr', 'alt', 'The Dark Knight poster');
    cy.get('[data-cy="vote-container"]').first().should("exist")

    cy.get('[data-cy="movie-poster"] img').last().should('have.attr', 'alt', 'Pulp Fiction poster');
    cy.get('[data-cy="vote-container"]').last().should("exist")
  })

  it('updates vote count with up and down buttons', () => {
  cy.get(".voteCount").first().should("contain", 32544)
  cy.get('[data-cy="upvote-button"]').first().click()

  
  cy.get(".voteCount").first().should("contain", 32545)
  cy.intercept("PATCH", "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/155", {
    statusCode: 200,
    fixture: "movie_posters"
  })
  cy.visit('http://localhost:3000/')
  
  cy.get(".voteCount").first().should("contain", 32544)
  cy.get('[data-cy="downvote-button"]').first().click()

  
  cy.get(".voteCount").first().should("contain", 32543)
  cy.intercept("PATCH", "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/155", {
    statusCode: 200,
    fixture: "movie_posters"
  })
  cy.visit('http://localhost:3000/')
  
  })

  it('displays an error message if the vote update fails', () => {
    cy.intercept("PATCH", "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/155", {
      statusCode: 500,
      body: { error: 'Internal Server Error' }
    });
      cy.get('[data-cy="upvote-button"]').first().click();
  
      cy.get('.error-message').should('contain', 'Failed to update vote. Please try again later.');
  });
  it('displays an error message when movies fail to load', () => {
    cy.intercept("GET", "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies", {
      statusCode: 500,
      body: { error: "Failed to fetch movies" }
    });
    cy.visit('http://localhost:3000/');
    cy.get('.error-message').should('contain', 'Oops, no movies found.');
  });
})

  // describe('Main Page vote buttons', () => {
  //   beforeEach(() => {


    // it('displays the selected movie details', () => {


      // Ensure the home button is present and visible
      // cy.get('[data-cy="home-button"]').should('exist').and('be.visible');
  
      // // Ensure the home button image is visible
      // cy.get('[data-cy="home-button-img"]').should('exist').and('be.visible');
    // cy.get(".MovieDetails").first().should("contain", movieDetails.backdrop_path)

  
 
   



// .get(".brewery-location").first().contains("p", "Savannah, Georgia")