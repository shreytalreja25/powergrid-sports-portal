import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTag } from "react-icons/fa";
import cricketImage from "../../assets/cricket.jpg";

export function EventGrid() {
  const events = [
    {
      id: 1,
      name: "Corporate Football Championship 2024",
      date: "March 15, 2024",
      time: "10:00 AM",
      location: "New Delhi Stadium",
      description: "Inter-regional football tournament with 8 participating teams.",
      category: "Corporate",
      featured: true,
    },
    {
      id: 2,
      name: "Regional Badminton Tournament",
      date: "April 5, 2024",
      time: "9:00 AM",
      location: "Mumbai Sports Complex",
      description: "Annual badminton tournament for all skill levels and regional offices.",
      category: "Regional",
    },
    {
      id: 3,
      name: "Cricket League 2024",
      date: "May 1, 2024",
      time: "2:00 PM",
      location: "Kolkata Cricket Ground",
      description: "Twenty20 cricket league with teams from across the country.",
      category: "Open",
    },
    {
      id: 4,
      name: "Open Swimming Championship",
      date: "June 10, 2024",
      time: "11:00 AM",
      location: "Chennai Aquatic Complex",
      description: "National-level swimming competition with participants from all regions.",
      category: "National",
    },
  ];

  const featuredEvent = events.find((event) => event.featured);
  const regularEvents = events.filter((event) => !event.featured);

  return (
    <div className="container">
      {featuredEvent && (
        <div className="mb-5">
          <h2 className="mb-4 text-center fw-bold">Featured Event</h2>
          <div
            className="d-flex flex-column flex-md-row align-items-center border rounded shadow bg-light p-4"
            style={{ minHeight: "250px" }}
          >
            <div className="flex-grow-1 me-md-4">
              <h3 className="mb-3">{featuredEvent.name}</h3>
              <div className="d-flex align-items-center mb-2">
                <FaCalendarAlt className="me-2 text-primary" />
                <span>{featuredEvent.date}</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <FaClock className="me-2 text-primary" />
                <span>{featuredEvent.time}</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <FaMapMarkerAlt className="me-2 text-primary" />
                <span>{featuredEvent.location}</span>
              </div>
              <p className="mb-2">{featuredEvent.description}</p>
              <span className="badge bg-secondary">
                <FaTag className="me-1" />
                {featuredEvent.category}
              </span>
            </div>
            <div style={{ flex: "1", textAlign: "center" }}>
              <img
                src={cricketImage}
                alt="Featured Event"
                className="img-fluid rounded"
                style={{ maxHeight: "150px" }}
              />
            </div>
            {/* <div>
              <img
                src="https://via.placeholder.com/150" // Replace with an appropriate image URL
                alt="Event"
                className="img-fluid rounded"
                style={{ maxWidth: "200px", height: "auto" }}
              />
            </div> */}
          </div>
        </div>
      )}
      <div>
        <h2 className="mb-4 text-center fw-bold">Other Events</h2>
        <div className="row">
          {regularEvents.map((event) => (
            <div key={event.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div
                className="p-4 border rounded shadow bg-light d-flex flex-column"
                style={{ minHeight: "250px" }}
              >
                <h4 className="mb-3">{event.name}</h4>
                <div className="d-flex align-items-center mb-2">
                  <FaCalendarAlt className="me-2 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <FaClock className="me-2 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <FaMapMarkerAlt className="me-2 text-primary" />
                  <span>{event.location}</span>
                </div>
                <p className="mb-2">{event.description}</p>
                <span className="badge bg-secondary mt-auto">
                  <FaTag className="me-1" />
                  {event.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
