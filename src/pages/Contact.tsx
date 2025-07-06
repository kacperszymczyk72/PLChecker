import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = { name: '', email: '', message: '' };
    let hasError = false;

    if (!formData.name) {
      newErrors.name = "Proszę wpisać imię i nazwisko.";
      hasError = true;
    }
    if (!formData.email) {
      newErrors.email = "Proszę wpisać email.";
      hasError = true;
    }
    if (!formData.message) {
      newErrors.message = "Proszę wpisać treść wiadomości.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setErrors({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <section className="contact-info">
          <h2>Dane kontaktowe</h2>
          <p>✉️ Email: kontakt@premierleaguechecker.pl</p>
          <p>📞 Telefon: +48 123 456 789</p>
          <p>📍 Adres: ul. Piłkarska 10, 00-001 Warszawa</p>
        </section>

        <section className="contact-form">
          <h2>Formularz kontaktowy</h2>
          {submitted ? (
            <p className="thank-you">Dziękujemy za wiadomość! Skontaktujemy się wkrótce. ⚽</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Imię i nazwisko:</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Wprowadź swoje imię i nazwisko"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Wprowadź swój email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Wiadomość:</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Treść wiadomości..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>
              
              <button type="submit" className="submit-btn">Wyślij wiadomość</button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
};

export default Contact;
