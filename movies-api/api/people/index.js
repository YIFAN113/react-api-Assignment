import express from 'express';
import asyncHandler from 'express-async-handler';
import { getPeople, getPeopleDetail, getPeopleImage } from '../tmdb-api';

const router = express.Router(); 

router.get('/tmdb/popular', asyncHandler( async(req, res) => {
    const people = await getPeople();
    res.status(200).json(people);
  }));

  router.get('/tmdb/people/:id', asyncHandler( async(req, res,) => {
    const PeopleDetail = await getPeopleDetail(req.params.id);
    res.status(200).json(PeopleDetail);
  }));

  router.get('/tmdb/people/:id/images', asyncHandler( async(req, res,) => {
    const Peopleimages = await getPeopleImage(req.params.id);
    res.status(200).json(Peopleimages);
  }));
  export default router;