// import Header from '../Header/Header';
import './MovieDetails.css';
import movieDetails from '../data/movie_details.js'; // will be refactored with API data
import MoviePoster from '../MoviePoster/MoviePoster.js';
import { useParams } from 'react';
import homePic from '../icons/home.png'

// console.log(movieDetails)
// console.log(movieDetails.backdrop_path) // img source
// console.log(movieDetails.title) // title
console.log(movieDetails.genre_ids) // array of genres
// console.log(movieDetails.overview) // movie description

function MovieDetails({ movieDetails, onHomeClick }) {
  return (
    <section className='MovieDetails'>
      {/* <Header/> */}
      <div className='home-button'>
        <button onClick={onHomeClick}>
          <img src={homePic} alt="home button" />
        </button>
      </div>
      <img src={movieDetails.backdrop_path} alt={`Poster for ${movieDetails.title} `} />
      <div className='detail-section'>
        <h2>{movieDetails.title}</h2>
        <div className='genre-box'>
          {movieDetails.genre_ids.map(genre => (
            <ul key={genre}>{genre}</ul>
          ))}
          {/* <ul>{movieDetails.genre_ids}</ul> */}
        </div>
        <p>{movieDetails.overview}</p>
      </div>
    </section>
  );
}

export default MovieDetails;