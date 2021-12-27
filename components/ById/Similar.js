import Poster from "../Catalog/Poster";

function Similar({ similarMovies, mediaType, apiImageUrl }) {
  return similarMovies?.length ? (
    <div className="mt-7 flex flex-wrap justify-center">
      {similarMovies.map((movie) => (
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
  ) : (
    <p className="text-gray-300 mt-5 pb-14">Could not find similar movies</p>
  );
}

export default Similar;
