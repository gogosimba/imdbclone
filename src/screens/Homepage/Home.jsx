import React from 'react';
import './_Home.scss';
import MovieCard from '../../components/MovieCard';
import MovieCarousel from '../../components/MovieCarousel';
import useFetch from '../../hooks/useFetch';
const api_key = `543c678703dca231327be65e93f95770`;

const Home = () => {
  const { data, error, isLoading } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className='home-page'>
      <header>
        
      </header>
      <main>
        <h2>Popular Movies</h2>
        <MovieCarousel movies={data.results} />
      </main>
     
    </div>
  );
};

export default Home;
