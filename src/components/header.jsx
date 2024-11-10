import React from "react";

function Navbar() {
  return (
    <div className="header">
      <header className="d-flex flex-wrap justify-content-center py-2 mb-3 ">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <h1 className="fs-4">doggieDelights</h1>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
