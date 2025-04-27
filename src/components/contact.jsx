import React, { useState } from 'react';
import phoneIcon from '../assets/telefon.png';
import mailIcon from '../assets/mail.png';
import addressIcon from '../assets/adresa.png';
import '../app.css'; // stiluri generale

function Contact() {
  const [formData, setFormData] = useState({
    telefon: '',
    marfa: '',
    cantitate: '',
    locatie: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\d+$/.test(formData.telefon)) {
      alert('Vă rugăm să introduceți un număr de telefon valid.');
      return;
    }
    alert('Cererea a fost trimisă cu succes!');
  };

  return (
    <section id="contact" className="contacteaza-container">
      <h2 className="titlu-container" title="buton contact">CONTACTEAZĂ-NE</h2>

      <div className="contact-card">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="telefon">Numărul de telefon:</label><br />
            <input
              type="text"
              name="telefon"
              value={formData.telefon}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input">
            <label htmlFor="marfa">Tipul de marfă dorit:</label><br />
            <input
              type="text"
              name="marfa"
              value={formData.marfa}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input">
            <label htmlFor="cantitate">Cantitatea de marfă dorită:</label><br />
            <input
              type="text"
              name="cantitate"
              value={formData.cantitate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input">
            <label htmlFor="locatie">Locație livrare transport:</label><br />
            <input
              type="text"
              name="locatie"
              value={formData.locatie}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn-principal" type="submit" title="buton oferta de pret">
            Cere o ofertă de preț
          </button>
        </form>

        <div className="detalii-firma">
          <div className="input-firma">
            <h5 className="label">Numărul de telefon:</h5>
            <div className="detaliu">
              <img className="img-input" src={phoneIcon} alt="Număr de telefon" width="32px" />
              <p>+40 785 77 89 27</p>
            </div>
          </div>

          <div className="input-firma">
            <h5 className="label">Adresa de mail:</h5>
            <div className="detaliu">
              <img className="img-input" src={mailIcon} alt="Adresa de email" width="24px" />
              <p>tsa.construct@yahoo.com</p>
            </div>
          </div>

          <div className="input-firma">
            <h5 className="label">Adresa:</h5>
            <div className="detaliu">
              <img className="img-input" src={addressIcon} alt="Adresă firmă" width="24px" />
              <p>Cluj, Cluj-Napoca</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
