import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
            <li><img src='/logo192.png' alt='logo' /></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/activities">Etkinlikler</Link></li>
            <li><Link to="/aodactivities">Süresi Dolan Etkinlikler</Link></li>
            <li><Link to="/createActivity">Yeni Etkinlik</Link></li>
    </nav>
  )
}

export default Navbar