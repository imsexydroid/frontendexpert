import React from "react";
import data from "./../csscc.json";
import VideoPlayer from "./VideoPlayer";
import { useNavigate } from "react-router-dom";

const CSSVideoPlayer = () => {
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

export default CSSVideoPlayer;