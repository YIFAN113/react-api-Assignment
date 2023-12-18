import express from 'express';
import Review from './ReviewModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

router.post('/', asyncHandler(async(req, res) => {
    await Review.create(req.body.review);
    
}));


export default router;