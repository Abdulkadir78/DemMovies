import { useContext } from "react";

import { MoviesContext } from "../../contexts/Movies";
import Meta from "../Meta";
import Similar from "./Similar";
import Rating from "../Shared/Rating";
import BackBtn from "../Shared/BackBtn";

function ById({ movie, trailerId, similarMovies, mediaType }) {
  const { apiImageUrl } = useContext(MoviesContext);

  const movieGenres = movie.genres.map((genreObj) => genreObj.name);
  const title =
    movie.title || movie.name || movie.original_title || movie.original_name;

  return (
    <>
      <Meta title={title} />

      <div
        className="relative h-96 w-full bg-cover bg-no-repeat"
        style={
          apiImageUrl
            ? {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), 
                  url('${apiImageUrl}/original/${movie.backdrop_path}')`,
              }
            : {}
        }
      >
        <div className="pt-5 lg:pt-10 ml-5 lg:ml-14">
          <BackBtn />
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="pt-24 sm:pt-16 px-14 sm:px-44 md:px-56 lg:px-0 flex justify-center lg:justify-start lg:pl-24 xl:pl-32">
            <img
              src={
                movie.poster_path
                  ? `${apiImageUrl}/original${movie.poster_path}`
                  : "/images/no-poster.jpg"
              }
              alt="movie poster"
              width={340}
              height={500}
              className="rounded-lg lg:max-w-xs"
              loading="lazy"
            />
          </div>

          <div className="px-4 sm:px-8 lg:px-0 lg:pr-8 lg:ml-14 mt-7 sm:mt-10 lg:mt-24">
            <div>
              <h1 className="font-bold pb-1 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl line-clamp-1">
                {title}
              </h1>
              <div className="mt-2 lg:mt-4">
                <span className="font-medium">
                  {new Date(
                    movie.release_date || movie.first_air_date
                  ).getFullYear() || null}{" "}
                  ·{" "}
                </span>

                <span className="capitalize text-sm xl:text-base font-medium">
                  {movieGenres.join(", ")}
                </span>

                <h6 className="mt-2 lg:mt-4">Rating</h6>
                <Rating score={movie.vote_average / 2} className="mt-2" />
              </div>
            </div>
          </div>
        </div>

        <div className="container flex flex-col lg:flex-row lg:pl-24 xl:pl-32 mt-10">
          <div className="lg:w-7/12 2xl:w-5/12">
            <h6 className="font-semibold mb-3">Description</h6>
            {movie.overview ? (
              <p>{movie.overview}</p>
            ) : (
              <p className="text-gray-300">No description</p>
            )}
          </div>

          <div
            className="lg:w-11/12 mt-10 lg:-mt-44 xl:-mt-32 2xl:-mt-56 lg:ml-10 2xl:ml-10 
          lg:-mr-10 xl:-mr-16 2xl:-mr-24"
          >
            <h6 className="font-semibold mb-5">Trailer</h6>
            {trailerId ? (
              <iframe
                className="w-full h-64 md:h-96 2xl:min-h-full rounded-md"
                src={`https://www.youtube-nocookie.com/embed/${trailerId}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Trailer"
              />
            ) : (
              <p className="text-gray-300">Trailer unavailable</p>
            )}
          </div>
        </div>

        <div className="container mt-14 lg:mt-24 xl:mt-36 lg:pl-24 xl:pl-32">
          <h1 className="font-bold text-2xl">
            Similar to <span className="text-blue-200"> {title}</span>
          </h1>
          <Similar
            similarMovies={similarMovies}
            mediaType={mediaType}
            apiImageUrl={apiImageUrl}
          />
        </div>
      </div>
    </>
  );
}

export default ById;
