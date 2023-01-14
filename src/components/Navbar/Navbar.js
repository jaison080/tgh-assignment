import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [route, setRoute] = useState("home");
  useEffect(() => {
    if (window.location.pathname === "/") setRoute("home");
    else setRoute("bookmarks");
  }, []);

  return (
    <div className="navbar__container">
      <NavLink
        to="/"
        className={
          route === "home"
            ? "navbar__container_navbar_item_active"
            : "navbar__container_navbar_item"
        }
        onClick={() => setRoute("home")}
      >
        Home
      </NavLink>
      <NavLink
        to="/bookmarks"
        onClick={() => setRoute("bookmarks")}
        className={
          route === "bookmarks"
            ? "navbar__container_navbar_item_active"
            : "navbar__container_navbar_item"
        }
      >
        Bookmarks
      </NavLink>
    </div>
  );
}

export default Navbar;
