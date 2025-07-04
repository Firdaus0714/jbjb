import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import useFetch from "../../hooks/useFetch";

function MovieSliders({ filteredBy, heading, subHeading }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // fetch data from the api

  // Fetch data from the API
  const { data: animeData, loading: animeLoading } = useFetch(
    "https://api.jikan.moe/v4/top/anime?filter=" + filteredBy
  );

  const slidesToShow = 5;
  const totalSlides =
    (animeData && Math.ceil(animeData.length || 0 / slidesToShow)) || 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < totalSlides ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : totalSlides - 1
    );
  };

  return (
    <div className="relative bg-black py-8 mx-[2.5rem]">
      {/* Header */}
      <div className="text-start px-8 mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">{heading}</h2>
        <p className="text-gray-400 text-sm md:text-base">{subHeading}</p>
      </div>

      {/* Slider */}
      {animeLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${(animeData?.length || 0) * (100 / slidesToShow)}%`,
              transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
            }}
          >
            {animeData &&
              animeData.map((anime) => (
                <div key={anime.mal_id} className="flex-shrink-0 px-2">
                  <MovieCard
                    image={anime.images.jpg.image_url}
                    title={anime.title}
                    audioOptions={anime.audioOptions}
                    rating={anime.score}
                    members={anime.members}
                    episodes={anime.episodes}
                    description={anime.synopsis}
                  />
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 text-white p-2 md:p-3"
      >
        <svg
          className="text-white w-11 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-t="angle-left-svg"
          aria-labelledby="angle-svg"
          aria-hidden="true"
          role="img"
        >
          <title id="angle-svg">Previous</title>
          <path
            fill="currentColor"
            d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z"
          ></path>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 text-white p-2 md:p-3"
      >
        <svg
          className="text-white w-11"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-t="angle-right-svg"
          aria-labelledby="angle-svg"
          aria-hidden="true"
          role="img"
        >
          <title id="angle-svg">Next</title>
          <path
            fill="currentColor"
            d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default MovieSliders;
