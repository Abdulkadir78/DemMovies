import { createContext, useState, useCallback } from "react";

const MoviesContext = createContext();
const apiImageUrl = "https://image.tmdb.org/t/p";

function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [top5Movies, setTop5Movies] = useState([]);
  const [byGenre, setByGenre] = useState([]);
  const [byPage, setByPage] = useState([]);
  const [mediaType, setMediaType] = useState();
  const [totalPages, setTotalPages] = useState(0);

  const updateMovies = useCallback(
    ({ moviesData, showsByGenre, showsByPage, type, totalPages }) => {
      setMovies(moviesData);
      setTop5Movies(moviesData.slice(0, 5));
      setByGenre(showsByGenre);
      setByPage(showsByPage);
      setMediaType(type);
      setTotalPages(totalPages);
    },
    []
  );

  const value = {
    movies,
    top5Movies,
    byGenre,
    byPage,
    updateMovies,
    mediaType,
    apiImageUrl,
    totalPages,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
}

export { MoviesContext };
export default MoviesProvider;
