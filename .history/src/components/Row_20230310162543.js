/** @format */

import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //a snippet of code which runs based on a specific condtion

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(null, { tmdbId: movie.id })
        .then((url) => {
          console.log("url is " + url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("urlParamsn" + urlParams);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
          //   console.log(`${base_url}${movie.poster_path}`);
        ))}
      </div>
      {trailerUrl && (
        <YouTube videoId={trailerUrl} opts={opts} id="youtube_video" />
      )}
    </div>
  );
}

export default Row;
