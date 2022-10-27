import React, { useEffect, useState } from "react";
import "./home.css";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d35de3a48191599b0207ddf9c74cc52b"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return <>Homepage is now rendered</>;
};

export default Home;
