import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";

const Display = () => {
  const displayRef = useRef();

  const location = useLocation();

  const isAlbum = location.pathname.includes("album");

  const albumId = isAlbum ? location.pathname.slice(-1) : "";

  const albumColor =
    isAlbum && albumsData.find((item) => item.id === Number(albumId)).bgColor;

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${albumColor},#121212) `;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  }, [isAlbum, albumColor]);

  return (
    <div
      ref={displayRef}
      className="w-[100%] md:my-2 m-0  pl-1 md:pl-3 pt-2  md:pt-4 lg:w-[75%] text-white bg-[#121212] ml-0 rounded overflow-auto "
    >
      <Routes>
        <Route path="/" element={<DisplayHome></DisplayHome>}></Route>
        <Route
          path="/album/:id"
          element={<DisplayAlbum></DisplayAlbum>}
        ></Route>
      </Routes>
    </div>
  );
};

export default Display;
