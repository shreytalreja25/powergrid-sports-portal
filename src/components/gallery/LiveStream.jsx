import React from "react";

const LiveStream = () => {
  return (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
      title="Live Stream"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        borderRadius: "8px",
        border: "1px solid #ccc",
      }}
    ></iframe>
  );
};

export default LiveStream;
