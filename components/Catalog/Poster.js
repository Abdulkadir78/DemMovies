import { useRouter } from "next/router";

import Rating from "../Shared/Rating";

function Poster({ id, mediaType, title, rating, year, image, apiImageUrl }) {
  const router = useRouter();

  return (
    <div
      className="mx-2 mb-5 sm:mb-10 w-[43%] sm:w-[30%] md:w-[20%] xl:w-[15%] 
      cursor-pointer hover:scale-105 transition duration-500 relative"
      onClick={() => {
        router.push(`/${mediaType}/${id}`);
      }}
    >
      <img
        src={
          image ? `${apiImageUrl}/original${image}` : "/images/no-poster.jpg"
        }
        alt="movie poster"
        width={200}
        height={300}
        loading="lazy"
        className="rounded-md object-cover h-full"
      />

      <div className="absolute bottom-0 p-2 rounded-b-md bg-[#171924] bg-opacity-75 w-full">
        <h6 className="text-sm font-medium">{title}</h6>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-1">
          <Rating score={rating} />
          <span className="font-medium text-sm mr-1 mt-1 sm:mt-0">{year}</span>
        </div>
      </div>
    </div>
  );
}

export default Poster;
