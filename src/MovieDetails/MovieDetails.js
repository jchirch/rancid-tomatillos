// import Header from '../Header/Header';
import './MovieDetails.css';
// import movieDetails from '../data/movie_details.js'; // will be refactored with API data
import MoviePoster from '../MoviePoster/MoviePoster.js';
import {useParams} from 'react';
import homePic from '../icons/home.png'

// console.log(movieDetails)
// console.log(movieDetails.backdrop_path) // img source
// console.log(movieDetails.title) // title
// console.log(movieDetails.genre_ids) // array of genres
// console.log(movieDetails.overview) // movie description

function MovieDetails({movieDetails}) {
  return (
    <section className='MovieDetails'>
      {/* <Header/> */}
      <img src={movieDetails.backdrop_path} alt={`Poster for ${movieDetails.title} `}/>
      <button>Home</button>
      <h2>{movieDetails.title}</h2>
      <ul>{movieDetails.genre_ids}</ul>
      <p>{movieDetails.overview}</p>
    </section>
  );
}

export default MovieDetails;