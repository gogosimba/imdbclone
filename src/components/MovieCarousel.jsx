import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import MovieCard from './MovieCard'; // Import your MovieCard component

function MovieCarousel({ movies }) {
  const slidesToShow = 6; // Adjust the number of slides to show
  const chunkedMovies = [];

  for (let i = 0; i < movies.length; i += slidesToShow) {
    const moviesChunk = movies.slice(i, i + slidesToShow);
    chunkedMovies.push(moviesChunk);
  }

  return (
    <Carousel nextLabel='' prevLabel='' 
    style={{ height: '600px' }}
    
    >
      {chunkedMovies.map((moviesChunk, index) => (
        <Carousel.Item key={index}>
          <div className='d-flex'>
            {moviesChunk.map((movie, movieIndex) => (
              <MovieCard key={movieIndex} movie={movie} />
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MovieCarousel;
