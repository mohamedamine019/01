import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // تأكد من أنك قمت بتثبيت react-icons

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-links">
        <a href="https://www.facebook.com/profile.php?id=61566918436057&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook />
        </a>
        <a href="https://x.com/varphi_club?t=34ak3Hi5IgUIEq1UMdXEMw&s=09" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/varphi_club?igsh=cGt6d2g4anoweXps" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
      </div>
      <p>&copy; 2024 Varphi Club. All rights reserved.</p>
    </div>
  );
};

export default Footer;