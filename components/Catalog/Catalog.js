import { useContext } from "react";

import { MoviesContext } from "../../contexts/Movies";
import Genres from "./Genres";
import Posters from "./Posters";
import Pagination from "./Pagination";

const mapMediaTypeToText = {
  movie: "Movies",
  tv: "TV",
};

function Catalog() {
  const { mediaType, totalPages } = useContext(MoviesContext);

  return (
    <div className="container mb-10">
      <h1 className="text-3xl font-bold mt-20">
        {mapMediaTypeToText[mediaType] || "Trending"}
      </h1>
      <Genres />
      <Posters />
      <Pagination totalPages={totalPages} />
    </div>
  );
}

export default Catalog;
