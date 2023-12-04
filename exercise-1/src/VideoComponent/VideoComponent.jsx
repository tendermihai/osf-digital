import React from "react";

const VideoComponent = () => {
  return (
    <div>
      <h1>Adding YouTube Video</h1>
      <iframe
        title="YouTube Video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fxbOiHmFy4w"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoComponent;
