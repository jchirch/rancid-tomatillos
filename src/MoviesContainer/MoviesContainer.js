import "./MoviesContainer.css";
import MoviePoster from "../MoviePoster/MoviePoster";

function MoviesContainer({
  movies,
  handleVote,
  navMovieDetails,
}) {
  const moviePosters = movies.map((movie) => {
    return (
      <MoviePoster
        key={movie.id}
        movie_id={movie.id}
        movie_poster={movie.poster_path}
        onClick={() => navMovieDetails(movie)} 
        movie_vote={movie.vote_count}
        movie_title={movie.title}
        handleVote={handleVote}
        navMovieDetails={navMovieDetails}
      />
    );
  });
  return <section className="movies-container">{moviePosters}</section>;
}

export default MoviesContainer;
