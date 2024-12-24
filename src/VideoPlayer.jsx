import React from "react";

const VideoPlayer = ({ name, description, vimeoId, instructor }) => {
  return (
    <div
      style={{
        margin: "40px",
        marginBottom: "100px",
      }}
    >
      <div>
        {name} - {description} ~ {instructor}
      </div>
      <div>
        <iframe
          width="1066"
          height="599"
          src={`https://rev-proxy-swart.vercel.app/${vimeoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
