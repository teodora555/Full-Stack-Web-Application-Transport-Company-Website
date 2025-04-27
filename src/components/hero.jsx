import React from 'react';
import { Link } from 'react-scroll';
import heroImage from '../assets/hero-img.jpg'; // importăm imaginea
import '../app.css'; 

function Hero() {
  return (
    <section id="acasa" className="hero">
      <div className="hero-text">
        <h1>SERVICII DE TRANSPORT MATERIALE CONSTRUCȚII</h1>
        <p>
          Efectuăm transportul cu autobasculante 8x4 pentru transport de materiale reciclabile,
          pământ, materiale construcții, balast, pietriș, nisip etc.
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="btn-principal" title="buton oferta de pret">Cere o ofertă de preț</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
