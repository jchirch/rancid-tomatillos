import './App.css';
import searchIcon from '../icons/search.png';

// Example imports (for later):
// import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Header from '../Header/Header';


function App() {


  return (
    <main className='App'>
      {/* <header>
        <h1>rancid tomatillos</h1>
      </header> */}
      <Header/>
      <MoviesContainer movies={moviePosters}/>
    </main>
  ); 
}

export default App;
