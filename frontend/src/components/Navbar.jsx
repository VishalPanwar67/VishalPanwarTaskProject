import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="topbar">
      <div className="logo-mark">
        <span />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2563eb"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        Real Trust
      </div>
      <div className="nav-links">
        <a href="/#home" className="nav-link">
          Home
        </a>
        <a href="/#services" className="nav-link">
          Services
        </a>
        <a href="/#projects" className="nav-link">
          About Projects
        </a>
        <a href="/#about" className="nav-link">
          Testimonials
        </a>
        <a href="/#contact" className="button primary small">
          Contact
        </a>
        <Link to="/admin" className="button ghost small">
          Admin
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
