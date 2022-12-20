import React from 'react';
function MoviePage(props) {
  return (
    <div>
      <div className='card-single'>
        <div>
          {/* <img
            className='image-single'
            src={'https://image.tmdb.org/t/p/w500' + props.movie.backdrop_path}
            alt={props.movie.path}
          /> */}
          {/* <div class='card-title'>
            <h1 class='font-weight-bold'>{props.movie.title}</h1>
          </div> */}
          <p class='card-text'>{props.movie.overview}</p>
          <h5 class='font-weight-light'>
            Language: {props.movie.original_language}
          </h5>
          <h5 class='font-weight-light'>
            Release date: {props.movie.release_date}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
