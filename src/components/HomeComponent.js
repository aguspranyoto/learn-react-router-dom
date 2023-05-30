import img from "../assets/img/about.jpg";
import { getPopularMovieList, searchMovie } from "../api";
import { useEffect, useState } from "react";

function HomeComponent() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.slice(0, 9).map((movie, i) => {
      return (
        <div className="card-container" key={i}>
          <div className="card-title">{movie.title}</div>
          <div className="card-img">
            <img
              src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
              alt=""
            />
          </div>
          <div className="card-date">Release: {movie.release_date}</div>
          <div className="card-rate">
            <div className="card-date">{movie.vote_average}</div>
          </div>
        </div>
      );
    });
  };

  const search = async (e) => {
    if (e.length > 3) {
      const query = await searchMovie(e);
      setPopularMovies(query.results);
    }
  };

  return (
    <>
      <div className="top-home">
        <h1>AGUUD MOVIE MANIA</h1>
        <input
          placeholder="cari film... minimal 4 karakter"
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
      </div>
      <div className="content__card-wrapper">
        <PopularMovieList />
      </div>
    </>
  );
}

export default HomeComponent;
