function Brand() {
  return (
    <div className="flex items-center">
      <img
        src="/images/brand.svg"
        alt="DemMovies brand logo"
        width={40}
        height={40}
      />
      <h4 className="text-2xl xl:text-3xl ml-2 mt-1 font-brand">DemMovies</h4>
    </div>
  );
}

export default Brand;
