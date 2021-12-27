import Brand from "./Brand";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";

function Navbar() {
  return (
    <div
      className="container absolute z-10 mx-auto w-full h-40 sm:h-24 flex flex-col 
      sm:flex-row items-center justify-between pt-7 sm:mt-0"
    >
      <Brand />
      <NavLinks />
      <SearchBox />
    </div>
  );
}

export default Navbar;
