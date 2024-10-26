import "./MovieDetails.css";
import homePic from "../icons/green_home.png";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(null);

  function getMovieDetails() {
    fetch(
      `https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${id}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movies.");
        }
        return response.json();
      })
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setError("Movie details not available.");
      });
  }

  useEffect(() => {
    getMovieDetails();
  }, [id]);

  const navigate = useNavigate();
  const returnToHome = () => {
    navigate("/");
  };

  return (
    <section className="movie-details">
      {error && <p className="error-message">{error}</p>}
      {!error && (
        <>
          <div className="home-button">
            <button onClick={returnToHome}>
              <img src={homePic} alt="home button" />
            </button>
          </div>
          <img
            src={movieDetails.backdrop_path}
            alt={`Poster for ${movieDetails.title} `}
          />
          <div className="detail-section">
            <h2>{movieDetails.title}</h2>
            <div className="genre-box">
              {movieDetails.genre_ids &&
                movieDetails.genre_ids.map((genre) => (
                  <ul key={genre}>{genre}</ul>
                ))}
            </div>
            <p>{movieDetails.overview}</p>
          </div>
        </>
      )}
    </section>
  );
}

export default MovieDetails;
