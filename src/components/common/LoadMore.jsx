import React from "react";

function LoadMore() {
  return (
    <div className="flex flex-col justify-center p-8 mt-24">
      <img
        src="/footer/load-more.png"
        alt="load more images"
        className="max-w-56 mx-auto"
      />
      <h3 className="text-white text-center leading-[1.625rem] text-lg font-semibold mx-auto p-2">
        Still looking for something to watch? <br /> Check out our full library
      </h3>
      <a
        tabindex="0"
        className="mx-auto px-8 py-2 text-orange-600 hover:text-orange-500 shadow-[inset_0_0_0_0.125rem_currentColor]"
        data-t="view-all-btn"
        href="/videos/popular"
      >
        <span className="text-sm leading-relaxed font-extrabold">View all</span>
      </a>
    </div>
  );
}

export default LoadMore;
