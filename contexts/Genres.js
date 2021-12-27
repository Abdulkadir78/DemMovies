import { createContext, useState, useCallback } from "react";

const GenresContext = createContext();

function GenresProvider({ children }) {
  const [combinedGenres, setCombinedGenres] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [tvGenres, setTvGenres] = useState([]);

  const updateGenres = useCallback(({ combined, movies, tv }) => {
    setCombinedGenres(combined);
    setMovieGenres(movies);
    setTvGenres(tv);
  }, []);

  const value = {
    combinedGenres,
    movieGenres,
    tvGenres,
    updateGenres,
  };

  return (
    <GenresContext.Provider value={value}>{children}</GenresContext.Provider>
  );
}

export { GenresContext };
export default GenresProvider;
