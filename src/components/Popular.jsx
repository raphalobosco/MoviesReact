import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

function Popular() {




    const [popular, setPopular] = useState([])

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '2ada17cf2emsh3bad8b4a0f82850p1e5bbdjsnb70430199869',
    //         'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    //     }
    // };

    const getPopular = async () => {
        const api = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_REACT_APP_MOVIE_API}&language=en-US&page=1&region=US`)
        const data = await api.json()
        // console.log(data)
        // console.log(data.name)
        setPopular(data.results)
    };

    useEffect(() => {
        getPopular();
    }, [])

    console.log(popular)

    return (
        <div>
            <div className="wrapper">
                <h3>Popular Movies</h3>

                <Splide options={{
                    perPage: 5,
                    perMove: 3,
                    gap: '1rem',
                    pagination: false,
                    drag: 'free',
                    breakpoints: {
                        768: {
                            perPage: 4
                        },
                        425: {
                            fixedWidth: '8rem',
                            gap: '.5rem'
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