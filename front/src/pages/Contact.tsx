import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Kontakt</h1>
      
      <div className="contact-container">
        <section className="contact-info">
          <h2>Dane kontaktowe</h2>
          <p>✉️ Email: kontakt@premierleaguechecker.pl</p>
          <p>📞 Telefon: +48 123 456 789</p>
          <p>📍 Adres: ul. Piłkarska 10, 00-001 Warszawa</p>
        </section>

        <section className="contact-form">
          <h2>Formularz kontaktowy</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Imię i nazwisko:</label>
              <input type="text" id="name" placeholder="Wprowadź swoje imię i nazwisko" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Wprowadź swój email" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Wiadomość:</label>
              <textarea id="message" rows={5} placeholder="Treść wiadomości..."></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Wyślij wiadomość</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;