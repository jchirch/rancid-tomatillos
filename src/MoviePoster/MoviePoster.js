import './MoviePoster.css';

function MoviePoster({ movie_id, movie_path, movie_vote, movie_title}) {
  // console.log("from poster movie detail", movieDetail)
  return ( 
    <section className='moviePoster'>

      <img src={movie_path} alt={`${movie_title} poster`} />
      <p>{movie_vote}</p>
      {/* <p>{movie_title}</p>
      <p>{movie_id}</p> */}
      {/* <button>Button</button> */}
    </section>
  );
}

export default MoviePoster;

// app brings in the the data
// gets sent to movies containers where it gets mapped over
// and movies contaners send the actual picture, etc to
// movies poster where holds data variable that will be replaced
// movies poster has props taht are being passed from movies
// containers.