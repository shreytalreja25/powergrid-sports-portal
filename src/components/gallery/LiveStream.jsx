import React from "react";

const LiveStream = () => {
  const liveStreamUrl = "https://www.example.com/your-live-stream"; // Replace with your live stream URL

  return (
    <div className="embed-responsive embed-responsive-16by9 bg-dark rounded shadow">
      <iframe
        src={liveStreamUrl}
        title="Live Game Broadcast"
        allowFullScreen
        className="embed-responsive-item w-100 h-100 rounded"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default LiveStream;
