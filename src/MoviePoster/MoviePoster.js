import './MoviePoster.css';
import { Link, useNavigate } from "react-router-dom";
// import VoteButton from '../VoteButton/VoteButton';

function MoviePoster({ movie_id, movie_poster, movie_vote, movie_title, onIncreaseVote, onDecreaseVote, setSelectedMovie, navMovieDetails }) {
  // console.log("from poster movie detail", movieDetail)



  return (
    <section className='moviePoster' data-cy="movie-poster">
      {/* <Link to={navMovieDetails(movie_id)}>img src={movie_poster} alt={`${movie_title} poster`}</Link> */}
      {/* <Link>to={``}</Link> */}
      
      <img src={movie_poster} alt={`${movie_title} poster`} onClick={() => navMovieDetails(movie_id)} />
      <p className="voteCount" data-cy="vote-container">
        <button data-cy="upvote-button" onClick={() => onIncreaseVote(movie_id)} style={{ fontSize: '20px' }}>🍅</button>
        {movie_vote}
        <button data-cy="downvote-button" onClick={() => onDecreaseVote(movie_id)} style={{ fontSize: '20px' }}>🦠</button>
      </p>
    </section>
  );
}

export default MoviePoster;
// a div with <div class="style=display: flex;">here the p tag and button</div>