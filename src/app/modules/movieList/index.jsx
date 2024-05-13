import Movie from './Movie';
import { StyledMovieList } from './styles';

const MovieList = ({ movies, deleteMovie }) => {
  return (
    <StyledMovieList>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} deleteMovie={deleteMovie} />
      ))}
    </StyledMovieList>
  );
};

export default MovieList;

