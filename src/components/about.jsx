import React from 'react';
import { Link } from 'react-scroll';
import arrow from '../assets/arrow.png';
import aboutBackground from '../assets/about-img.png';
import '../app.css'; 

function About() {
  return (
    <>
      {/* Informații despre autobasculantă */}
      <section id="despre" className="informatii-container">
  <div className="titlu-container">
    <h2>INFORMAȚII DESPRE AUTOBASCULANTĂ</h2>
  </div>

  <div className="info-wrapper">
    <div className="info-text">
      <p className="info-paragraf">
        Serviciul nostru de transport marfă oferă clienților toate informațiile necesare pentru o alegere corectă înainte de începerea transportului.
      </p>
      <p className="info-paragraf">
        Autobasculanta <strong>MAN TGA 8x4</strong> permite rabatarea laterală sau descărcarea materialelor prin oblonul lateral, facilitând eficiența și siguranța.
      </p>
      <Link to="contact" smooth={true} duration={500}>
        <button className="btn-principal" title="buton contact">Contactează-ne</button>
      </Link>
    </div>

    <div className="info-caracteristici">
      {[
        "17.165 tone masa totală",
        "Tractor semiremorcă",
        "Șasiu basculantă",
        "Șasiu platformă"
      ].map((text, index) => (
        <div className="caracteristica" key={index}>
          <img src={arrow} alt="Săgeată caracteristică" width="40px" className="sageata-icon" />
          <p>{text}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Despre TSA Construct */}
      <section 
        className="despre-container"
        style={{ backgroundImage: `url(${aboutBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="despre">
          <h2 className="titlu-despre">DESPRE TSA CONSTRUCT</h2>

          <ul className="lisat-despre">
            <li className="despr">
              <span role="img" aria-label="worker">👷</span>
              <span className="h3">MUNCITORI PROFESIONIȘTI</span>
              <p>Cea mai bună și bine pregătită echipă cu experiență de peste 10 ani.</p>
            </li>
            <li className="despr">
              <span role="img" aria-label="check">✅</span>
              <span className="h3">CALITATE GARANTATĂ</span>
              <p>Ne îndeplinim promisiunea de a oferi clienților servicii pe măsura nevoilor lor.</p>
            </li>
            <li className="despr">
              <span role="img" aria-label="calendar">📅</span>
              <span className="h3">EXPERIENȚĂ VASTĂ</span>
              <p>O experiență de peste 10 ani în domeniu și recunoaștere printre cele mai bune firme.</p>
            </li>
          </ul>

          <Link to="contact" smooth={true} duration={500}>
            <button className="btn-principal" title="buton contact">Contactează-ne</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;
