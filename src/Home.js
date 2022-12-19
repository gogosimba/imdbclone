import { React } from 'react';
import SearchBox from './components/SearchBox';
import Movie from './components/Movie';
function Home(props) {
  return (
    <div className='App'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <SearchBox
          searchValue={props.searchValue}
          setSearchValue={props.setSearchValue}
        />
      </div>
      <h1>Movies</h1>
      <div className='block'>
        {props.data.map((movie, index) => {
          return (
            <Movie
              key={movie.id}
              movie={movie}
              placeMovie={props.placeMovie}
              index={index}
            />
          );
        })}
      </div>
      <h1>Recently viewed</h1>
      <div className='inline-view'>
        {props.latestView.map((n) => {
          return (
            <img
              key={n.id}
              src={'https://image.tmdb.org/t/p/w500' + n.backdrop_path}
              alt={n.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
