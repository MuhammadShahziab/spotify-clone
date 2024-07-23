import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-h-[180px] lg:min-w-52 group min-w-28    md:w-auto px-2 py-2 rounded-md flex flex-col gap-y-1 hover:bg-[#ffffff26]"
    >
      <div className="relative">
        <img className="rounded-xl" src={image} alt={name} />
      </div>
      <p className="font-bold ml-1 ">{name}</p>
      <p className="text-sm text-slate-200 ml-1 line-clamp-2">{desc}</p>
    </div>
  );
};

export default AlbumItem;
