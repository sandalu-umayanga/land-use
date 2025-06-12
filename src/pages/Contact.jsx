import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

// Import icons
import { FaEnvelope, FaFacebookSquare, FaLinkedin, FaMapMarkerAlt, FaPhone, FaUser, FaBookOpen } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form Data:', formData);
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          {...fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h1>Contact & Community Engagement</h1>
          <p>Have questions about our research on land use changes in Pannala DSD? Get in touch with our researcher through any of the following channels.</p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Information */}
          <motion.div 
            className="contact-info"
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Connect With Us</h2>
            
            <div className="researcher-profile">
              <div className="researcher-info">
                <div className="contact-method">
                  <FaUser className="contact-icon" />
                  <div>
                    <h3>Researcher</h3>
                    <p>P.G.M Wijebandara</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <FaBookOpen className="contact-icon" />
                  <div>
                    <h3>Subject Area</h3>
                    <p>Geography</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-methods">
              <div className="contact-method">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h3>Visit Us</h3>
                  <p>Department of Geography<br />University of Kelaniya<br />Sri Lanka</p>
                </div>
              </div>
              
              <div className="contact-method">
                <FaPhone className="contact-icon" />
                <div>
                  <h3>Call Us</h3>
                  <p>0766619991</p>
                </div>
              </div>
              
              <a href="mailto:madhushikawijebandara63@gmail.com" className="contact-method">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h3>Email Us</h3>
                  <p>madhushikawijebandara63@gmail.com</p>
                </div>
              </a>
            </div>
            
            <div className="social-links">
              <h3>Social Media</h3>
              <div className="social-icons">
                <a href="mailto:madhushikawijebandara63@gmail.com" className="social-icon gmail">
                  <FaEnvelope />
                  <span>Gmail</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100075460316462" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                  <FaFacebookSquare />
                  <span>Facebook</span>
                </a>
                <a href="https://www.linkedin.com/in/madhushika-wijebandara-010729353?trk=contact-info" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="contact-form-container"
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>Send Us a Message</h2>
            {submitted ? (
              <motion.div 
                className="form-success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <h3>Thank you!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Type your message here..."
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`submit-button ${submitting ? 'submitting' : ''}`}
                  disabled={submitting}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;