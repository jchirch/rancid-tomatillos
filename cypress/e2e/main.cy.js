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
    cy.get('.MoviesContainer').children().should("have.length", 4)
    cy.get('.posters').first().find(".title").contains("The Dark Knight")
    // cy.get('.posters').children().first().find(".title").contains("The Dark Knight")

  })


})

// .get(".brewery-location").first().contains("p", "Savannah, Georgia")