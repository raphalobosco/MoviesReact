import { useEffect, useState } from "react";
import styled from "styled-components";

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
        <GridMovie>
            {popular.map(movie => {
                return (
                    <MovieCard key={movie.id} >

                        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" />
                        <Gradient></Gradient>
                        <h1>{movie.original_title}</h1>
                    </MovieCard>
                )
            })}
        </GridMovie>
    )
}

// STYLES //

const GridMovie = styled.div`
    display: grid;
    width: fit-content;
    grid-template-columns: repeat(4,1fr);
    gap: 1rem;
    margin: auto;
`;

const MovieCard = styled.div`
    display: flex;
    justify-content: center;
    height: 350px;
    width: 260px;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    
    
    
    h1 {
        position: absolute;
        bottom:0;
        z-index: 10;
        color: white;
        font-size: 1.5rem;
        text-align: center;
        padding: 1rem;
    }
    
    img {
        width:100%;
        height:100%;
        position: absolute;
        object-fit: cover
    }
    
`;

const Gradient = styled.div`
width:100%;
height: 100%;
position: absolute;
z-index: 3;
bottom: 0;
background: linear-gradient(180deg, rgba(0,0,0,0) 27%, rgba(0,0,0,0.8743872549019608) 82%);
`;

export default Popular