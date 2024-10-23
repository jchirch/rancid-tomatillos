// import Header from '../Header/Header';
import './MovieDetails.css';
// import movieDetails from '../data/movie_details.js'; // will be refactored with API data
// import MoviePoster from '../MoviePoster/MoviePoster.js';
// import { useParams } from 'react';
import homePic from '../icons/green_home.png'
import { useState, useEffect } from 'react';




function MovieDetails({ selectedMovie, onHomeClick }) {
  console.log("id", selectedMovie)
  const [movieDetails, setMovieDetails] = useState({});

  function getMovieDetails() {
    console.log("tacos")
    fetch(`https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${selectedMovie}`)
     .then(response => response.json())
     .then(data => {
      console.log("data", data)
      setMovieDetails(data)
     } )
     .catch(error => console.error("Error fetching movies:", error));
  }
  
  useEffect(() => {
    getMovieDetails()
    }, []);

    console.log("Movie Details LOOK:", movieDetails);
    console.log("Movie Details LOOK HERE:", movieDetails.title);
  return (
    <section className='MovieDetails'>
      {/* <Header/> */}
      <div className='home-button'>
        <button onClick={onHomeClick}>
          <img src={homePic} alt="home button" />
        </button>
      </div>
      <img src={movieDetails.backdrop_path} alt={`Poster for ${movieDetails.title} `} />
      {/* <img src={movieDetails.backdrop_path} alt={movieDetails.title} /> */}
{/* line 41 works, but says poster for undefined. line 42 doesnt throw any text or errors */}
      
      <div className='detail-section'>
        <h2>{movieDetails.title}</h2>
        <div className='genre-box'>
        
          {movieDetails.genre_ids && movieDetails.genre_ids.map(genre => (
            <ul key={genre}>{genre}</ul>
          ))} 
          
        </div>
        <p>{movieDetails.overview}</p>
      </div>
    </section>
  );
}

export default MovieDetails;