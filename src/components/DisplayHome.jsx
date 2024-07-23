import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="mb-4">
        <h1 className="text-white font-bold text-2xl my-5">Featured Charts</h1>
        <div className="flex  overflow-auto ">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              image={item.image}
              id={item.id}
              desc={item.desc}
            ></AlbumItem>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="text-white font-bold text-2xl my-5">
          Today's biggest hits
        </h1>
        <div className="flex  overflow-auto ">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            ></SongItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
