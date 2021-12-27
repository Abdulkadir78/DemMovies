import { useContext } from "react";
import { useRouter } from "next/router";

import { GenresContext } from "../../contexts/Genres";
import { MoviesContext } from "../../contexts/Movies";

function Genres() {
  const router = useRouter();
  const { mediaType } = useContext(MoviesContext);
  const { combinedGenres, movieGenres, tvGenres } = useContext(GenresContext);

  const activeGenre = router.query.genre;

  const genresToMap =
    mediaType === "movie"
      ? movieGenres
      : mediaType === "tv"
      ? tvGenres
      : combinedGenres;

  return (
    <div className="relative mx-auto">
      <div className="mt-10 flex overflow-x-auto no-scrollbar">
        {genresToMap.map((genre) => (
          <h3
            key={genre.id}
            className={`cursor-pointer mr-5 whitespace-nowrap hover:-translate-y-1 transition 
            duration-300 ${genre.id == activeGenre && "text-primary"}`}
            onClick={() => {
              router.push(
                {
                  pathname: router.pathname,
                  query: { ...router.query, genre: genre.id },
                },
                null,
                { scroll: false }
              );
            }}
          >
            {genre.name}
          </h3>
        ))}

        {/* fade effect on the right of scrollbar */}
        <div className="absolute top-0 right-0 h-10 w-8 bg-gradient-to-l from-body" />
      </div>
    </div>
  );
}

export default Genres;
