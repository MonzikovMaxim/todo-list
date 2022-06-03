import React from "react";

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper px1">
      <a href="/" className="brand-logo">
        React + TS
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <a href="/">Tasks</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </div>
  </nav>
);