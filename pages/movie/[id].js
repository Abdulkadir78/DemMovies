import axios from "axios";

import ById from "../../components/ById/ById";
import getRequestUrl from "../../utils/requestUrls";

function MovieById({ movie, trailerId, similarMovies, mediaType }) {
  return (
    <ById
      movie={movie}
      similarMovies={similarMovies}
      trailerId={trailerId}
      mediaType={mediaType}
    />
  );
}

export const getServerSideProps = async (context) => {
  const movie = await axios.get(
    getRequestUrl({ key: "movieById", id: context.params.id })
  );

  const trailers = movie.data.videos.results.filter(
    (video) => video.type === "Trailer"
  );
  // get the id of one of the trailers (last one here)
  const trailerId = trailers?.pop()?.key;

  return {
    props: {
      movie: movie.data,
      trailerId: trailerId || null,
      similarMovies: movie.data.similar.results,
      mediaType: "movie",
    },
  };
};

export default MovieById;
