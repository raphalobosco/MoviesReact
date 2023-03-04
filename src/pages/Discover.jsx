import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import MovieDetails from "../components/movieDetails";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';

function Discover() {



  const [genres, setGenres] = useState([]);
  const [id, setId] = useState()

  let params = useParams();

  const getMovies = async (genre) => {
    const api = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_REACT_APP_MOVIE_API
      }&language=en-US&page=1&region=US&with_genres=${genre}`
    );

    const movies = await api.json();

    setGenres(movies.results);
    setId(0)

  };

  useEffect(() => {
    getMovies(params.type);
  }, [params.type]);

  const [open, setOpen] = useState()

  function onOpenModal(index) {
    setId(index);
    setOpen(true);

  }
  const onCloseModal = () => setOpen(false);



  return (
    <div>
      {genres.length > 0 && (
        <Modal open={open} onClose={onCloseModal} center>

          <MovieDetails data={genres[id]} />
        </Modal>
      )}


      <Grid>
        {genres.map((movie) => {
          return (
            // <Link to={"/moviedetails/" + movie.id}>
            <div onClick={() => onOpenModal(genres.indexOf(movie))}
              className="movieCard"
              key={movie.id}
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie.poster_path}")`,
                backgroundSize: "cover",
              }}
            >
              <span>
                <FaStar /> {movie.vote_average}
              </span>
              <p>{movie.original_title}</p>
              <div className="gradient"></div>
            </div>
            // </Link>
          );
        })}
      </Grid>
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

export default Discover;
