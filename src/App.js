import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import Error from './components/Error';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if(searchText) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=ee95ea1408f1cb3ed638dabececd0b9f&query=${searchText}&include_adult=false&language=en-US&page=1`)
        .then(response => response.json()) 
        .then(data => {
          console.log(data)
          setSearchResults(data.results)
        })
      }
  }, [searchText])
  
  return (
    <>
      <BrowserRouter>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutView" element={<AboutView />} />
          <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
          <Route path="/movies/:id" element={<MovieView />} />
          <Route path="*" element={<Error />} />
       </Routes>
      </BrowserRouter>
     </>
  );
}

export default App;