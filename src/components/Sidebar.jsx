import React from "react";
import { assets } from "../assets/assets";
const Sidebar = () => {
  return (
    <div className="w-[25%] hidden lg:flex p-2 flex-col gap-2  text-white">
      <div className="bg-[#121212] flex flex-col gap-y-1.5   justify-around pb-2 rounded h-[25%]">
        <div className="flex items-center pl-3 gap-x-1 py-1 cursor-pointer ">
          <img className="w-8" src={assets.spotify_logo}></img>
          <span className="font-bold">Spotify</span>
        </div>
        <div className="flex  pl-4 items-center gap-x-3 cursor-pointer  hover:bg-[#242424] rounded py-1">
          <img className="w-5" src={assets.home_icon}></img>
          <p className="font-semibold">Home</p>
        </div>
        <div className="flex items-center gap-x-3  pl-4  cursor-pointer hover:bg-[#242424] rounded py-1">
          <img className="w-5" src={assets.search_icon}></img>
          <p className="font-semibold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[75%] rounded  flex flex-col">
        <div className="flex justify-between px-4 py-2   items-center">
          <div className="flex gap-3 items-center">
            <img className="w-6" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex gap-3 items-center">
            <img
              className="w-4  cursor-pointer"
              src={assets.arrow_icon}
              alt=""
            />
            <img className="w-4 cursor-pointer" src={assets.plus_icon}></img>
          </div>
        </div>
        <div className="bg-[#242424] p-4 flex m-2 mt-1 flex-col rounded pl-3 gap-1 items-start justify-start font-semibold">
          <h1>Create Your First Playlist</h1>
          <p className="font-light">it's easy we will help you.</p>
          <button className="bg-primary text-white rounded-full text-[15px] shadow-md px-4 py-1.5 mt-3">
            Create Playlist
          </button>
        </div>
        <div className="bg-[#242424] p-4 flex mx-2 flex-col rounded pl-3 gap-1 items-start justify-start font-semibold">
          <h1>Let's findsome podcasts to follow</h1>
          <p className="font-light">we'll keey you updates on new episodes.</p>
          <button className="bg-white text-black rounded-full text-[15px] shadow-md px-4 py-1.5 mt-3">
            Browse Podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
