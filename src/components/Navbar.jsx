import React from "react";
import { assets } from "../assets/assets";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  return (
    <>
      <div className="flex items-center justify-between font-semibold w-full py-2 pr-3  ">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 cursor-pointer p-2 bg-black rounded-2xl"
            src={assets.arrow_left}
          ></img>
          <img
            onClick={() => navigate(+1)}
            className="w-8 cursor-pointer p-2 bg-black rounded-2xl"
            src={assets.arrow_right}
          ></img>
        </div>
        <div className=" items-center gap-2 flex">
          <button className="bg-white px-4 py-1 rounded-2xl text-black hidden lg:block">
            Explore Premium
          </button>
          <button className="bg-black text-white px-4 py-1 rounded-2xl hidden lg:block">
            Install App
          </button>
          <p className="w-9 h-9 bg-yellow-500 cursor-pointer text-white rounded-full flex justify-center items-center">
            S
          </p>
        </div>
      </div>

      {!isAlbum && (
        <div className="flex gap-2 items-center mt-4 md:ml-1 lg:mt-2">
          <p className="bg-white px-4 font-semibold py-1 rounded-2xl text-black cursor-pointer">
            All
          </p>
          <p className="bg-black px-4 py-1 rounded-2xl text-white cursor-pointer">
            Music
          </p>
          <p className="bg-black px-4 py-1 rounded-2xl text-white cursor-pointer">
            Podcast
          </p>
        </div>
      )}
    </>
  );
};

export default Navbar;
