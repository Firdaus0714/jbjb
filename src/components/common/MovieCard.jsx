import formatMembers from "../../utils/formatMembers";

function MovieCard({
  image,
  title,
  audioOptions,
  rating,
  members,
  episodes,
  description,
}) {
  return (
    <div className="max-w-64 bg-black text-white rounded-lg overflow-hidden shadow-lg mx-2 relative group">
      <div className="md:h-96 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="max-w-full object-cover transition-opacity duration-300 group-hover:opacity-30"
        />
      </div>
      <div className="p-4">
        <h2 className="text-sm font-bold mb-2 text-start">{title}</h2>
        <p className="text-xs text-start text-gray-300">{audioOptions}</p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-80 text-custom-gray-2 flex flex-col items-start justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-2">
        <div className="flex flex-col items-start gap-1">
          <h4 className="text-md font-semibold leading-5">{title}</h4>
          <div className="flex items-center justify-start gap-[0.l5rem] text-sm mt-2">
            <p className="">{rating}</p>
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-t="star-svg"
              aria-labelledby="star-svg"
              aria-hidden="false"
              role="img"
            >
              <title id="star-svg">Star Review</title>
              <path
                fill="currentColor"
                d="M15.266 8.352L11.988 1.723 8.73 8.352 1.431 9.397 6.71 14.528 5.465 21.849 11.999 18.39 18.544 21.85 17.285 14.528 22.57 9.398z"
              ></path>
            </svg>
            <p>({formatMembers(members)})</p>
          </div>
          <div className="flex flex-col justify-start text-sm text-gray-400 font-semibold">
            <span>2 Season</span>
            <span>{episodes} Episodes</span>
          </div>
          <p className="text-sm text-white leading-5 ">
            {description && description.slice(0, 150)}...
          </p>
        </div>

        <div className="flex items-center justify-start gap-2">
          <svg
            className="w-6 h-6 text-premium-icon hover:text-orange-500 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-t="play-svg"
            aria-labelledby="play-svg"
            aria-hidden="false"
            role="img"
          >
            <title id="play-svg">Play</title>
            <path
              fill="currentColor"
              d="M5.944 3C5.385 3 5 3.445 5 4.22v16.018c0 .771.384 1.22.945 1.22.234 0 .499-.078.779-.243l13.553-7.972c.949-.558.952-1.468 0-2.028L6.724 3.243C6.444 3.078 6.178 3 5.944 3m1.057 2.726l11.054 6.503L7 18.732l.001-13.006"
            ></path>
          </svg>

          <svg
            className="w-6 h-6 text-premium-icon hover:text-orange-500 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-t="watchlist-svg"
            aria-labelledby="watchlist-svg"
            aria-hidden="false"
            role="img"
          >
            <title id="watchlist-svg">Watchlist</title>
            <path
              fill="currentColor"
              d="M17 18.113l-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z"
            ></path>
          </svg>

          <svg
            className="w-6 h-6 text-premium-icon hover:text-orange-500 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-t="add-svg"
            aria-labelledby="add-svg"
            aria-hidden="false"
            role="img"
          >
            <title id="add-svg">Add</title>
            <path
              fill="currentColor"
              d="M13 3v8h8v2h-8v8h-2v-8H3v-2h8V3z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
