import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <header className="text-center my-4">
      <h1 className="display-4">{title}</h1>
      <p className="lead">{subtitle}</p>
    </header>
  );
};

export default Header;
