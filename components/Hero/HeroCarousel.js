import { useState, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GenresContext } from "../../contexts/Genres";
import { MoviesContext } from "../../contexts/Movies";
import CarouselSlide from "./CarouselSlide";

function HeroCarousel() {
  const [isNextArrowDisabled, setIsNextArrowDisabled] = useState(false);
  const [isPrevArrowDisabled, setIsPrevArrowDisabled] = useState(true);

  const { combinedGenres } = useContext(GenresContext);
  const { top5Movies, mediaType, apiImageUrl } = useContext(MoviesContext);

  function PrevArrow({ onClick }) {
    return (
      <div
        className={`slick-arrow z-10 absolute bottom-10 right-16 md:right-32 xl:right-60 
        cursor-pointer ${
          isPrevArrowDisabled && "opacity-50 cursor-not-allowed"
        }`}
        onClick={onClick}
      >
        <img
          src="/images/arrow-left.svg"
          className="w-4 md:w-5"
          alt="prev arrow"
        />
      </div>
    );
  }

  function NextArrow({ onClick }) {
    return (
      <div
        className={`slick-arrow absolute bottom-10 right-8 md:right-20 xl:right-48 
        cursor-pointer ${
          isNextArrowDisabled && "opacity-50 cursor-not-allowed"
        }`}
        onClick={onClick}
      >
        <img
          src="/images/arrow-right.svg"
          className="w-4 md:w-5"
          alt="next arrow"
        />
      </div>
    );
  }

  const settings = {
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    edgeFriction: 0,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (currentIndex, nextIndex) => {
      // Carousel has a maximum of 5 slides, so nextIndex will be 4 on the last slide
      // and 0 on the first slide
      if (nextIndex === 4) {
        setIsNextArrowDisabled(true);
      } else {
        setIsNextArrowDisabled(false);
      }

      if (nextIndex !== 0) {
        setIsPrevArrowDisabled(false);
      } else {
        setIsPrevArrowDisabled(true);
      }
    },
  };

  return (
    <Slider {...settings}>
      {top5Movies.map((movie) => (
        <CarouselSlide
          key={movie.id}
          apiImageUrl={apiImageUrl}
          movie={movie}
          mediaType={mediaType}
          genres={combinedGenres}
        />
      ))}
    </Slider>
  );
}

export default HeroCarousel;
