import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";

const MAX_STARS = 5;

function Rating({ score, showText, className, ...props }) {
  return (
    <div className={`flex items-center ${className}`} {...props}>
      {showText && <h6>Rating</h6>}

      <div className={`flex ${showText && "ml-2"}`}>
        {[...new Array(MAX_STARS)].map((_, index) => (
          <span key={index}>
            {score >= index + 1 ? (
              <MdStar key={index} className="text-primary" />
            ) : score >= index + 0.5 ? (
              <MdStarHalf className="text-primary" />
            ) : (
              <MdStarOutline className="text-primary" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Rating;
