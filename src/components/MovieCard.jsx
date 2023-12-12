import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <Card style={{ width: '14rem', border: 'none' }}>
      {/* Wrap the Card.Img in a Link to the MovieDetail page */}
      <Link to={`/movie/${movie.id}`}>
        <Card.Img
          variant='top'
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          style={{ maxHeight: '20rem', objectFit: 'cover' }}
        />
      </Link>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
