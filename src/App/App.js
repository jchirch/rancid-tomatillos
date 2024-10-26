import "./App.css";
import MovieDetails from "../MovieDetails/MovieDetails";
import MoviesContainer from "../MoviesContainer/MoviesContainer";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const navMovieDetails = (movie) => {
    navigate(`/${movie}`);
    setSelectedMovie(movie);
  };

  function getMovies() {
    fetch(
      "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies"
    )
      .then((response) => response.json())
      .then((data) => setMovies([...data]))
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setError("Oops, no movies found.");
      });
  }

  useEffect(() => {
    getMovies();
  }, []);

  function updateVote(id, direction) {
    fetch(
      `https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vote_direction: direction,
        }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update vote");
        }
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("Error updating vote:", error);
        setError("Failed to update vote. Please try again later.");
      });
  }

  const handleVote = (id, direction) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id !== id) {
        return movie;
      }
      updateVote(movie.id, direction);
      let updatedVoteCount = movie.vote_count;
      if (direction === "up") {
        updatedVoteCount += 1;
      } else {
        updatedVoteCount -= 1;
      }
      return {
        ...movie,
        vote_count: updatedVoteCount,
      };
    });
    setMovies(updatedMovies);
  };

  return (
    <main className="app">
      <Header />
      {error && <p className="error-message">{error}</p>}
      <Routes>
        <Route
          path="/"
          element={
            <MoviesContainer
              movies={movies}
              handleVote={handleVote}
              navMovieDetails={navMovieDetails}
            />
          }
        />
        <Route
          path="/:id"
          element={<MovieDetails selectedMovie={selectedMovie} />}
        />
      </Routes>
    </main>
  );
}

export default App;
