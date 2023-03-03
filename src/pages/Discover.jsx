import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa'
import styled from 'styled-components';



function Discover() {

  const [genres, setGenres] = useState([])

  let params = useParams()

  const getMovies = async (genre) => {
    const api = await fetch(`https://api.themoviedb.org/3/discover/movie/?api_key=${import.meta.env.VITE_REACT_APP_MOVIE_API}&language=en-US&page=1&region=US&with_original_language=en&with_genres=${genre}`)

    const movies = await api.json()

    setGenres(movies.results)
    console.log(genres)
  };

  useEffect(() => {
    getMovies(params.type)
  }, [params.type])

  return (
    <Grid>
      {genres.map(movie => {
        return (

          <div className="movieCard" key={movie.id} style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie.poster_path}")`, backgroundSize: 'cover' }} >


            <span><FaStar /> {movie.vote_average}</span>
            <p>{movie.original_title}</p>
            <div className="gradient"></div>
          </div>
        )

      })}
    </Grid>
  )
}


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap:1rem
`

export default Discover