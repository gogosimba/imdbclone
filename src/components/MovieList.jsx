const MovieList = (props) => {
  const imgurl = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
  if (props.title) {
  }
  console.log(props);
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className='image-container d-flex justify-content-start m-3'>
          <img src={imgurl + movie.poster_path} alt={movie.title} />
        </div>
      ))}
    </>
  );
};

export default MovieList;
