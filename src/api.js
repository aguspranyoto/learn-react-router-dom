import axios from "axios";

const apiUrl = process.env.REACT_APP_APIURL;
const apiKey = process.env.REACT_APP_APIKEY;

export const getPopularMovieList = async () => {
  const movie = await axios.get(
    `${apiUrl}/movie/popular?page=1&api_key=${apiKey}`
  );

  return movie.data.results;
};
export const getTopRatedMovieList = async () => {
  const movie = await axios.get(
    `${apiUrl}/movie/top_rated?page=1&api_key=${apiKey}`
  );

  return movie.data.results;
};
export const getNowPlayingMovieList = async () => {
  const movie = await axios.get(
    `${apiUrl}/movie/now_playing?page=1&api_key=${apiKey}`
  );

  return movie.data.results;
};

export const searchMovie = async (e) => {
  const search = await axios.get(
    `${apiUrl}/search/movie?query=${e}&page=1&api_key=${apiKey}`
  );

  return search.data;
};
