import './App.css';
import searchIcon from '../icons/search.png';

// Example imports (for later):
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details'; // mock
import MovieDetails from '../MovieDetails/MovieDetails';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Header from '../Header/Header';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const clickHandlerMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBackToMovies = () => {
    setSelectedMovie(null); // this will navigate us back to our "home screen"
  };

  useEffect(() => {
    setMovies(moviePosters);
    // getMovies()
  }, []);

  // useEffect(() => {
  //     fetch("https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies")
  //     .then(response => response.json())
  //     .then(data => setMovies(data))
  //     .catch(error => console.error("Error fetching movies:", error));
  // }, []);

  // create helper function, getMovies() , within fetch then then etc
  // within a use ffect, invoke hlper function.

  const increaseVote = (id) => {
    const updatedMovies = movies.map(movie => {
      if (movie.id !== id) {
        return movie;
      }
      return { ...movie, vote_count: movie.vote_count + 1 }
    });
    setMovies(updatedMovies);
  };

  const decreaseVote = (id) => {
    const updatedMovies = movies.map(movie => {
      if (movie.id !== id) {
        return movie;
      }
      return { ...movie, vote_count: movie.vote_count - 1 }
    });
    setMovies(updatedMovies);
  };

  return (
    <main className='App'>
      <Header />
      {!selectedMovie && (
        <MoviesContainer
          movies={movies}
          onIncreaseVote={increaseVote}
          onDecreaseVote={decreaseVote}
          onMovieClick={clickHandlerMovie}
        />
      )}
      {selectedMovie && (
        <MovieDetails
          movieDetails={movieDetails}
          onHomeClick={handleBackToMovies}
        />
      )}
    </main>
  );
}

export default App;

//hook to research: useParams
