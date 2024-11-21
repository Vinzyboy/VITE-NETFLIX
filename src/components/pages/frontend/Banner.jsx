import React from "react";


import { imgPath } from "@/components/helpers/functions-general";
import { Play } from "lucide-react";

const Banner = () => {
  return (
    <section>
      <div className="">
        <img
          src={`${imgPath}/banner.webp`}
          alt=""
          className="relative w-full h-screen object-cover max-h-[calc(100vh-79px)]"
        />
        <div className="absolute top-1/2 left-80 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <p className="text-xl">2005</p>
            <p className="text-xl">Action</p>
            <p className="text-xl">2hr 5mins</p>
            <small className="border text-xs">HD</small>
          </div>

          <h1 className="font-bold text-[50px]">Fast and Furious</h1>
          <p>asdfga</p>
          <p>asdgag</p>
          <div className="flex gap-3">
            <button className="flex gap-1 bg-red-600 p-2 rounded-md px-4">
              <Play fill="white" />
              Play
            </button>
            <button className="bg-gray-700 p-2 rounded-md px-4">
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
