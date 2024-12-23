import React, { useState, useEffect } from "react";
import PredictionBoxes from "../components/gallery/PredictionBoxes";

const GalleryPage = () => {
  // Array of video URLs
  const videoUrls = [
    "https://www.youtube.com/embed/AUzzBuQdz_I",
    "https://www.youtube.com/embed/L3374C3OyrY",
    "https://www.youtube.com/embed/lX6840cmpf0",
    "https://www.youtube.com/embed/XWWM4jycABI",
    "https://www.youtube.com/embed/j-5re1bjfGM",
  ];

  // Randomly shuffle the video array on component mount
  const [shuffledVideos, setShuffledVideos] = useState([]);

  useEffect(() => {
    const shuffled = [...videoUrls].sort(() => Math.random() - 0.5);
    setShuffledVideos(shuffled);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Live Game Broadcast and AI Predictions</h2>

      {/* Live Stream Section */}
      <div className="row mb-5">
        <div className="col-md-8">
          <div className="card shadow">
            <iframe
              className="card-img-top"
              width="100%"
              height="400"
              src={shuffledVideos[0] + "?autoplay=1&mute=1"}
              title="Live Game Broadcast"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="card-body">
              <h5 className="card-title">Live Stream</h5>
              <p className="card-text">
                Watch the live game broadcast and stay updated on the latest actions.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <PredictionBoxes />
        </div>
      </div>

      {/* Video Carousel Section */}
      <h3 className="text-center mb-4">Highlights & Predictions</h3>
      <div id="videoCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {shuffledVideos.map((videoUrl, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="card shadow">
                    <iframe
                      className="card-img-top"
                      width="100%"
                      height="250"
                      src={videoUrl + "?autoplay=1&mute=1"}
                      title={`Game Highlights ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <div className="card-body">
                      <h5 className="card-title">{`Game Highlights ${index + 1}`}</h5>
                      <p className="card-text">Exciting moments and AI predictions.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card shadow">
                    <div className="card-body">
                      <h5 className="card-title">More Game Insights</h5>
                      <p className="card-text">
                        Watch key strategies and AI-driven predictions for an enhanced viewing
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#videoCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#videoCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default GalleryPage;
