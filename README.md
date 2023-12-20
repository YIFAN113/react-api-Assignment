# Assignment 2 - Web API.

Name: Yifan Gu

## Features.
 + User Authentication
 + The username for logging in is displayed on the site header
 + Use regular expressions to standardize password formatting
 + Protected routes 
 + New backend apis 
 + The front and back ends are almost fully integrated
 + parameterised URL
 + New mongodb collection(review)

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

______________________
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design

- /api/movies/tmdb/movie/{movieid}         |GET| Get movie detail
- /api/movies/tmdb/movie/{movieid}/reviews |GET| Get movie reviews 
- /api/movies/tmdb/upcoming                |GET| Get upcoming movie list 
- /api/movies/tmdb/genre                   |GET| Get movie genre
- /api/movies/tmdb/topRated                |GET| Get toprated movie list
- /api/movies/tmdb/currentPopular          |GET| Get current popular movie list
- /api/movies/tmdb/movie/{movieid}/images  |GET| Get movie images
- /api/riviews                             |POST| Upload movie review
- /api/people/tmdb/popular                 |GET| Get popular people list
- /api/people/tmdb/people/{peopleid}       |GET| Get people detail
- /api/people/tmdb/people/{peopleid}       |GET| Get people images
- /api/users                               |POST| User login
- /api/users?action=register               |POST| User sign up

## Security and Authentication
Protected rotes:
/movies/favorites
/movies/people
/movies/:id
/movies/currentPopular
/movies/upcoming
/movies/top_Rated
  This allows users who are not logged in to only browse the homepage and only when they are logged in to browse all content
  After the user registers and logs in, the authentication token is stored in the browser and is required to access pages other than the home page.
## Video Link
https://youtu.be/IzwfO1SVYH8

## Integrating with React App

I put almost all of the tmdb apis into the backend to separate the front-end and back-end, and the views include currentPopularMoviesPage, MovieDetailsPage, MovieReviewPage, upcomingMoviesPage, topRatedMoviesPage, peoplePage, peopleDetailPage.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.   
