import React, { useState, useEffect, useRef } from 'react';
import pamantIcon from '../assets/pamant-icon.png';
import piatraIcon from '../assets/piatra-icon.png';
import balastIcon from '../assets/balast-icon.png';
import { Link } from 'react-scroll';
import '../app.css';

function Services() {
  const realCards = [
    { icon: pamantIcon, title: 'PĂMÂNT', description: 'Disponibilitate: pământ vegetal pentru grădini, pământ pentru umplutură.' },
    { icon: piatraIcon, title: 'PIATRĂ', description: 'Disponibilitate: piatră pentru întărirea solului, piatră pentru gabioane etc.' },
    { icon: balastIcon, title: 'BALAST', description: 'Disponibilitate: balast cu granulație diferită, balast pentru fundații etc.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const cards = [realCards[realCards.length - 1], ...realCards, realCards[0]]; // [ultimul, ...reale, primul]

  const handleNext = () => {
    setCurrentIndex(prev => prev + 1);
    setIsTransitioning(true);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => prev - 1);
    setIsTransitioning(true);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === cards.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(cards.length - 2);
    }
  };

  return (
    <section id="servicii" className="servicii-container">
      <div className="titlu-container">
        <h2>SERVICII OFERITE</h2>
      </div>

      <div className="servicii-wrapper">
        <div className="s-info">
          <p>Cere o ofertă de preț pentru a putea să vă oferim cele mai bune servicii în cel mai scurt timp posibil.</p>
          <p>Specificați numărul de telefon, tipul de marfă dorit, cantitatea și locația transportului.</p>
          <p>Transporturile se realizează doar pe suprafața județului Cluj.</p>
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn-principal">Cere o ofertă de preț</button>
          </Link>
        </div>

        <div className="servicii">
          <div className="carduri-container">
            <div
              className="carduri"
              style={{
                transform: `translateX(-${currentIndex * 270}px)`,
                transition: isTransitioning ? 'transform 0.5s ease' : 'none',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {cards.map((card, index) => (
                <div className="card" key={index}>
                  <img src={card.icon} alt={card.title} height="50px" />
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="buttons-carousel">
            <button className="prev-btn" onClick={handlePrev}>◀</button>
            <button className="next-btn" onClick={handleNext}>▶</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
