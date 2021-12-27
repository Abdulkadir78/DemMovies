import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

function Pagination({ totalPages }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    setCurrentPage(router.query.page || 1);
  }, [router.query.page]);

  const updateCurrentPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, page: pageNumber },
      },
      null,
      { scroll: false }
    );
  };

  return (
    <div className="flex justify-center mt-2">
      {[...new Array(totalPages)].map((_, index) => (
        <div
          key={index}
          className={`w-8 min-w-fit h-8 rounded-full mr-2 p-2 flex items-center
          justify-center cursor-pointer hover:bg-primary transition duration-300
          ${currentPage == index + 1 ? "bg-primary" : "bg-customBlack"}`}
          onClick={() => {
            updateCurrentPage(index + 1);
          }}
        >
          <span>{index + 1}</span>
        </div>
      ))}
    </div>
  );
}

export default Pagination;
