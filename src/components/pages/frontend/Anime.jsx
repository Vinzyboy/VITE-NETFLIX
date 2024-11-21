import React from "react";
import Slider from "react-slick";
import MoviesItem from "./MoviesItem";

const Anime = () => {
  const AnimeArray = [
    {
      img: "top-1.webp",
    },
    {
      img: "top-2.webp",
    },
    {
      img: "top-3.jpg",
    },
    {
      img: "top-4.webp",
    },
    {
      img: "top-5.jpg",
    },
    {
      img: "top-6.webp",
    },
    {
      img: "top-7.webp",
    },
    {
      img: "top-8.webp",
    },
    {
      img: "top-9.jpg",
    },
    {
      img: "top-10.webp",
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
    <section className="anime pt-20">
      <div className=" mb-10 pl-12">
        <h2 className="text-3xl font-bold">Anime</h2>
      </div>

      <div className="container max-w-[2000px] px-10">
        <Slider {...settings}>
          {AnimeArray.map((item, key) => (
            <MoviesItem item={item} key={key} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Anime;
