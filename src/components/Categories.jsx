import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useState, useEffect } from 'react';

function Categories() {

    const [genres, setGenres] = useState([])


    useEffect(() => {

        async function fetchData() {
            const api = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_REACT_APP_MOVIE_API}&language=en-US`)
            const data = await api.json()
            setGenres(data.genres)
        }
        fetchData()
    }, [])


    return (
        <div>
            <List>
                <NavLink to={`/`}>Home</NavLink>
                {genres.map((genre) =>
                    genre.name === "Adventure" ? (
                        <NavLink key={genre.id} to={`/discover/${genre.id}`}>
                            Adventure
                        </NavLink>
                    ) : genre.name === "Comedy" ? (
                        <NavLink key={genre.id} to={`/discover/${genre.id}`}>
                            Comedy
                        </NavLink>
                    ) : genre.name === "Drama" ? (
                        <NavLink key={genre.id} to={`/discover/${genre.id}`}>
                            Drama
                        </NavLink>
                    ) : genre.name === "Thriller" ? (
                        <NavLink key={genre.id} to={`/discover/${genre.id}`}>
                            Thriller
                        </NavLink>
                    ) : null
                )}
            </List>
        </div >
    )
}


{/* <NavLink to={'/genres/&with_genres=35'}>Comedy</NavLink>
                <NavLink to={'&with_genres=18'}>Drama</NavLink>
                <NavLink to={'&with_genres=12'}>Adventure</NavLink>
                <NavLink to={'&with_genres=53'}>Thriller</NavLink> 
                <NavLink to={genreId.name === "Action" && `/discover/${genreId.id}`}>Comedy</NavLink>
                <NavLink to={'/discover/drama'}>Drama</NavLink>
                <NavLink to={'/discover/adventure'}>Adventure</NavLink>
                <NavLink to={'/discover/thriller'}>Thrilles</NavLink>
                */}

const List = styled.ul`
    display:flex;
    gap: 3rem;
    width: 100%;
    justify-content: center;
    margin-block: 2rem;

    
`

export default Categories