function Genres({ genres, className }) {
  return (
    <div className={`flex flex-wrap ${className}`}>
      {genres.map((genre) => (
        <div
          key={genre.id}
          className="bg-primary px-3 py-2 rounded-full mr-3 mt-4 font-semibold text-sm"
        >
          {genre.name}
        </div>
      ))}
    </div>
  );
}

export default Genres;
