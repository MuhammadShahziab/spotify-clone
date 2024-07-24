import React, { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import { playerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    seekBg,
    seekBar,
    playerStatus,
    play,
    pause,
    track,
    time,
    handleSeekBar,
    next,
    previous,
  } = useContext(playerContext);
  return (
    <div className=" h-[10%]  flex justify-between  items-center px-4 fixed bottom-0 left-0 right-0">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image}></img>
        <div>
          <p className="text-white font-semibold">{track.name}</p>
          <p className="text-softtext text-sm">{track.desc.slice(0, 30)}...</p>
        </div>
      </div>

      <div className="flex flex-col m-auto items-center gap-1">
        <div className="flex items-center gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon}></img>
          <img
            onClick={previous}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
          ></img>

          {playerStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
            ></img>
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
            ></img>
          )}

          <img
            onClick={next}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
          ></img>
          <img className="w-4 cursor-pointer" src={assets.loop_icon}></img>
        </div>
        <div className="flex items-center text-white gap-5">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            onClick={(e) => handleSeekBar(e)}
            ref={seekBg}
            className="w-[60vw] max-w-[500px] rounded-full bg-gray-300 cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="border-none bg-green-400 h-1 w-0 rounded-full"
            ></hr>
          </div>
          <p>
            {" "}
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>

      <div className="hidden lg:flex  items-center gap-2   ">
        <img className="w-4 cursor-pointer" src={assets.plays_icon}></img>
        <img className="w-4 cursor-pointer" src={assets.mic_icon}></img>
        <img className="w-4 cursor-pointer" src={assets.queue_icon}></img>
        <img className="w-4 cursor-pointer" src={assets.speaker_icon}></img>
        <img className="w-4 cursor-pointer" src={assets.volume_icon}></img>
        <div className="bg-gray-300 rounded-full w-20 h-1 cursor-pointer"></div>
        <img className="w-4 cursor-pointer" src={assets.mini_player_icon}></img>
        <img className="w-4 cursor-pointer" src={assets.zoom_icon}></img>
      </div>
    </div>
  );
};

export default Player;
