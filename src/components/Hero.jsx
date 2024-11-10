import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.jpg";

const Hero = () => {
  return (
    <div className="border-b border-black pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Devvrat Saini
            </h1>
            <span className="bg-gradient-to-r from-purple-600 via-blue-400 to-pink-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="Devvrat Saini"
              className="rounded-3xl w-80 h-80 border border-black lg:w-96 lg:h-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
