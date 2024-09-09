import React, { useCallback, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({}) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreMovies = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=76a134cc205008fef0b7578e97a9be3b&language=en-US&page=${pageNo}`
      );
      const newMovies = response.data.results;
      setMovies((prevMovies) => [...prevMovies, ...newMovies]);
      setHasMore(newMovies.length > 0);
      setPageNo((page) => page + 1);
    } catch (error) {
      console.error("failed to load movies", error);
    } finally {
      setLoading(false);
    }
  }, [loading, pageNo]);

  useEffect(() => {
    loadMoreMovies();
  }, [loadMoreMovies]);
  const handleScroll = () => {
    const bottom =
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100;
    if (bottom && hasMore && !loading) {
      loadMoreMovies();
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-5">
        {movies.map((movieObj, index) => {
          return (
            <MovieCard
              key={index}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              movieObj={movieObj}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
