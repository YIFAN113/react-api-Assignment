import '../support/commands';

let movies;
let moviesCurrentPopular;

describe("Popular", () => {
    before(() => {
        cy.requestMovies(
            `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&include_adult=false&include_video=false&page=1`,
            "movies"
        );
    });
    beforeEach(() => {
        cy.visit(`/`);
    });
    describe("Navigate to currentPopularMoviespage", () => {
        it("Jump to popular page from the header button", () => {
            cy.get("button").contains("Current Popular").click()
            cy.url().should("include", "currentPopular")
        })
    })
    describe("The currentPopular movies are correct", () => {
        before(() => {
            cy.request(
                `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env("TMDB_KEY")}&include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=Date().getFullYear()&sort_by=popularity.desc`
                )
                .its("body")
                .then((currentPopular) => {
                    moviesCurrentPopular = currentPopular.results;
                });
        })
        beforeEach(() => {
            cy.visit(`/movies/currentPopular`);
        })
        it("The titles of movie card are currentPopular Movies titles", () => {
            cy.get("p").contains(moviesCurrentPopular[3].title)
        })
    })
});