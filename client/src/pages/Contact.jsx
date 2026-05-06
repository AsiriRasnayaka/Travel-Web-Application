import React from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Our friendly team is always here to chat.</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <p className="contact-info-subtitle">Fill up the form and our Team will get back to you within 24 hours.</p>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="icon-circle">
                <Phone size={20} />
              </div>
              <div className="method-details">
                <h3>Phone</h3>
                <p>+94 70 131 1273</p>
                <p>+94 77 072 9022</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="icon-circle">
                <Mail size={20} />
              </div>
              <div className="method-details">
                <h3>Email</h3>
                <p>hello@travelapp.com</p>
                <p>support@travelapp.com</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="icon-circle">
                <MapPin size={20} />
              </div>
              <div className="method-details">
                <h3>Office</h3>
                <p>123 SrilankaExplorers</p>
                <p>Colombo, Sri Lanka</p>
              </div>
            </div>
          </div>

          <div className="social-proof">
            <div className="social-icon"><Globe size={20} /></div>
            <div className="social-icon"><Clock size={20} /></div>
          </div>

          <div className="decorative-circle-1"></div>
          <div className="decorative-circle-2"></div>
        </div>

        <div className="contact-form-section">
          <form className="contact-form">
            <div className="form-row">
              <div className="input-group">
                <input type="text" id="firstName" placeholder=" " required />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="input-group">
                <input type="text" id="lastName" placeholder=" " required />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <input type="email" id="email" placeholder=" " required />
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="input-group">
                <input type="tel" id="phone" placeholder=" " />
                <label htmlFor="phone">Phone Number</label>
              </div>
            </div>

            <div className="input-group full-width">
              <textarea id="message" rows="4" placeholder=" " required></textarea>
              <label htmlFor="message">Your Message</label>
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <Send size={18} className="send-icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
