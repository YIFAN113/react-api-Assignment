import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import * as api from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await api.getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genre', asyncHandler(async (req, res) => {
const genre =await api.getGenres();
res.status(200).json(genre);
}));

router.get('/tmdb/topRated', asyncHandler(async (req, res) => {
    const topRatedMovies = await api.getTopRatedMovies();
    res.status(200).json(topRatedMovies);
}));
router.get('/tmdb/movie/:id/reviews', asyncHandler(async(req, res) => {
    const id = req.params.id;

    const result = await api.getMovieReviews(id);
    res.status(200).json(result);
}));

router.get('/tmdb/currentPopular', asyncHandler(async (req, res) => {
    const currentPopularMovies = await api.getCPMovies();
    res.status(200).json(currentPopularMovies);
}));

router.get('/tmdb/movie/:id', asyncHandler(async(req, res) => {
    const id = req.params.id;

    const result = await api.getMovie(id);
    res.status(200).json(result);
}));

router.get('/tmdb/movie/:id/images', asyncHandler(async(req, res) => {
    const id = req.params.id;

    const result = await api.getMovieImages(id);
    res.status(200).json(result);
}));
export default router;