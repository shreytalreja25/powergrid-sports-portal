import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/pg-logo.png"; // Import the logo image
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
          <img
            src={logo}
            alt="Sports Portal Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          <span>Sports Portal</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/events">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/results">
                Results
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/uttam-awards">
                Uttam Awards
              </Link>
            </li>
            <li>
              <Link to="/manage-nominations" className="nav-link">
                Manage Nominations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary text-white" to="/nominate">
                Nominate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
