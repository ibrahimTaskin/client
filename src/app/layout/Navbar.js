import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
        <div className="site-name">
          <a href="/">Hacktivities</a>
        </div>
      <ul>
        <li>
          <Link to="/">Etkinlikler</Link>
        </li>
        <li>
          <Link to="/">Süresi Biten Etkinlikler</Link>
        </li>
        <li>
          <Link to="/about">Hakkımızda</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
