import img from "../assets/img/image-card.jpg";
import { getNowPlayingMovieList, searchMovie } from "../api";
import { useEffect, useState } from "react";

function SideRightComponent() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.slice(0, 3).map((movie, i) => {
      return (
        <div className="card__side-right" key={i}>
          <div className="card__img">
            <img
              src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            />
          </div>
          <div className="card__text">
            <div className="card__title">{movie.title}</div>
            <div className="card__desc">{movie.overview}</div>
            <div className="card__date">Release: {movie.release_date}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="title__side-right">Now Playing</div>
      <div className="container-card__side-right">
        <PopularMovieList />
      </div>
    </>
  );
}

export default SideRightComponent;
