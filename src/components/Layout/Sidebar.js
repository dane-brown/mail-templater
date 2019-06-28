import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { FaHome, FaPaperPlane } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <Link to="/">
        <FaHome fill="#fff" />
      </Link>
      <Link to="/schedule">
        <FaPaperPlane fill="#fff" />
      </Link>
    </div>
  );
};

export default Sidebar;
