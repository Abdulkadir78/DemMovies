import axios from "axios";

import SearchResults from "../components/Search/SearchResults";
import getRequestUrl from "../utils/requestUrls";
import Meta from "../components/Meta";
import Pagination from "../components/Catalog/Pagination";

function Search({ query, moviesAndTv, totalPages }) {
  return (
    <div className="container mb-10">
      <Meta title="Search" />
      <SearchResults query={query} moviesAndTv={moviesAndTv} />

      {!!moviesAndTv?.length && totalPages > 1 && (
        <Pagination totalPages={totalPages} />
      )}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { q, page } = context.query;

  const response = await axios.get(
    getRequestUrl({ key: "search", searchQuery: q, page })
  );
  const totalPages = response.data.total_pages;

  // filter out people's data (keep only movies & tv shows)
  const filteredShows = response?.data?.results?.filter(
    (result) => result.media_type !== "person"
  );

  return {
    props: {
      query: q,
      moviesAndTv: filteredShows,
      totalPages: totalPages > 5 ? 5 : totalPages,
    },
  };
};

export default Search;
