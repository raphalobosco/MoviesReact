import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

function Categories() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const api = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${
          import.meta.env.VITE_REACT_APP_MOVIE_API
        }&language=en-US&page=1&region=US`
      );
      const data = await api.json();
      setGenres(data.genres);
    }
    fetchData();
  }, []);

  return (
    <div>
      <List>
        <NavLink to={`/`}>Home</NavLink>
        {genres.map((genre) =>
          genre.name === "Adventure" ? (
            <NavLink key={genre.id} to={`/discover/${genre.id}/`}>
              Adventure
            </NavLink>
          ) : genre.name === "Comedy" ? (
            <NavLink key={genre.id} to={`/discover/${genre.id}/`}>
              Comedy
            </NavLink>
          ) : genre.name === "Drama" ? (
            <NavLink key={genre.id} to={`/discover/${genre.id}/`}>
              Drama
            </NavLink>
          ) : genre.name === "Thriller" ? (
            <NavLink key={genre.id} to={`/discover/${genre.id}/`}>
              Thriller
            </NavLink>
          ) : null
        )}
      </List>
    </div>
  );
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  width: 100%;
  justify-content: center;
  margin-bottom: 2rem;
`;

export default Categories;
