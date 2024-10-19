import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';

function MoviesContainer({movies, onIncreaseVote, onDecreaseVote}) {
 

  return (
      <section className='MoviesContainer'>
          {movies.map((movie) => (
      <div key={movie.id}> {/* Use a unique key prop */}
        {/* <h1>{movie.title}</h1> */}
        <MoviePoster 
        movie_id={movie.id} 
        movie_path={movie.poster_path} 
        movie_vote={movie.vote_count} 
        movie_title={movie.title}
        onIncreaseVote={onIncreaseVote}  
            onDecreaseVote={onDecreaseVote} 
            />
      </div>
    ))}
       
      
       
      </section>
  );
}
  
export default MoviesContainer;