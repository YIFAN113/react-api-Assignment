import React from "react";
import {getCPMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage'

import AddToPlaylist from "../components/cardIcons/addToPlaylist";
import {useQuery} from "react-query";
import Spinner from "../components/spinner";

const CurrentPopularMoviesPage = () => {
    
    const {data, error, isLoading, isError} = useQuery(
        "currentPopular",
        getCPMovies
    );

    if (isLoading) {
        return <Spinner/>;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const movies = data.results;


  return (
    <PageTemplate
        title="Current Popular"
        movies={movies}
        action={(movie) => {
            return (
                <>
                    
                    <AddToPlaylist movie={movie}/>
                </>
            );
        }}
    />
);
};
export default CurrentPopularMoviesPage;