import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa"; // Import Sun and Moon icons
import logo from "../assets/pg-logo.png"; // Import the logo image
import "./Navbar.css"; // Import custom styles

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode class on the body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

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
            <li className="nav-item">
              <Link className="nav-link" to="/manage-nominations">
                Manage Nominations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary text-white" to="/nominate">
                Nominate
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-dark ms-3 d-flex align-items-center"
                onClick={toggleTheme}
              >
                {isDarkMode ? (
                  <>
                    <FaSun className="me-1" />
                    LIGHT
                  </>
                ) : (
                  <>
                    <FaMoon className="me-1" />
                    DARK
                  </>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
