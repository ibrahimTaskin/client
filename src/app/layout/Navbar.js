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
          <Link to="/activities">Etkinlikler</Link>
        </li>
        <li>
          <Link to="/activities">Süresi Biten Etkinlikler</Link>
        </li>
        <li>
          <Link to="/about">Hakkımızda</Link>
        </li>
      </ul>
      <div >
        <Link className="create-btn" to="/createActivity">Yeni Etkinlik</Link>
        </div>
    </nav>
  );
};

export default Navbar;
