import img from "../assets/img/404-image.png";
import { getPopularMovieList, searchMovie } from "../api";
import { useEffect, useState } from "react";

function HomeComponent() {
  const githubUrl = process.env.REACT_APP_URLGITHUB;
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.slice(0, 12).map((movie, i) => {
      let poster = "";

      if (movie.poster_path !== null) {
        poster = `${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`;
      } else {
        poster = img;
      }
      return (
        <div className="card-container" key={i}>
          <div className="card-title">{movie.title}</div>
          <div className="card-img">
            <img src={poster} alt="" />
          </div>
          <div className="card-date">Release: {movie.release_date}</div>
          <div className="card-rate">{movie.vote_average}</div>
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
