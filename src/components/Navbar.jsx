import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Sports Portal
        </Link>
        <div className="nav-links">
          <Link to="/events">Events</Link>
          <Link to="/results">Results</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/uttam-awards">Uttam Awards</Link>
          <Link to="/nominate">Nominate</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
