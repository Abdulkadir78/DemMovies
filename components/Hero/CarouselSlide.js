import { useMemo } from "react";
import { useRouter } from "next/router";

import Genres from "./Genres";
import Rating from "../Shared/Rating";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function CarouselSlide({ movie, mediaType, apiImageUrl, genres }) {
  const router = useRouter();

  const genreObjs = useMemo(() => {
    return genres.filter((genre) => movie.genre_ids.includes(genre.id));
  }, [genres, movie.genre_ids]);

  const release = useMemo(() => {
    const releaseDate = new Date(movie.release_date || movie.first_air_date);
    const releaseMonth = monthNames[releaseDate.getMonth()];
    const releaseYear = releaseDate.getFullYear();
    return releaseMonth && releaseYear && `${releaseMonth}, ${releaseYear}`;
  }, [movie]);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-no-repeat pb-10"
      style={
        apiImageUrl
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                url('${apiImageUrl}/w1280/${movie.backdrop_path}')`,
            }
          : {}
      }
    >
      <div className="container pt-56 w-11/12 sm:w-9/12 md:w-7/12">
        <h1
          className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold cursor-pointer
        hover:text-gray-300 transition duration-300 line-clamp-3 pb-2"
          onClick={() => {
            router.push(`/${movie.media_type || mediaType}/${movie.id}`);
          }}
        >
          {movie.title ||
            movie.name ||
            movie.original_title ||
            movie.original_name}
        </h1>

        <Rating score={movie.vote_average / 2} showText className="mt-6" />
        <p className="mt-6 w-full sm:w-10/12 font-medium line-clamp-3">
          {movie.overview}
        </p>

        <Genres genres={genreObjs} className="mt-8" />

        <div className="mt-7">
          {release && (
            <span className="w-full sm:w-10/12 font-medium mr-1">Release </span>
          )}
          <span className="w-full sm:w-10/12 font-bold text-primary">
            {release}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CarouselSlide;
