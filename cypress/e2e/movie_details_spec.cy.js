describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies", {
      statusCode: 200,
      fixture: "movie_details"
    })
    // in router, change url to match new path. intercept. update fixture file correct format
    // research if fixture file can be an array of 1 element. change line 5 to reflect exact input.
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="movie-poster"] img').first().click()

  })

  

  it("Can access movieDetails page", () => {
    cy.get('h1').contains('rancid tomatillos')
    cy.get('[alt="Poster for The Lord of the Rings: The Return of the King "]').should('exist')


  })

  // router

  it("Can return to main page", () => {
    cy.get("button > img").click()
    cy.get('.MoviesContainer').children().should("have.length", 2)


  })


})