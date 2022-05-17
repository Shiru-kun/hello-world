import  {useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import Movie from "./Movie";
const apiKey ="a07b2f38"
const API_URL = `http://www.omdbapi.com?apiKey=${apiKey}`;
const App =() =>{

    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    const getMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
     const handlerSearch = (searchTerm) =>{
        setSearchTerm(searchTerm);
        getMovies(searchTerm)
     }
    useEffect(()=>{
        setSearchTerm('batman')
        getMovies(searchTerm);

  }, []);

    return (
        <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => handlerSearch(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => getMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Movie movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
    );
}

export default App;