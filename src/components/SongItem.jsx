import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { playerContext } from "../context/PlayerContext";

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId, track, playerStatus, pause } = useContext(playerContext);

  const playSongWithId = () => {
    if (track.id === id) {
      pause();
    } else {
      playWithId(id);
    }
  };

  return (
    <div
      onClick={playSongWithId}
      className=" min-w-28 md:min-w-36  cursor-pointer  lg:min-w-[190px]  group  px-2 py-2 rounded-md flex flex-col gap-y-1 hover:bg-[#ffffff26]"
    >
      <div className="relative">
        <img className="rounded-xl" src={image} alt={name} />
        <div
          className={`w-11 h-11 ${
            track.id === id && "-translate-y-2 opacity-100"
          } absolute bottom-0 right-2 transform translate-y-1 group-hover:-translate-y-2 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 flex items-center justify-center bg-primary rounded-full`}
        >
          {playerStatus ? (
            <img
              className="w-4 cursor-pointer "
              src={assets.pause_icon}
              alt="Play Icon"
            />
          ) : (
            <img
              className="w-4 cursor-pointer "
              src={assets.play_icon}
              alt="Play Icon"
            />
          )}
        </div>
      </div>
      <p className="font-bold ml-1 ">{name}</p>
      <p className="text-sm text-slate-200 ml-1 line-clamp-2">{desc}</p>
    </div>
  );
};

export default SongItem;
