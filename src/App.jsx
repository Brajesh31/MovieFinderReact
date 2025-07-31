import React, { useState } from 'react';
import './App.css';

function App() {
  const [movieData, setMovieData] = useState({
    Title: "",
    Year: "",
    Genre: "",
    Plot: "",
    Actors: "",
    Director: "",
    Writer: "",
    Awards: "",
    Poster: ""
  });

  const [showMain, setShowMain] = useState(false);
  const [showInitial, setShowInitial] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  
  const keyEnter = (e) =>{
    console.log(e)
    if(e.key==='Enter'){
      handleSearch();
    }
  }
  const handleSearch = async() => {
    let input = document.querySelector('#searchBar')
    let userQuery = input.value;
    console.log(userQuery)
    let query = "https://www.omdbapi.com/?apikey=********&t=" + userQuery;
    fetch(query)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data.Title === undefined) {
          setErrorMessage("Movie not found!");
          setShowInitial(true);
          setShowMain(false);
        } else {
          setMovieData({
            Title: data.Title,
            Year: data.Year,
            Genre: data.Genre,
            Plot: data.Plot,
            Actors: data.Actors,
            Director: data.Director,
            Writer: data.Writer,
            Awards: data.Awards,
            Poster: data.Poster
          });
          setShowMain(true);
          setShowInitial(false);
          setErrorMessage("");
        }
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
        setErrorMessage("Error fetching data. Please try again later.");
      });
  };

  return (
    <>
      <div className="nav">
        <div className="heading">
          <h1 className="title">Movie<div></div>Finder</h1>
        </div>
        <div className="searchField">
          <input type="search" id="searchBar" placeholder="Enter Movie Name" onKeyDown={keyEnter}/>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" onClick={handleSearch} id='searchButton'>
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </div>
      </div>

      <div className={showInitial ? "initial" : "initial hide"}>
        <h1 className="icon">😎</h1>
        <h1 className="initialTitle">{errorMessage || "Search Any Movie"}</h1>
      </div>

      <div className={showMain ? "main" : "main hide"}>
        <div className="img">
          <img src={movieData.Poster} alt="Movie Poster" className="poster" />
        </div>
        <div className="details">
          <h3 className="movieDetails">Title : <span className="detailStyle" id="movieName">{movieData.Title}</span></h3>
          <h3 className="movieDetails">Year : <span className="detailStyle" id="movieYear">{movieData.Year}</span></h3>
          <h3 className="movieDetails">Genre : <span className="detailStyle" id="movieGenre">{movieData.Genre}</span></h3>
          <h3 className="movieDetails">Plot : <span className="detailStyle" id="moviePlot">{movieData.Plot}</span></h3>
          <h3 className="movieDetails">Actors : <span className="detailStyle" id="movieActors">{movieData.Actors}</span></h3>
          <h3 className="movieDetails">Director : <span className="detailStyle" id="movieDirector">{movieData.Director}</span></h3>
          <h3 className="movieDetails">Writer : <span className="detailStyle" id="movieWriter">{movieData.Writer}</span></h3>
          <h3 className="movieDetails">Awards : <span className="detailStyle" id="movieAwards">{movieData.Awards}</span></h3>
        </div>
      </div>
    </>
  );
}

export default App;
