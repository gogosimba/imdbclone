import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MoviePage from './components/MoviePage';
function App() {
  const [data, setData] = useState([]);

  const [searchValue, setSearchValue] = useState('a');
  const [movie, setMovie] = useState([]);
  const [latestView, setLatest] = useState([]);

  const placeMovie = (index) => {
    let dataRecently = latestView;
    dataRecently.push(data[index]);
    setLatest(dataRecently);
    setMovie(data[index]);
    console.log(latestView);
  };

  const getDataReq = async () => {
    const api_key = `543c678703dca231327be65e93f95770`;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchValue}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.results) {
      setData(responseJson.results);
    }
  };
  useEffect(() => {
    getDataReq(searchValue);
  }, [searchValue]);

  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Home
                searchValue={searchValue}
                data={data}
                setSearchValue={setSearchValue}
                placeMovie={placeMovie}
                latestView={latestView}
              />
            }
          />
          <Route path='/MoviePage' element={<MoviePage movie={movie} />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;
