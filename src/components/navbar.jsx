import React from 'react';
import { Link } from 'react-scroll'; // folosim react-scroll pentru scroll smooth
import logo from '../assets/logo-TSA-header.png'; // ai redenumit corect imaginea!

function Navbar() {
  return (
    <header className="header-container">
      <img
        src={logo}
        alt="Logo TSA Construct - Servicii de Transport Materiale de Construcții"
        className="logo1"
      />
      <nav>
        <ul className="nav-container">
          <li className="nav-li">
            <Link to="acasa" smooth={true} duration={500}>
              Acasă
            </Link>
          </li>
          <li className="nav-li">
            <Link to="servicii" smooth={true} duration={500}>
              Servicii
            </Link>
          </li>
          <li className="nav-li">
            <Link to="despre" smooth={true} duration={500}>
              Despre
            </Link>
          </li>
          <li className="nav-li">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Link to="contact" smooth={true} duration={500}>
        <button title="buton contact">Contactează-ne</button>
      </Link>
    </header>
  );
}

export default Navbar;
