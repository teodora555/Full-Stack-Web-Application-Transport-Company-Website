import React from 'react';
import '../app.css';

function Map() {
  return (
    <section id="harta" className="harta-container">
      <div className="titlu-container">
        <h2>LOCAȚIA NOASTRĂ</h2>
      </div>
      <div className="harta">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.8351348313436!2d23.583634115319957!3d46.77121067913598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c17701c1f07%3A0xf7cde7db4f564c87!2sCluj-Napoca%2C%20Romania!5e0!3m2!1sen!2s!4v1595087343313!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="harta locatie"
        ></iframe>
      </div>
    </section>
  );
}

export default Map;
