import React, { useState, useEffect } from 'react';
import './_Home.scss';
import MovieCarousel from '../../components/MovieCarousel';
import SearchBar from '../../components/SearchBar';
import useFetch from '../../hooks/useFetch';

const api_key = `543c678703dca231327be65e93f95770`;

const Home = () => {
  const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
  const topRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`;

  const {
    data: popularMovies,
    error: popularMoviesError,
    isLoading: popularMoviesLoading,
  } = useFetch(popularMoviesUrl);

  const {
    data: topRatedMovies,
    error: topRatedMoviesError,
    isLoading: topRatedMoviesLoading,
  } = useFetch(topRatedMoviesUrl);

  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const handleSearch = async (query) => {
    try {
      setSearchLoading(true);

      const searchMoviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&query=${query}&include_adult=false`;
      const searchMoviesResponse = await fetch(searchMoviesUrl);
      const searchMoviesResult = await searchMoviesResponse.json();
      const results = searchMoviesResult.results;

      const moviesWithCredits = results
        .filter((movie) => movie.poster_path)
        .map(async (movie) => {
          const creditsUrl = `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${api_key}&language=en-US`;
          const creditsResponse = await fetch(creditsUrl);
          const creditsResult = await creditsResponse.json();
          return { ...movie, credits: creditsResult.cast };
        });

      const moviesData = await Promise.all(moviesWithCredits);

      setSearchResults(moviesData);
    } catch (error) {
      console.error('Error searching movies:', error);
    } finally {
      setSearchLoading(false);
    }
  };

  useEffect(() => {
    handleSearch('');
  }, []);

  if (popularMoviesLoading) {
    return <h1>Loading popular movies...</h1>;
  }

  if (popularMoviesError) {
    return <h1>{popularMoviesError}</h1>;
  }

  return (
    <div className='home-page'>
      <header>
        <h1>IMDb Clone</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main>
        <h2>Popular Movies</h2>
        {searchLoading ? (
          <p>Loading search results...</p>
        ) : (
          <MovieCarousel
            movies={
              searchResults.length > 0 ? searchResults : popularMovies.results
            }
          />
        )}

        <h2>Top Rated Movies</h2>
        {searchLoading ? (
          <p>Loading search results...</p>
        ) : (
          <MovieCarousel
            movies={
              searchResults.length > 0 ? searchResults : topRatedMovies.results
            }
          />
        )}
      </main>
      <footer>
        <p>© 2023 IMDb Clone by Jonathan Johansson. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
