const getRequestUrl = ({ key, id, searchQuery, genreId, page = 1 }) => {
  const requestUrls = {
    trending: `/trending/all/day?api_key=${process.env.API_KEY}&page=${page}`,
    movie: `/movie/popular?api_key=${process.env.API_KEY}&page=${page}`,
    tv: `/tv/popular?api_key=${process.env.API_KEY}&page=${page}`,
    movieGenres: `/genre/movie/list?api_key=${process.env.API_KEY}`,
    tvGenres: `/genre/tv/list?api_key=${process.env.API_KEY}`,
    movieById: `/movie/${id}?api_key=${process.env.API_KEY}&append_to_response=videos,similar`,
    tvById: `/tv/${id}?api_key=${process.env.API_KEY}&append_to_response=videos,similar`,
    search: `/search/multi?api_key=${process.env.API_KEY}&query=${searchQuery}&page=${page}`,
    movieByGenre: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}&page=${page}`,
    tvByGenre: `/discover/tv?api_key=${process.env.API_KEY}&with_genres=${genreId}&page=${page}`,
  };

  return requestUrls[key] || requestUrls.trending;
};

export default getRequestUrl;
