import React, { useState, useEffect } from 'react';
import client1 from '../assets/client-1.jpg';
import client2 from '../assets/client-2.jpg';
import client3 from '../assets/client-3.jpg';
import '../app.css';

function Testimonials() {
  const realTestimonials = [
    {
      name: 'MARIAN P.',
      role: 'Client',
      text: '“Cei mai punctuali și atenți angajați. Cu siguranță voi colabora cu ei și pe viitor.”',
      image: client1,
    },
    {
      name: 'Rareș D.',
      role: 'Client',
      text: '“Cu astfel de servicii îți e drag să muncești!”',
      image: client3,
    },
    {
      name: 'TUDOR C.',
      role: 'Client',
      text: '“Mulțumesc pentru serviciile oferite și pentru înțelegere.”',
      image: client2,
    },
  ];

  const testimonials = [...realTestimonials, ...realTestimonials]; // dublează pentru infinit
  const [currentIndex, setCurrentIndex] = useState(realTestimonials.length);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    const total = realTestimonials.length;
    if (currentIndex >= testimonials.length) {
      setTimeout(() => setCurrentIndex(total), 0);
    }
    if (currentIndex < 0) {
      setTimeout(() => setCurrentIndex(testimonials.length - total), 0);
    }
  }, [currentIndex, testimonials.length, realTestimonials.length]);

  return (
    <section className="testimoniale-container">
      <div className="titlu-testimoniale">
        <h2 className="titlu-container">TESTIMONIALELE CLIENȚILOR</h2>
        <div id="btn-t">
          <button className="prev-btn-t" onClick={handlePrev} title="buton inapoi">◀</button>
          <button className="next-btn-t" onClick={handleNext} title="buton inainte">▶</button>
        </div>
      </div>

      <div className="testimoniale-wrapper">
        <div
          className="testimoniale-carduri"
          style={{ transform: `translateX(-${currentIndex * 320}px)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div className="client-card" key={index}>
              <div className="header-card-client">
                <img src={testimonial.image} alt="Client" className="client-img" />
                <div className="detalii-client">
                  <h4>{testimonial.name}</h4>
                  <p className="client-status">{testimonial.role}</p>
                </div>
              </div>
              <div className="testimonial">
                <p>{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
