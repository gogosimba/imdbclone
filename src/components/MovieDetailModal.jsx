
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const MovieDetailModal = ({ movie, show, onClose }) => {
  const [credits, setCredits] = useState([]);
  const { original_title, overview } = movie;

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=543c678703dca231327be65e93f95770&language=en-US`
        );
        const creditsResult = await creditsResponse.json();
        setCredits(creditsResult.cast);
      } catch (error) {
        console.error('Error fetching credits:', error);
      }
    };

    if (show) {
      fetchCredits();
    }
  }, [movie.id, show]);

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{original_title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{overview}</p>
        <h5>Cast:</h5>
        <ul>
          {credits.map((actor) => (
            <li key={actor.id}>{actor.name}</li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieDetailModal;
