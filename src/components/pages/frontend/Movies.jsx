import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { imgPath } from "../../helpers/functions-general";
import MoviesItem from "./MoviesItem";

const Movies = () => {
  const MoviesArray = [
    {
      img: "top-2.webp",
    },
    {
      img: "top-8.webp",
    },

    {
      img: "top3.webp",
    },
    {
      img: "top4.jpg",
    },
    {
      img: "top5.webp",
    },
    {
      img: "top7.webp",
    },
    {
      img: "top1.jpg",
    },
    {
      img: "top101.webp",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  return (
    <section className="movies pt-20">
      <div className=" mb-10 pl-12">
        <h2 className="text-3xl font-bold">Top Movies</h2>
      </div>

      <div className="container max-w-[2000px] px-10">
        <Slider {...settings}>
          {MoviesArray.map((item, key) => (
            <MoviesItem item={item} key={key} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Movies;
