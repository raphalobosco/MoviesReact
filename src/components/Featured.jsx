import { RiPlayCircleFill } from 'react-icons/ri'

function Featured(props) {

    const { data } = props;

    return (
        <div>
            <div className="movieFeat">
                <img src={"https://image.tmdb.org/t/p/w1280" + data.backdrop_path} className="backImg" alt="" />
                <img src={"https://image.tmdb.org/t/p/w500" + data.poster_path} alt="" className="moviePoster" />
                <div className="movieInfo">
                    <p className="feature">Featured Movie</p>
                    <p className="title">{data.original_title}</p>
                    <p className="overview"> {data.overview} </p>

                    <div className="playTrailer">
                        <RiPlayCircleFill />
                        <span>Play Trailer</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured