import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

function Popular() {




    const [popular, setPopular] = useState([])
    const [featured, setFeatured] = useState([])

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '2ada17cf2emsh3bad8b4a0f82850p1e5bbdjsnb70430199869',
    //         'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    //     }
    // };

    const getMovies = async () => {
        const api = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_REACT_APP_MOVIE_API}&language=en-US&page=1&region=US`)
        const data = await api.json()
        // console.log(data)
        // console.log(data.name)
        setPopular(data.results)
        setFeatured([data.results[Math.floor(Math.random() * 20)]]);

    };

    useEffect(() => {
        getMovies();
    }, [])

    console.log(featured)
    // console.log(popular)

    return (
        <div>

            <div>
                {featured.map(movie => {
                    return (
                        <div className="movieFeat" key={movie.id} >
                            <img src={"https://image.tmdb.org/t/p/w1280" + movie.backdrop_path} className="backImg" alt="" />
                            <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" className="moviePoster" />
                            <div className="movieInfo">
                                <p className="feature">Featured Movie</p>
                                <p className="title">{movie.original_title}</p>
                                <p className="overview"> {movie.overview} </p>

                                <div className="playTrailer">
                                    <button className="trailer-btn">P</button>
                                    <span>Play Trailer</span>
                                </div>
                            </div>

                        </div>
                    )
                })}


            </div>

            <div className="wrapper">
                <h3>Popular Movies</h3>

                <Splide options={{
                    perPage: 5,
                    perMove: 3,
                    gap: '1rem',
                    pagination: false,
                    drag: 'free',
                    trimSpace: 'move',
                    focus: 'center',
                    breakpoints: {
                        768: {
                            perPage: 4
                        },
                        425: {
                            fixedWidth: '9rem',
                            gap: '.5rem',
                            arrows: false,
                        }
                    }
                }} >

                    {popular.map(movie => {
                        return (
                            <SplideSlide>
                                <div className="movieCard" key={movie.id} >
                                    <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" />
                                    <p>{movie.original_title}</p>
                                    <div className="gradient"></div>
                                </div>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </div>
        </div>
    )
}

// STYLES //




export default Popular