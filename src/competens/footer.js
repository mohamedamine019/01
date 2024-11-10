import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // تأكد من أنك قمت بتثبيت react-icons

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
      </div>
      <p>&copy; 2024 Varphi Club. All rights reserved.</p>
    </div>
  );
};

export default Footer;