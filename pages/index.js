import { useContext, useEffect } from "react";
import axios from "axios";

import { GenresContext } from "../contexts/Genres";
import { MoviesContext } from "../contexts/Movies";
import Navbar from "../components/Navbar/Navbar";
import HeroCarousel from "../components/Hero/HeroCarousel";
import Catalog from "../components/Catalog/Catalog";
import getRequestUrl from "../utils/requestUrls";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

function Home({
  combinedGenres,
  movieGenres,
  tvGenres,
  movies,
  showsByGenre,
  showsByPage,
  mediaType,
  totalPages,
}) {
  const { updateGenres } = useContext(GenresContext);
  const { updateMovies } = useContext(MoviesContext);

  useEffect(() => {
    updateGenres({
      combined: combinedGenres,
      movies: movieGenres,
      tv: tvGenres,
    });
  }, [combinedGenres, movieGenres, tvGenres, updateGenres]);

  useEffect(() => {
    updateMovies({
      moviesData: movies,
      type: mediaType,
      showsByGenre,
      showsByPage,
      totalPages,
    });
  }, [updateMovies, movies, showsByGenre, showsByPage, mediaType, totalPages]);

  return (
    <>
      <Navbar />
      <HeroCarousel />
      <Catalog />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { sort_by, genre, page } = context.query;
  const allowedSortBys = ["movie", "tv"];

  const movieGenres = await axios.get(getRequestUrl({ key: "movieGenres" }));
  const tvGenres = await axios.get(getRequestUrl({ key: "tvGenres" }));
  const moviesOrTv = await axios.get(getRequestUrl({ key: sort_by }));

  let showsByPage;
  if (page > 1) {
    // doing this to change the movies only in the catalog and not in the carousel
    showsByPage = await axios.get(getRequestUrl({ key: sort_by, page }));
  }

  let totalPages = moviesOrTv.data.total_pages;
  let showsByGenre;
  // url may not always have the genre, in which case the popular movies/tv-shows are shown
  if (genre) {
    // check if sort_by is either movie or tv, otherwise fetch trending movies & tv
    if (allowedSortBys.includes(sort_by)) {
      showsByGenre = await axios.get(
        getRequestUrl({
          key: `${sort_by}ByGenre`,
          genreId: genre,
          page,
        })
      );
      totalPages = showsByGenre.data.total_pages;
    } else {
      const moviesByGenre = await axios.get(
        getRequestUrl({
          key: "movieByGenre",
          genreId: genre,
          page,
        })
      );

      const tvByGenre = await axios.get(
        getRequestUrl({
          key: "tvByGenre",
          genreId: genre,
          page,
        })
      );

      const moviePages = moviesByGenre.data.total_pages;
      const tvPages = tvByGenre.data.total_pages;
      totalPages = Math.max(moviePages, tvPages);

      // assign media types to each set
      moviesByGenre.data.results.forEach(
        (movie) => (movie.media_type = "movie")
      );
      tvByGenre.data.results.forEach((tv) => (tv.media_type = "tv"));

      // merge both movies and tv
      showsByGenre = {
        data: {
          results: [...moviesByGenre.data.results, ...tvByGenre.data.results],
        },
      };
    }
  }

  let combinedGenres = [...movieGenres.data.genres, ...tvGenres.data.genres];
  // get unique genres (movies and tv may have same genres)
  combinedGenres = [
    ...new Map(combinedGenres.map((item) => [item.id, item])).values(),
  ];

  return {
    props: {
      movies: moviesOrTv.data.results,
      showsByGenre: showsByGenre?.data?.results || null,
      showsByPage: showsByPage?.data?.results || null,
      movieGenres: movieGenres.data.genres,
      tvGenres: tvGenres.data.genres,
      mediaType: sort_by || null,
      combinedGenres,
      // App will only show data till 5 pages
      totalPages: totalPages > 5 ? 5 : totalPages,
    },
  };
};

export default Home;
