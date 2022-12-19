import MovieList from './components/MovieList';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

function App() {
  const api_key = '543c678703dca231327be65e93f95770';
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${searchValue}&page=1&include_adult=false`;
  const getMovieRequest = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.results) {
      setMovies(responseJson.results);
    }
    console.log(responseJson);
  };

  useEffect(() => {
    getMovieRequest();
  }, [searchValue]);

  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <MovieListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
