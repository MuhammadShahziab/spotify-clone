import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const playerContext = createContext();

const PlayerContextProvider = ({ children }) => {
  const audioRef = useRef();
  const seekBar = useRef();
  const seekBg = useRef();
  const [track, setTrack] = useState(songsData[0]);
  const [playerStatus, setPlayerStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayerStatus(true);
    }
  };
  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayerStatus(true);
    }
  };

  const play = async () => {
    await audioRef.current.play();
    setPlayerStatus(true);
  };
  const handlePlayFirstTrack = async () => {
    await setTrack(songsData[0]);
    play();
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayerStatus(false);
  };

  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayerStatus(true);
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";

        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);

  const handleSeekBar = (e) => {
    const seekBarWidth = seekBg.current.offsetWidth;
    const clickPosition = e.nativeEvent.offsetX;
    const newTime = (clickPosition / seekBarWidth) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
  };

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playerStatus,
    setPlayerStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    next,
    previous,
    handleSeekBar,
    handlePlayFirstTrack,
  };
  return (
    <playerContext.Provider value={contextValue}>
      {children}
    </playerContext.Provider>
  );
};

export default PlayerContextProvider;
