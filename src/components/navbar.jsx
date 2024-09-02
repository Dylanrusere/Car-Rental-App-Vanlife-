import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const location = useLocation();

  // Check if the current route is either Profile or Signup
  const hideNavLinks = location.pathname === "/profile" || location.pathname === "/signup" || location.pathname === "/";

  return (
    <nav>
      <Link to="/" className="titleLogo">#CarRental</Link>
      <div className="ham_menu" onClick={() => setMenuVisible(!menuVisible)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuVisible ? "open" : ""}>
        {/* Conditionally render the About and Vans links */}
        {!hideNavLinks && (
          <>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/vans">Vans</NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to="/profile"><i className="fa-solid fa-right-from-bracket"></i></NavLink>
        </li>
      </ul>
    </nav>
  );
};
