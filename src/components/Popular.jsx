import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FaStar, FaPlay } from "react-icons/fa";
import "@splidejs/splide/dist/css/splide.min.css";
import Featured from "./Featured";

function Popular() {
  const [popular, setPopular] = useState([]);

  const getMovies = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_REACT_APP_MOVIE_API
      }&language=en-US&page=1&region=US`
    );
    const data = await api.json();

    setPopular(data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {popular.length > 0 && (
        <Featured data={popular[Math.floor(Math.random() * 20)]} />
      )}


      <div className="wrapper">
        <h3>Popular Movies</h3>

        <Splide
          options={{
            perPage: 5,
            perMove: 3,
            gap: "1rem",
            pagination: false,
            drag: "free",
            trimSpace: "move",
            focus: "center",
            breakpoints: {
              768: {
                perPage: 4,
              },
              425: {
                fixedWidth: "9rem",
                gap: ".5rem",
                arrows: false,
              },
            },
          }}
        >
          {popular.map((movie) => {
            return (
              <SplideSlide>
                <div
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
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Popular;
