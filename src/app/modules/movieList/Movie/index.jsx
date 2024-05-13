import {StyledMovie, StyledImage} from './styles'

//Modul för listartikel

const Movie = ({ movie, deleteMovie }) => {
    return (
      <StyledMovie data-grade={movie.rating} data-title={movie.title}>
        {movie.title}   
        {[...Array(5)].map((_, i) => (
          <StyledImage key={i} src="../../../images/star.png" alt="Star" />
        ))}
        <StyledImage src="../../../images/delete.png" alt="Delete" className="delete-movie-icon" onClick={() => deleteMovie(movie.id)} />
      </StyledMovie>
    );
  };
  
  export default Movie;
