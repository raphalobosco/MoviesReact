import { useEffect, useState } from "react";

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



    return (
        <div>

            {popular.map(movie => {
                return (
                    <div key={movie.id} >
                        <h1>{movie.original_title}</h1>
                        <img src="" alt="" />
                    </div>
                )
            })}

        </div>
    )
}

export default Popular