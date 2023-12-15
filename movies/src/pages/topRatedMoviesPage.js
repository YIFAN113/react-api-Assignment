import React from "react";
import {getTopRatedMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage'

import AddToPlaylist from "../components/cardIcons/addToPlaylist";
import {useQuery} from "react-query";
import Spinner from "../components/spinner";

const TopRatedMoviesPage = () => {
    
    const {data, error, isLoading, isError} = useQuery(
        "top_rated",
        getTopRatedMovies
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
        title="Top Rated Movies"
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
export default TopRatedMoviesPage;