import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import MovieCard from './MovieCard';

function MovieCarousel({ movies }) {
  const slidesToShow = 5;
  const chunkedMovies = [];

  for (let i = 0; i < movies.length; i += slidesToShow) {
    const moviesChunk = movies.slice(i, i + slidesToShow);
    chunkedMovies.push(moviesChunk);
  }

  return (
    <Carousel nextLabel='' prevLabel=''>
      {chunkedMovies.map((moviesChunk, index) => (
        <Carousel.Item key={index}>
          <div className='d-flex'>
            {moviesChunk.map((movie, movieIndex) => (
              <div key={movieIndex} className='col'>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MovieCarousel;
