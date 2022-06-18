import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
          <a href="/" className="site-name">Hacktivities</a>
      <ul>
        <li>
          <Link to="/activities">Etkinlikler</Link>
        </li>
        <li>
          <Link to="/aodactivities">Süresi Dolan Etkinlikler</Link>
        </li>
        <li>
          <Link className="create-btn" to="/createActivity">Yeni Etkinlik</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
