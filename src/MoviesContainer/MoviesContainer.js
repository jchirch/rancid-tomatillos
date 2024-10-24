import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';
// import { useNavigate } from 'react-router-dom';

function MoviesContainer({ movies, onIncreaseVote, onDecreaseVote, navMovieDetails }) {
  const moviePosters = movies.map((movie) => {
    return (
      <MoviePoster
        key={movie.id}
        movie_id={movie.id}
        movie_poster={movie.poster_path}
        onClick={() => navMovieDetails(movie)} // Pass the whole movie object into the click handler we wrote in - Robert
        movie_vote={movie.vote_count}
        movie_title={movie.title}
        onIncreaseVote={onIncreaseVote}
        onDecreaseVote={onDecreaseVote}
        navMovieDetails={navMovieDetails}
        // onHomeClick={onHomeClick}
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