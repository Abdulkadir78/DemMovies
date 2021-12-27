import { useContext } from "react";

import { MoviesContext } from "../../contexts/Movies";
import Poster from "../Catalog/Poster";
import Brand from "../Navbar/Brand";
import BackBtn from "../Shared/BackBtn";

function SearchResults({ query, moviesAndTv }) {
  const { apiImageUrl } = useContext(MoviesContext);

  return (
    <>
      <div className="mt-7 mb-10 lg:mb-20 flex justify-center">
        <Brand />
      </div>

      <BackBtn />
      <h1 className="font-bold text-2xl lg:text-3xl mt-10 md:mt-14">
        Search for &quot;{query}&quot;
      </h1>

      <div className="mt-7 flex flex-wrap justify-center">
        {moviesAndTv?.length ? (
          moviesAndTv.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              mediaType={movie.media_type}
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
          ))
        ) : (
          <p className="text-gray-300 mb-10">No results</p>
        )}
      </div>
    </>
  );
}

export default SearchResults;
