

import '../support/commands';


let movies;
let moviesTopRated;

describe("Popular", () => {
    before(() => {
        cy.requestMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&include_adult=false&include_video=false&page=1`, "movies");
    });
    beforeEach(() => {
        cy.visit(`/`);
    });
    describe("Navigate to topRatedMoviespage", () => {
        it("Jump to popular page from the header button", () => {
            cy.get("button").contains("Top Rated").click()
            cy.url().should("include", "top_Rated")
        })
    })
    describe("The topRated movies are correct", () => {
        before(() => {
            cy.request(
                    `https://api.themoviedb.org/3/movie/top_rated?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&page=1`
                )
                .its("body")
                .then((top_Rated) => {
                    moviesTopRated = top_Rated.results;
                });
        })
        beforeEach(() => {
            cy.visit(`/movies/top_Rated`);
        })
        it("The titles of movie card are top Rated Movies titles", () => {
            cy.get("p").contains(moviesTopRated[3].title)
        })
    })
});