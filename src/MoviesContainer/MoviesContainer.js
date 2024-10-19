import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';

function MoviesContainer({ movies, onIncreaseVote, onDecreaseVote, setSelectedMovie }) {
  const moviePosters = movies.map((movie) => {
    return (
      <MoviePoster
        key={movie.id}
        movie_id={movie.id}
        movie_poster={movie.poster_path}
        movie_vote={movie.vote_count}
        movie_title={movie.title}
        onIncreaseVote={onIncreaseVote}
        onDecreaseVote={onDecreaseVote}
        setSelectedMovie={setSelectedMovie}
      />
    )
  })
  return (
    <section className='MoviesContainer'>
      {moviePosters}
    </section>
  );
}

export default MoviesContainer;