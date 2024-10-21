import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';

function MoviesContainer({ movies, onIncreaseVote, onDecreaseVote, onMovieClick, onHomeClick }) {
  const moviePosters = movies.map((movie) => {
    return (
      <MoviePoster
        key={movie.id}
        movie_id={movie.id}
        movie_poster={movie.poster_path}
        onClick={() => onMovieClick(movie)} // Pass the whole movie object into the click handler we wrote in - Robert
        movie_vote={movie.vote_count}
        movie_title={movie.title}
        onIncreaseVote={onIncreaseVote}
        onDecreaseVote={onDecreaseVote}
        onMovieClick={onMovieClick}
        onHomeClick={onHomeClick}
      />
    );
  });

  return (
    <section className='MoviesContainer'>
      {moviePosters}
    </section>
  );
}

export default MoviesContainer;