import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Movie(props) {
  const handleClick = () => {
    props.placeMovie(props.index);
  };

  return (
    <div className='image-container d-flex justify-content-start m-3'>
      <div>
        <NavLink onClick={handleClick} to={`/MoviePage`}>
          <img
            className='image-list'
            src={'https://image.tmdb.org/t/p/w500' + props.movie.backdrop_path}
            alt={props.movie.path}
          />
        </NavLink>

        <h4 class='font-weight-bold'>{props.movie.title}</h4>
        <h5 class='font-weight-light'>Score:{props.movie.vote_average}</h5>
      </div>
    </div>
  );
}
