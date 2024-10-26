import "./MoviePoster.css";

function MoviePoster({
  movie_id,
  movie_poster,
  movie_vote,
  handleVote,
  movie_title,
  navMovieDetails,
}) {
  return (
    <section className="movie-poster" data-cy="movie-poster">
      <img
        src={movie_poster}
        alt={`${movie_title} poster`}
        tabindex="0"
        onClick={() => navMovieDetails(movie_id)}
        onKeyDown={(e) => {
          if (
            (e.key === "Enter" || e.key === " ") &&
            e.target === e.currentTarget
          ) {
            navMovieDetails(movie_id);
          }
        }}
      />
      <p className="vote-count" data-cy="vote-container">
        <button
          data-cy="upvote-button"
          onClick={() => handleVote(movie_id, "up")}
          style={{ fontSize: "20px" }}
        >
          🍅
        </button>
        {movie_vote}
        <button
          data-cy="downvote-button"
          onClick={() => handleVote(movie_id, "down")}
          style={{ fontSize: "20px" }}
        >
          🦠
        </button>
      </p>
    </section>
  );
}
export default MoviePoster;
