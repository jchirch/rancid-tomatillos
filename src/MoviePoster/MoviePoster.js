import './MoviePoster.css';
// import VoteButton from '../VoteButton/VoteButton';

function MoviePoster({ movie_id, movie_poster, movie_vote, movie_title, onIncreaseVote, onDecreaseVote, setSelectedMovie}) {
  // console.log("from poster movie detail", movieDetail)
  const viewNavigator = (id) => {
    // if clicked poster image's id = (id)
    // go to movie details page
    //
  }

  return ( 
    <section className='moviePoster'>
      <img src={movie_poster} alt={`${movie_title} poster`} onClick={() => setSelectedMovie(movie_id)}/>
      <p className="voteCount">
        <button onClick={() => onIncreaseVote(movie_id)} style={{ fontSize: '20px' }}>🍅</button>
        {movie_vote}
        <button onClick={() => onDecreaseVote(movie_id)} style={{ fontSize: '20px' }}>🦠</button>
      </p>
    </section>
  );
}

export default MoviePoster;
// a div with <div class="style=display: flex;">here the p tag and button</div>