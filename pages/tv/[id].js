import axios from "axios";

import ById from "../../components/ById/ById";
import getRequestUrl from "../../utils/requestUrls";

function TvById({ tv, trailerId, similarShows, mediaType }) {
  return (
    <ById
      movie={tv}
      trailerId={trailerId}
      similarMovies={similarShows}
      mediaType={mediaType}
    />
  );
}

export const getServerSideProps = async (context) => {
  const tv = await axios.get(
    getRequestUrl({ key: "tvById", id: context.params.id })
  );

  const trailers = tv.data.videos.results.filter(
    (video) => video.type === "Trailer"
  );
  // get the id of one of the trailers (last one here)
  const trailerId = trailers?.pop()?.key;

  return {
    props: {
      tv: tv.data,
      trailerId: trailerId || null,
      similarShows: tv.data.similar.results,
      mediaType: "tv",
    },
  };
};

export default TvById;
