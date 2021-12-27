import { useContext } from "react";

import { MoviesContext } from "../../contexts/Movies";
import Poster from "./Poster";

function Posters() {
  const { movies, byGenre, byPage, mediaType, apiImageUrl } =
    useContext(MoviesContext);

  return (
    <div className="mt-10 flex flex-wrap justify-center">
      {(byGenre || byPage || movies).map((movie) => (
        <Poster
          key={movie.id}
          id={movie.id}
          mediaType={movie.media_type || mediaType}
          rating={movie.vote_average / 2}
          apiImageUrl={apiImageUrl}
          image={movie.poster_path}
          title={
            movie.title ||
            movie.name ||
            movie.original_title ||
            movie.original_name
          }
          year={
            new Date(
              movie.release_date || movie.first_air_date
            ).getFullYear() || null
          }
        />
      ))}
    </div>
  );
}

export default Posters;
