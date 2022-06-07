import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper px1">
      <NavLink to="/todo-list/" className="brand-logo">
        React + TS
      </NavLink>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/todo-list/">Tasks</NavLink>
        </li>
        <li>
          <NavLink to="/todo-list/about">About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
