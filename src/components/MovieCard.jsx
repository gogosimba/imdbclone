import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import MovieDetailModal from './MovieDetailModal'; 

function MovieCard({ movie }) {
  const [modalShow, setModalShow] = useState(false);

  const handleCardClick = () => {
    setModalShow(true);
  };

  return (
    <>
      <Card style={{ border: 'none' }} onClick={handleCardClick} className='movieCard'>
        <Card.Img
          variant='top'
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className='img-fluid'
        />
        <Card.Body>
          <Card.Title className='text-center'>{movie.title}</Card.Title>
        </Card.Body>
      </Card>
      <MovieDetailModal
        movie={movie}
        show={modalShow}
        onClose={() => setModalShow(false)}
      />
    </>
  );
}

export default MovieCard;
