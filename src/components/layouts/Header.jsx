import React, { useEffect, useRef, useState } from "react";

function Header() {
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);

  const browseRef = useRef(null);
  const newsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (browseRef.current && !browseRef.current.contains(event.target)) {
        setIsBrowseOpen(false);
      }
      if (newsRef.current && !newsRef.current.contains(event.target)) {
        setIsNewsOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-custom-gray h-16 fixed z-50 w-full">
      <div className="md:mx-14 px-2 md:px-4">
        <div className="flex justify-between">
          {/* mobile button goes here */}
          <div className="sm:hidden flex space-x-4">
            <div className="md:hidden flex ">
              <button className="mobile-menu-button">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            {/* mobile view logo */}
            <div className="sm:hidden">
              <a href="#" className="flex items-center py-5 px-2">
                <svg
                  className="text-orange-600 hover:text-white w-6 m-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  data-t="crunchyroll-logo-only-svg"
                  aria-labelledby="crunchyroll-logo-only-svg"
                  aria-hidden="true"
                  role="img"
                >
                  <title id="crunchyroll-logo-only-svg">Crunchyroll logo</title>
                  <path
                    fill="currentColor"
                    d="M5.818 26.871c.01-11.65 9.466-21.086 21.117-21.073 11.153.01 20.275 8.678 21.022 19.638.028-.467.043-.94.043-1.413C48.014 10.77 37.28.013 24.024 0 10.768-.014.014 10.721 0 23.976-.014 37.23 10.721 47.987 23.976 48c.548 0 1.092-.018 1.63-.054-11.051-.676-19.8-9.856-19.788-21.076Zm32.568.312a8.2 8.2 0 0 1-8.19-8.208 8.204 8.204 0 0 1 5.424-7.71 17.923 17.923 0 0 0-8.375-2.073c-9.95-.01-18.022 8.047-18.032 17.995-.01 9.95 8.047 18.022 17.995 18.033 9.948.01 18.022-8.047 18.032-17.997 0-1.127-.103-2.23-.301-3.301a8.187 8.187 0 0 1-6.554 3.261h.001Z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex space-x-4">
            {/* web logo */}
            <div className="hidden  sm:block">
              <a href="#" className="flex items-center py-5 px-2">
                <svg
                  className="text-orange-600 hover:text-white w-32 m-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 303 52"
                  data-t="crunchyroll-horizontal-svg"
                  aria-labelledby="crunchyroll-horizontal-svg"
                  aria-hidden="false"
                  role="img"
                >
                  <title id="crunchyroll-horizontal-svg">
                    Crunchyroll logo
                  </title>
                  <path
                    fill="currentColor"
                    d="M62.1772 26.0647C62.1772 17.3803 69.1876 10.3699 77.872 10.3699C84.2042 10.3699 89.2693 13.8967 91.8466 19.0081L85.425 22.1742C84.0686 19.2794 81.3094 17.1091 77.872 17.1091C73.1676 17.1091 69.3233 20.9996 69.3233 26.0647C69.3233 31.1299 73.1676 35.0667 77.872 35.0667C81.3094 35.0667 84.0686 32.8963 85.425 30.0015L91.8466 33.1676C89.2693 38.279 84.2042 41.8058 77.872 41.8058C69.1876 41.8058 62.1772 34.7954 62.1772 26.0647Z M94.3376 18.7368H101.077V22.3992C102.298 20.0933 104.197 18.7368 106.506 18.7368H108.405V25.3865H106.188C102.976 25.3865 101.484 27.1499 101.484 30.2728V41.3526H94.3376V18.7368Z M110.754 31.6724V18.7368H117.9V31.6724C117.9 34.1603 119.484 35.6986 121.88 35.6986C124.275 35.6986 125.86 34.1603 125.86 31.6724V18.7368H133.006V31.6724C133.006 37.6871 128.301 41.8027 121.88 41.8027C115.458 41.8027 110.754 37.6871 110.754 31.6724Z M136.4 18.7368H143.41V21.4959C144.995 19.6863 147.208 18.5117 149.789 18.5117C155.307 18.5117 158.926 22.538 158.926 28.3275V41.3526H151.78V28.3275C151.78 25.9291 150.017 24.1195 147.665 24.1195C145.312 24.1195 143.549 25.9291 143.549 28.3275V41.3526H136.403V18.7368H136.4Z M178.691 32.1256L184.526 34.8848C182.671 38.9541 178.647 41.8058 173.761 41.8058C167.158 41.8058 161.864 36.5588 161.864 30.0447C161.864 23.5306 167.158 18.2836 173.761 18.2836C178.691 18.2836 182.717 21.1784 184.573 25.2478L178.694 28.0532C177.926 25.9723 176.024 24.5264 173.764 24.5264C170.78 24.5264 168.517 26.968 168.517 30.0447C168.517 33.1214 170.78 35.563 173.764 35.563C175.981 35.563 177.88 34.1603 178.694 32.1256H178.691Z M186.832 10.8231H193.978V21.4528C195.563 19.6432 197.733 18.5117 200.221 18.5117C205.739 18.5117 209.359 22.538 209.359 28.3275V41.3526H202.213V28.3275C202.213 25.9291 200.449 24.1195 198.097 24.1195C195.745 24.1195 193.981 25.9291 193.981 28.3275V41.3526H186.835V10.8231H186.832Z M222.337 32.215L227.131 18.7368H234.277L225.14 42.7091C223.241 47.6848 220.254 49.8089 215.188 49.8089H211.933V43.5661H215.188C217.134 43.5661 218.129 42.7522 218.672 41.3958L209.67 18.7368H217.312L222.334 32.215H222.337Z M236.087 18.7368H242.826V22.3992C244.047 20.0933 245.946 18.7368 248.255 18.7368H250.154V25.3865H247.938C244.725 25.3865 243.233 27.1499 243.233 30.2728V41.3526H236.087V18.7368Z M251.15 30.0447C251.15 23.5769 256.443 18.2836 263.136 18.2836C269.829 18.2836 275.122 23.5769 275.122 30.0447C275.122 36.5125 269.829 41.8058 263.136 41.8058C256.443 41.8058 251.15 36.5588 251.15 30.0447ZM257.8 30.0447C257.8 33.2108 260.152 35.563 263.136 35.563C266.12 35.563 268.472 33.2108 268.472 30.0447C268.472 26.8786 266.12 24.5264 263.136 24.5264C260.152 24.5264 257.8 26.8786 257.8 30.0447Z M286.427 41.3526C280.502 41.3526 278.06 38.7291 278.06 33.1214V10.8231H285.206V33.1214C285.206 34.3884 285.749 35.1129 287.016 35.1129H288.19V41.3557H286.427V41.3526Z M298.367 41.3526C292.442 41.3526 290 38.7291 290 33.1214V10.8231H297.146V33.1214C297.146 34.3884 297.689 35.1129 298.956 35.1129H300.13V41.3557H298.367V41.3526Z M7.81735 28.8732C7.82968 17.2231 17.2848 7.78652 28.9349 7.79885C40.0886 7.81118 49.2108 16.4771 49.9568 27.4366C49.9846 26.968 50 26.4963 50 26.0247C50.0123 12.7684 39.2809 2.01234 26.0247 2.00001C12.7684 1.98768 2.01234 12.7222 2.00001 25.9753C1.98768 39.2316 12.7222 49.9877 25.9753 50C26.5241 50 27.0667 49.9815 27.6062 49.9476C16.5542 49.2724 7.80502 40.0917 7.81735 28.8732Z M40.3846 29.1846C35.8559 29.1815 32.1873 25.5037 32.1935 20.9749C32.1965 17.4235 34.4594 14.4023 37.6193 13.2647C35.1191 11.9453 32.2705 11.1961 29.2432 11.1931C19.2948 11.1838 11.2208 19.2393 11.2116 29.1877C11.2023 39.136 19.2578 47.21 29.2062 47.2193C39.1545 47.2285 47.2285 39.173 47.2378 29.2216C47.2378 28.0933 47.136 26.9927 46.9387 25.9198C45.4405 27.9021 43.0636 29.1846 40.3846 29.1815V29.1846Z"
                  ></path>
                </svg>
              </a>
            </div>

            {/* primary nav */}
            <div className="hidden sm:flex items-center space-x-1">
              <div className="relative" ref={browseRef}>
                <div
                  onClick={() => setIsBrowseOpen(!isBrowseOpen)}
                  className="flex text-custom-gray-2 hover:text-white hover:bg-background-hover cursor-pointer"
                >
                  <a href="#" className="py-5 px-4 leading-6">
                    Browse
                  </a>
                  <svg
                    className="w-6 text-custom-gray-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-t="dropdown-svg"
                    aria-labelledby="dropdown-svg"
                    aria-hidden="true"
                    role="img"
                  >
                    <title id="dropdown-svg">Dropdown menu</title>
                    <path fill="currentColor" d="M7 10h10l-5 5z"></path>
                  </svg>
                </div>
                {isBrowseOpen && (
                  <div className="absolute left-0 mt-2 p-2 w-[30rem] bg-black text-white shadow-lg">
                    <div className="p-4 grid grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          Popular
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          New
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          Alphabetical
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          Simulcast Season
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          Release Calendar
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          Music Videos & Concerts
                        </a>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-white font-bold pb-2">GENRES</h3>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          Action
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          Adventure
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          Comedy
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          Drama
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          Fantasy
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          Music
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          Romance
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          Sci-Fi
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          Seinen
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          Shojo
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          Shonen
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          Slice of life
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          Sports
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          Supernatural
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white"
                        >
                          Thriller
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a
                href="#"
                className="py-5 px-4 leading-6 text-custom-gray-2 hover:text-white hover:bg-background-hover cursor-pointer"
              >
                Games
              </a>
              <div className="relative" ref={newsRef}>
                <div
                  onClick={() => setIsNewsOpen(!isNewsOpen)}
                  className="flex text-custom-gray-2 hover:text-white hover:bg-background-hover cursor-pointer"
                >
                  <a href="#" className="py-5 px-4 leading-6">
                    News
                  </a>
                  <svg
                    className="w-6 text-custom-gray-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-t="dropdown-svg"
                    aria-labelledby="dropdown-svg"
                    aria-hidden="true"
                    role="img"
                  >
                    <title id="dropdown-svg">Dropdown menu</title>
                    <path fill="currentColor" d="M7 10h10l-5 5z"></path>
                  </svg>
                </div>
                {isNewsOpen && (
                  <div className="absolute left-0 mt-2 p-2 w-[15rem] bg-black text-white shadow-lg">
                    <div className="space-y-2">
                      <a
                        href="#"
                        className="block text-gray-300 hover:text-white"
                      >
                        Action
                      </a>
                      <a
                        href="#"
                        className="block text-gray-300 hover:text-white"
                      >
                        Adventure
                      </a>
                      <a
                        href="#"
                        className="block text-gray-300 hover:text-white"
                      >
                        Comedy
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* secondary nav */}
          <div className="flex items-center space-x-1 px-3 gap-1 sm:gap-4">
            <div className="flex items-center space-x-1">
              <div className="flex items-center p-1 cursor-pointer">
                <svg
                  className="w-6 text-premium-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-t="premium-filled-svg"
                  aria-labelledby="premium-filled-svg"
                  aria-hidden="true"
                  role="img"
                >
                  <title id="premium-filled-svg">Premium</title>
                  <path
                    fill="currentColor"
                    d="M2.419 13L0 4.797 4.837 6.94 8 2l3.163 4.94L16 4.798 13.581 13z"
                  ></path>
                </svg>
              </div>
              <div className="hidden sm:flex flex-col ml-1 cursor-pointer">
                <span className="text-premium-icon leading-3 text-xs font-semibold">
                  Try Free
                </span>
                <span className="text-custom-gray-2 leading-3 text-xs font-semibold">
                  Premium
                </span>
              </div>
            </div>
            <div className="flex items-center p-1 cursor-pointer">
              <svg
                className="w-6 text-custom-gray-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-t="search-svg"
                aria-labelledby="search-svg"
                aria-hidden="false"
                role="img"
              >
                <title id="search-svg">Search</title>
                <path
                  fill="currentColor"
                  d="M15.474 14.035l6.235 6.26a1 1 0 1 1-1.418 1.41l-6.228-6.253a7.5 7.5 0 1 1 1.41-1.418zM9.5 15a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
                ></path>
              </svg>
            </div>
            <div className="flex items-center p-1 cursor-pointer">
              <svg
                className="w-6 text-custom-gray-2"
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
            </div>
            <div className="flex items-center p-1 cursor-pointer">
              <svg
                className="w-6 text-custom-gray-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-t="user-settings-svg"
                aria-labelledby="user-settings-svg"
                aria-hidden="true"
                role="img"
              >
                <title id="user-settings-svg">Account menu</title>
                <path
                  fill="currentColor"
                  d="M12 20a6.01 6.01 0 0 1-5.966-5.355L12 12.088l5.966 2.557A6.01 6.01 0 0 1 12 20m0-16c1.654 0 3 1.346 3 3s-1.345 3-2.999 3h-.002A3.003 3.003 0 0 1 9 7c0-1.654 1.346-3 3-3m7.394 9.081l-4.572-1.959A4.997 4.997 0 0 0 17 7c0-2.757-2.243-5-5-5S7 4.243 7 7c0 1.71.865 3.22 2.178 4.122l-4.572 1.959A.999.999 0 0 0 4 14c0 4.411 3.589 8 8 8s8-3.589 8-8c0-.4-.238-.762-.606-.919"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className="mobile-menu hidden md:hidden">
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Features
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Pricing
        </a>
      </div>
    </nav>
  );
}

export default Header;
