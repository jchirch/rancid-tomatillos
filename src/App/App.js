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
  }, []);

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
        // selectedMovie={selectedMovie}
        // setSelectedMovie={setSelectedMovie}
        // clickHandlerMovie={clickHandlerMovie}
        />
      )}
      {selectedMovie && (
        <MovieDetails
          movie={movieDetails}
          onHomeClick={handleBackToMovies}
        />
      )}
      {/* {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onClick={clickHandlerMovie} />
      ) : (
        <MoviesContainer moviePosters={moviePosters} onClick={clickHandlerMovie} />
      )} */}
    </main>
  );
}

export default App;

//hook to research: useParams
