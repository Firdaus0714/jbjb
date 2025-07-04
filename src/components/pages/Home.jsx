import React from "react";

import Header from "../layouts/Header";
import Carousel from "../common/Carousel";
import MovieSliders from "../common/MovieSliders";
import Ad from "../common/Ad";
import Footer from "../layouts/Footer";
import LoadMore from "../common/LoadMore";

function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <MovieSliders
        filteredBy="bypopularity"
        heading="Hindi Dubs Available on Crunchyroll!"
        subHeading="Check out these great Hindi dubs!"
      />
      <MovieSliders
        filteredBy="airing"
        heading="Tamil Dubs Available on Crunchyroll!"
        subHeading="Great anime dubbed in Tamil"
      />
      <Ad url="/carousel/ad1.png" />
      <MovieSliders
        filteredBy="upcoming"
        heading="Telugu Dubs"
        subHeading="Anime now available with Telugu dubbing"
      />
      <MovieSliders
        filteredBy="favorite"
        heading="Most Popular"
        subHeading=""
      />
      <Ad url="/carousel/ad2.png" />
      <LoadMore />
      <Footer />
    </>
  );
}

export default Home;
