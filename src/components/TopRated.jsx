import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

function TopRated() {




    const [topRated, setTopRated] = useState([])

    const getTopRated = async () => {
        const api = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_REACT_APP_MOVIE_API}&language=en-US&page=1&region=US`)
        const data = await api.json()
        // console.log(data)
        // console.log(data.name)
        setTopRated(data.results)

    };

    useEffect(() => {
        getTopRated();
    }, [])

    console.log(topRated)
    // console.log(comedy)

    return (
        <div>

            <div className="wrapper">
                <h3>Top Rated Movies</h3>

                <Splide options={{
                    perPage: 3,
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

                    {topRated.map(movie => {
                        return (
                            <SplideSlide>
                                <div className="movieCard topRatedCard" key={movie.id} style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie.poster_path}")`, backgroundSize: 'cover' }} >
                                    {/* <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" /> */}
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




export default TopRated