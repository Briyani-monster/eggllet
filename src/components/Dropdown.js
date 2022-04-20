import React from "react";
import { Link } from "react-router-dom";
const Dropdown = ({ toggle }) => {
  return (
    <div className="grid grid-row-4 text-center items-center bg-yellow-500">
      <Link onClick={toggle} className="p-4" to="/">
        Home
      </Link>
      <Link onClick={toggle} className="p-4" to="/menu">
        Menu
      </Link>
      <Link onClick={toggle} className="p-4" to="/about">
        About
      </Link>
      <Link onClick={toggle} className="p-4" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
