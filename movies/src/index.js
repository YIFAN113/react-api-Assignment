import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
//import MoviePage from "./pages/movieDetailsPage";
import LoginPage from './pages/loginPage'; 
//import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
//import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
//import UpcomingMoviePage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import CurrentPopularMoviesPage from "./pages/currentPopularMoviesPage";
import PeoplePage from "./pages/peoplePage"
import PeopleDetailPage from "./pages/peopleDetailPage";
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const FavoriteMoviesPage = lazy(() => import("./pages/favoriteMoviesPage"));
const UpcomingMoviePage = lazy(() => import("./pages/upcomingMoviesPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
           <Route path="/movies/upcoming" element={<UpcomingMoviePage />} /> 
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/:page" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/1" /> } />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/movies/top_Rated" element={ <TopRatedMoviesPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/movies/currentPopular" element={<CurrentPopularMoviesPage />} />
          <Route path="/movies/people" element= {<PeoplePage/>}/>
          <Route path="/people/:id" element= {<PeopleDetailPage/>}/> 
        </Routes>
        </Suspense>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);