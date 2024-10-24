// Mock data to use for testing:
// import posters from '../fixtures/movie_posters.json' (we've added mock data to this file for you!)
// import details from '../fixtures/movie_details.json' (you will need to add your own mock data to this file!)

//   do we need this in this file?
import posters from '../fixtures/movie_posters.json'

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

    cy.get('[data-cy="upvote-button"]').first().click()
    // cy.get(".voteCount").should("contain", onIncreaseVote)
  })

  // it('Increment the vote count')


})

// .get(".brewery-location").first().contains("p", "Savannah, Georgia")