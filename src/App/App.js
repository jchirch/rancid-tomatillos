import './App.css';
// import searchIcon from '../icons/search.png';
import { useState, useEffect } from 'react';
import MovieDetails from '../MovieDetails/MovieDetails';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Header from '../Header/Header';
import { useNavigate, Routes, Route } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const navigate = useNavigate()

  const clickHandlerMovie = (movie) => {
    console.log("movie=>", movie)
    // movie id undefined, console log
    navigate(`/${movie}`)

    setSelectedMovie(movie);
  };

  const handleBackToMovies = () => {
    setSelectedMovie(null); // this will navigate us back to our "home screen"
  };

  function getMovies() {
    fetch("https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies")
      .then(response => response.json())
      .then(data => setMovies([...data]))
      .catch(error => console.error("Error fetching movies:", error));
  }


  useEffect(() => {
    getMovies()

  }, []);

  function updateVote(id, direction) {
    console.log("update vote", direction)
    fetch(`https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        vote_direction: direction
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Vote count update", data);
        return data;
      })
      .catch(error => console.error("Error updating vote:", error))
  }

  const increaseVote = (id) => {
    const updatedMovies = movies.map(movie => {
      if (movie.id !== id) {
        return movie;
      }

      updateVote(movie.id, 'up');
      return { ...movie, vote_count: movie.vote_count + 1 }
    });
    setMovies(updatedMovies);
  };

  const decreaseVote = (id) => {
    const updatedMovies = movies.map(movie => {
      if (movie.id !== id) {
        return movie;
      }

      updateVote(movie.id, 'down')
      return { ...movie, vote_count: movie.vote_count - 1 }

    });
    setMovies(updatedMovies);
  };

  return (
    <main className='App'>
      {/* <Header />
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
          selectedMovie={selectedMovie}
          onHomeClick={handleBackToMovies}
        />
      )} */}
      <Header />
      <Routes>
        <Route path="/" element={<MoviesContainer
          movies={movies}
          onIncreaseVote={increaseVote}
          onDecreaseVote={decreaseVote}
          onMovieClick={clickHandlerMovie}
        />} />

        <Route
        path="/:id" element={<MovieDetails
          selectedMovie={selectedMovie}
          // onHomeClick={handleBackToMovies}
        />}
        //use navigate on home button, make path /
        // pull mvie info like id from use params
        />
      </Routes>
    </main>
  );
}

export default App;
