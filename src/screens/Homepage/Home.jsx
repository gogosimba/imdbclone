// Home.jsx
import React, { useState } from 'react';
import './_Home.scss';
import MovieCard from '../../components/MovieCard';
import MovieCarousel from '../../components/MovieCarousel';
import SearchBar from '../../components/SearchBar';
import useFetch from '../../hooks/useFetch';
const api_key = `543c678703dca231327be65e93f95770`;

const Home = () => {
  const { data, error, isLoading } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
  );

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&query=${query}&include_adult=false`;
      const response = await fetch(url);
      const result = await response.json();

      // Update state with search results
      setSearchResults(result.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className='home-page'>
      <header>
        <h1>IMDb Clone</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main>
        <h2>Popular Movies</h2>
        {/* Display search results if available, otherwise show popular movies */}
        <MovieCarousel
          movies={searchResults.length > 0 ? searchResults : data.results}
        />
      </main>
      <footer>
        <p>© 2023 IMDb Clone by Jonathan Johansson. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
