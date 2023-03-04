import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

function MovieDetails(props) {

    const { data } = props;

    const text = data.release_date
    const movieId = data.id

    console.log(movieId)

    const [cast, setCast] = useState([])

    const getCast = async () => {
        const api = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${import.meta.env.VITE_REACT_APP_MOVIE_API
            }&language=en-US&page=1&region=US`
        );
        const dataCast = await api.json();

        setCast(dataCast.cast);
    };

    useEffect(() => {
        getCast();
    }, []);




    return (
        <div className="detailsGrid">

            <img src={"https://image.tmdb.org/t/p/w500" + data.poster_path} alt="" className="moviePoster" />
            <div className="movieInfo">

                <p className="title">{data.original_title}</p>

                <div className="info">
                    <div className="info-span">
                        <span>{text.substr(0, 4)}</span>
                        <span>{data.original_language}</span>
                    </div>
                    <div className="info-rating">
                        <FaStar /> {data.vote_average}
                    </div>
                </div>

                <hr />
                <p className="overview"> {data.overview} </p>
                <hr />
                <div>
                    <h1 className="cast-title">Cast</h1>

                    <div>
                        {cast.map((actor) => {
                            return (
                                <div key={actor.id}>
                                    {actor.name}
                                </div>
                            )
                        })}



                    </div>

                </div>
            </div>

        </div>
    )
}

export default MovieDetails