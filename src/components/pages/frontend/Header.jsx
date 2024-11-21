import React from "react";

import { Search } from "lucide-react";
import { imgPath } from "@/components/helpers/functions-general";


const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header_wrapper flex items-center justify-between">
          <ul className="flex gap-5 items-center">
            <img
              src={`${imgPath}/netflixLogo.png`}
              alt=""
              className="w-[140px]"
            />
            <li>TV Shoes</li>
            <li>Movies</li>
            <li>Recently Added</li>
            <li>My List</li>
          </ul>
          <button>
            <Search />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
