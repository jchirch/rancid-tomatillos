import './App.css';
import searchIcon from '../icons/search.png';

// Example imports (for later):
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Header from '../Header/Header';


function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    setMovies(moviePosters);
  }, []);

 
  const increaseVote = (id) => {
    const updatedMovies = movies.map(movie => {
      if (movie.id !== id) {
        return movie;
      }
      return { ...movie, vote_count: movie.vote_count + 1}
    });
    setMovies(updatedMovies);
  };
  
  const decreaseVote = (id) => {
    const updatedMovies = movies.map(movie => {
      if (movie.id !== id) {
        return movie;
      }
      return { ...movie, vote_count: movie.vote_count - 1}
    });
    setMovies(updatedMovies);
  };

  return (
    <main className='App'>
      <Header/>
      <MoviesContainer 
        movies={movies}
        onIncreaseVote={increaseVote}
        onDecreaseVote={decreaseVote}
        // selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
      />
    </main>
  );
}

export default App;

//hook to research: useParams