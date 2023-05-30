import img from "../assets/img/about.jpg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getTopRatedMovieList, searchMovie } from "../api";
import { useEffect, useState } from "react";

function SideLeftComponent() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.slice(0, 13).map((movie, i) => {
      return (
        <div className="card__side-left" key={i}>
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

  library.add(faFacebookF, faTwitter, faGithub, faLinkedin, faStar);
  return (
    <>
      <div className="header__side-left">
        <div className="follow">Follow:</div>
        <div className="social">
          <Link
            to={`https://github.com/aguspranyoto`}
            target="_blank"
            className="social__icon"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </Link>
          <Link
            to={`https://github.com/aguspranyoto`}
            target="_blank"
            className="social__icon"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </Link>
          <Link
            to={`https://github.com/aguspranyoto`}
            target="_blank"
            className="social__icon"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </Link>
          <Link
            to={`https://github.com/aguspranyoto`}
            target="_blank"
            className="social__icon"
          >
            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          </Link>
        </div>
      </div>
      <div className="container-card__side-left">
        <div className="navigate__side-left">
          <a href="#">Popular</a>
          <a href="#" className="active">
            Top Rated
          </a>
        </div>
        <div className="card_container__side-left">
          <PopularMovieList />
        </div>
      </div>
    </>
  );
}

export default SideLeftComponent;
