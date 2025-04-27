import React from 'react';
import '../app.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-meniu">
        <ul>
          <li><a href="#acasa">Acasă</a></li>
          <li><a href="#servicii">Servicii</a></li>
          <li><a href="#despre">Despre</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <button className="btn-footer">Contactează-ne</button>

      <div className="copy">
        &copy; {new Date().getFullYear()} TSA Construct. Toate drepturile rezervate.
      </div>
    </footer>
  );
}

export default Footer;
