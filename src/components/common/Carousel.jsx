const Carousel = () => {
  return (
    <div className="relative shadow-md ">
      <div className="relative overflow-hidden w-full">
        <input
          className="hidden peer/1"
          type="radio"
          id="carousel-1"
          name="carousel"
          defaultChecked
        />
        <div className="absolute opacity-0 transition-opacity duration-700 ease-out peer-checked/1:static peer-checked/1:opacity-100">
          <img
            src="/carousel/image1.png"
            alt="Without"
            className="block min-h-screen max-w-full"
          />
          <div className="absolute top-56 left-20 text-white text-lg bg-black bg-opacity-50 p-2 rounded">
            <img src="/carousel/icon1.avif" alt="icon" className="w-40" />
          </div>

          <div className="absolute sm:top-[26rem] sm:left-20 text-custom-gray-2 bg-black bg-opacity-50 p-2 rounded text-sm lead leading-relaxed">
            <span>
              Sub | Dub🔹Action, Adventure, Fantasy, Isekai, Slice of Life
            </span>
          </div>
          <div className="hidden lg:block">
            <p className="absolute top-[28.5rem] left-20 text-custom-gray-2 text-wrap max-w-[29rem]">
              Corporate worker Mikami Satoru is stabbed by a random killer, and
              is reborn to an alternate world. But he turns out to be reborn a
              slime! Thrown into this new world with the name Rimuru, he begins
              his quest to create a world that’s welcoming to all races.
            </p>
          </div>

          <div className="absolute top-[37.5rem] left-20 bg-orange-600 hover:bg-orange-500 justify-evenly items-center px-2 py-1  font-bold">
            <a
              tabindex="0"
              className="text-black"
              data-t="up-next-btn"
              href="/watch/G7PU4MZ1G/the-journeys-end"
            >
              <span className="inline-flex items-center px-4 text-sm leading-[1.125rem]">
                <svg
                  className="text-black w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-t="play-svg"
                  aria-labelledby="play-svg"
                  aria-hidden="true"
                  role="img"
                >
                  <title id="play-svg">Play</title>
                  <path
                    fill="currentColor"
                    d="M5.944 3C5.385 3 5 3.445 5 4.22v16.018c0 .771.384 1.22.945 1.22.234 0 .499-.078.779-.243l13.553-7.972c.949-.558.952-1.468 0-2.028L6.724 3.243C6.444 3.078 6.178 3 5.944 3m1.057 2.726l11.054 6.503L7 18.732l.001-13.006"
                  ></path>
                </svg>
                Start Watching S1 E1
              </span>
            </a>
          </div>
          <button
            tabindex="0"
            className="absolute top-[37.5rem] left-[19rem] justify-evenly items-center px-2 py-1  font-bold w-[2.8rem] text-orange-600 shadow-[inset_0_0_0_0.125rem_currentColor]"
            data-t="watchlist-cta"
          >
            <span className="">
              <svg
                className="text-orange-600"
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
            </span>
          </button>
        </div>

        <input
          className="hidden peer/2"
          type="radio"
          id="carousel-2"
          name="carousel"
        />
        <div className="absolute opacity-0 transition-opacity duration-700 ease-out peer-checked/2:static peer-checked/2:opacity-100">
          <img
            src="/carousel/image2.png"
            alt="JavaScript"
            className="block min-h-screen max-w-full"
          />
          <div className="absolute top-56 left-20 text-white text-lg bg-opacity-50 p-2 rounded">
            <img src="/carousel/icon2.avif" alt="icon" className="w-[20rem]" />
          </div>

          <div className="absolute top-[26rem] left-20 text-custom-gray-2 bg-opacity-50 p-2 rounded text-sm lead leading-relaxed">
            <span>Sub | Dub🔹Action, Adventure, Fantasy</span>
          </div>
          <div className="hidden lg:block">
            <p className="absolute top-[28.5rem] left-20 text-custom-gray-2 text-wrap max-w-[29rem]">
              They say whatever doesn’t kill you makes you stronger, but that’s
              not the case for the world’s weakest hunter Sung Jinwoo. After
              being brutally slaughtered by monsters in a high-ranking dungeon,
              Jinwoo came back with the System, a program only he could see,
              that’s leveling him up in every way.
            </p>
          </div>
          <div className="absolute top-[37.5rem] left-20 bg-orange-600 hover:bg-orange-500 justify-evenly items-center px-2 py-1  font-bold">
            <a
              tabindex="0"
              className="text-black"
              data-t="up-next-btn"
              href="/watch/G7PU4MZ1G/the-journeys-end"
            >
              <span className="inline-flex items-center px-4 text-sm leading-[1.125rem]">
                <svg
                  className="text-black w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-t="play-svg"
                  aria-labelledby="play-svg"
                  aria-hidden="true"
                  role="img"
                >
                  <title id="play-svg">Play</title>
                  <path
                    fill="currentColor"
                    d="M5.944 3C5.385 3 5 3.445 5 4.22v16.018c0 .771.384 1.22.945 1.22.234 0 .499-.078.779-.243l13.553-7.972c.949-.558.952-1.468 0-2.028L6.724 3.243C6.444 3.078 6.178 3 5.944 3m1.057 2.726l11.054 6.503L7 18.732l.001-13.006"
                  ></path>
                </svg>
                Start Watching S1 E1
              </span>
            </a>
          </div>
          <button
            tabindex="0"
            className="absolute top-[37.5rem] left-[19rem] justify-evenly items-center px-2 py-1  font-bold w-[2.8rem] text-orange-600 shadow-[inset_0_0_0_0.125rem_currentColor]"
            data-t="watchlist-cta"
          >
            <span className="">
              <svg
                className="text-orange-600"
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
            </span>
          </button>
        </div>

        <input
          className="hidden peer/3"
          type="radio"
          id="carousel-3"
          name="carousel"
        />
        <div className="absolute opacity-0 transition-opacity duration-700 ease-out peer-checked/3:static peer-checked/3:opacity-100">
          <img
            src="/carousel/image3.png"
            alt="Carousel"
            className="block min-h-screen max-w-full"
          />
          <div className="absolute top-56 left-20 text-white text-lg bg-opacity-50 p-2 rounded">
            <img src="/carousel/icon3.avif" alt="icon" className="w-[20rem]" />
          </div>

          <div className="absolute top-[26rem] left-20 text-custom-gray-2 bg-opacity-50 p-2 rounded text-sm lead leading-relaxed">
            <span>Sub | Dub🔹Action, Adventure, Fantasy</span>
          </div>
          <div className="hidden lg:block">
            <p className="absolute top-[28.5rem] left-20 text-custom-gray-2 text-wrap max-w-[29rem]">
              In a world where humanity is on the brink of extinction, colossal
              beasts known as Titans roam the earth, devouring everything in
              their path. The last remnants of humanity have taken refuge within
              towering, fortified walls, but their safety is an illusion.
            </p>
          </div>
          <div className="absolute top-[37.5rem] left-20 bg-orange-600 hover:bg-orange-500 justify-evenly items-center px-2 py-1  font-bold">
            <a
              tabindex="0"
              className="text-black"
              data-t="up-next-btn"
              href="/watch/G7PU4MZ1G/the-journeys-end"
            >
              <span className="inline-flex items-center px-4 text-sm leading-[1.125rem]">
                <svg
                  className="text-black w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-t="play-svg"
                  aria-labelledby="play-svg"
                  aria-hidden="true"
                  role="img"
                >
                  <title id="play-svg">Play</title>
                  <path
                    fill="currentColor"
                    d="M5.944 3C5.385 3 5 3.445 5 4.22v16.018c0 .771.384 1.22.945 1.22.234 0 .499-.078.779-.243l13.553-7.972c.949-.558.952-1.468 0-2.028L6.724 3.243C6.444 3.078 6.178 3 5.944 3m1.057 2.726l11.054 6.503L7 18.732l.001-13.006"
                  ></path>
                </svg>
                Watch Now
              </span>
            </a>
          </div>
        </div>

        <label
          htmlFor="carousel-3"
          className="hidden peer-checked/1:block absolute top-1/2 left-[2%] -translate-y-1/2 bg-black/28 hover:bg-black/80 text-white hover:text-gray-400 rounded-full w-10 h-10 leading-9 text-center text-4xl cursor-pointer z-10"
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
        </label>
        <label
          htmlFor="carousel-2"
          className="hidden peer-checked/1:block absolute top-1/2 right-[2%] -translate-y-1/2 bg-black/28 hover:bg-black/80 text-white hover:text-gray-400 rounded-full w-10 h-10 leading-9 text-center text-4xl cursor-pointer z-10"
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
        </label>

        <label
          htmlFor="carousel-1"
          className="hidden peer-checked/2:block absolute top-1/2 left-[2%] -translate-y-1/2 bg-black/28 hover:bg-black/80 text-white hover:text-gray-400 rounded-full w-10 h-10 leading-9 text-center text-4xl cursor-pointer z-10"
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
        </label>
        <label
          htmlFor="carousel-3"
          className="hidden peer-checked/2:block absolute top-1/2 right-[2%] -translate-y-1/2 bg-black/28 hover:bg-black/80 text-white hover:text-gray-400 rounded-full w-10 h-10 leading-9 text-center text-4xl cursor-pointer z-10"
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
        </label>

        <label
          htmlFor="carousel-2"
          className="hidden peer-checked/3:block absolute top-1/2 left-[2%] -translate-y-1/2 bg-black/28 hover:bg-black/80 text-white hover:text-gray-400 rounded-full w-10 h-10 leading-9 text-center text-4xl cursor-pointer z-10"
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
        </label>
        <label
          htmlFor="carousel-1"
          className="hidden peer-checked/3:block absolute top-1/2 right-[2%] -translate-y-1/2 bg-black/28 hover:bg-black/80 text-white hover:text-gray-400 rounded-full w-10 h-10 leading-9 text-center text-4xl cursor-pointer z-10"
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
        </label>

        <ol className="list-none m-0 p-0 absolute sm:bottom-[22%] md:bottom-[20%] lg:bottom-[18%] left-36 text-center z-10 flex">
          <li className="inline-block mx-1">
            <label
              htmlFor="carousel-1"
              className="block h-2 cursor-pointer transition-all duration-300 ease-in-out peer-checked/1:w-16 peer-checked/1:bg-orange-500 w-8 bg-gray-500 hover:bg-orange-600 rounded-md"
            ></label>
          </li>
          <li className="inline-block mx-1">
            <label
              htmlFor="carousel-2"
              className="block h-2 cursor-pointer transition-all duration-300 ease-in-out peer-checked/2:w-16 peer-checked/2:bg-orange-500 w-8 bg-gray-500 hover:bg-orange-600 rounded-md"
            ></label>
          </li>
          <li className="inline-block mx-1">
            <label
              htmlFor="carousel-3"
              className="block h-2 cursor-pointer transition-all duration-300 ease-in-out peer-checked/3:w-16 peer-checked/3:bg-orange-500 w-8 bg-gray-500 hover:bg-orange-600 rounded-md"
            ></label>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Carousel;
