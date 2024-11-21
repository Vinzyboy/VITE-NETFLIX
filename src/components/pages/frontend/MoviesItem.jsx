import React from "react";
import { imgPath } from "../../helpers/functions-general";

const MoviesItem = ({ item, key }) => {
  return (
    <div className="movies-card px-4" key={key}>
      <img src={`${imgPath}/${item.img}`} alt="" className="w-full" />
    </div>
  );
};

export default MoviesItem;
