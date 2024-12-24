import React from "react";
import data from "../jscc.json";
import VideoPlayer from "./VideoPlayer";
import { useNavigate } from "react-router-dom";

const JSVideoPlayer = () => {
  const navigate = useNavigate();
  return (
    <div style={{ position: "relative" }}>
      <button
        style={{ position: "absolute", top: "10px", left: "10px" }}
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <h1>{data.name}</h1>
      {data.lessons.map((item) => (
        <VideoPlayer
          key={item.name}
          name={item.name}
          description={item.description}
          vimeoId={item.video.vimeoId}
          instructor={item.video.instructor}
        />
      ))}
    </div>
  );
};

export default JSVideoPlayer;
