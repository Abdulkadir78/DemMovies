import { useState } from "react";
import { useRouter } from "next/router";

function SearchBox() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    e.key === "Enter" && router.push(`/search?q=${query}`);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      className="font-semibold outline-none border-0 bg-customWhite bg-opacity-20 
        rounded-lg w-11/12 sm:w-5/12 xl:h-10 p-2 my-4 mx-5 sm:my-0 text-sm lg:text-base"
      value={query}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  );
}

export default SearchBox;
