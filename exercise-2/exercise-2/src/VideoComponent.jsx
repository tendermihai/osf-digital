// src/VideoComponent.jsx
import React from "react";

const VideoComponent = () => {
  return (
    <div>
      <iframe
        data-testid="youtube-video"
        title="YouTube Video"
        src="your-youtube-video-url"
      />
    </div>
  );
};

export default VideoComponent;
