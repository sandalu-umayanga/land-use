import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission (e.g., send an email or store data)
    console.log('Form Data:', formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <h2>Contact & Community Engagement</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
