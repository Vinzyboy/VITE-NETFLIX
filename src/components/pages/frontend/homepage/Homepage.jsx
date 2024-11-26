import React from "react";

import Banner from "./Banner";
import SliderMovie from "./SliderMovie";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <div className="py-24 mt-20 bg-dark">
        <SliderMovie title="Trending" filter="Action" />
        <SliderMovie title="Anime" filter="Anime" />
        <SliderMovie title="Top 10" filter="International" />
        <SliderMovie title="KDrama" filter="KDrama" />
      </div>
    </div>
  );
};

export default Homepage;
