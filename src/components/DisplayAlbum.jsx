import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { playerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const { playWithId, track, handlePlayFirstTrack } = useContext(playerContext);
  const albumDatabyId = albumsData?.find((item) => item.id === Number(id));

  const totalDuration = () => {
    let totalSeconds = 0;
    songsData.forEach((item) => {
      const [minutes, seconds] = item.duration.split(":").map(Number);
      totalSeconds += minutes * 60 + seconds;
    });

    const hours = Math.floor(totalSeconds / 3600);
    const remainingSeconds = totalSeconds % 3600;

    const minutes = Math.floor(remainingSeconds / 60);

    return `${hours} hours ${minutes} minutes`;
  };

  return (
    <>
      <Navbar></Navbar>

      <div className="px-2 md:px-3">
        <div className="flex flex-col  md:flex-row mt-5 gap-8 md:items-end ">
          <img className="w-32 rounded-md" src={albumDatabyId.image}></img>
          <div className="flex flex-col">
            <p>Playlist</p>
            <h2 className="font-semibold text-5xl md:text-7xl mb-3 ">
              {albumDatabyId.name}
            </h2>
            <h4>{albumDatabyId.desc}</h4>
            <div className="mt-3 flex items-center">
              <img className="w-5 inline-block" src={assets.spotify_logo}></img>
              <b className="ms-1">Spotify</b>
              <span className="ms-2 text-sm">1,432,564 Likes</span>
              <span className="ms-2 text-sm">about {totalDuration()}</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <span
            onClick={handlePlayFirstTrack}
            className="w-11 h-11 cursor-pointer bg-primary rounded-full flex justify-center items-center"
          >
            <img className="w-5" src={assets.play_icon}></img>{" "}
          </span>
        </div>

        <div className="grid sm:grid-cols-4 grid-cols-3  mt-6 mb-4 pl-2 text-[#a7a7a7]">
          <p>
            <b className="mr-4">#</b> Title
          </p>
          <p>Album</p>
          <p className="hidden sm:block">Date Added</p>
          <img className="w-4 mx-auto" src={assets.clock_icon}></img>
        </div>
        <hr></hr>

        {songsData.map((item, index) => (
          <div
            onClick={() => playWithId(item.id)}
            key={index}
            className={`${
              track.id === item.id &&
              "bg-[#ffffff2b] text-primary font-semibold rounded"
            } grid grid-cols-3 sm:grid-cols-4 gap-2 p-2  hover:bg-[#ffffff2b] cursor-pointer rounded my-1`}
          >
            <p>
              <b className="mr-4">{index + 1}</b>
              <img className="w-10 inline mr-4" src={item.image}></img>
              {item.name}
            </p>
            <p className="flex items-center">{albumDatabyId.name}</p>
            <p className="text-sm hidden sm:flex items-center ">2 days ago</p>
            <p className="mx-auto flex items-center text-sm">{item.duration}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayAlbum;
