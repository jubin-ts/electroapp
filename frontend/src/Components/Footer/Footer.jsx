// Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="mainhd">
        <h1>Want to know more about us?</h1>
      </div>
      <div className="footer-links">
        <a href="/About" className="footer-link">About</a>
        <a href="/Privacy" className="footer-link">Privacy Policy</a>
        <a href="/Terms" className="footer-link">Terms</a>
        <a href="/Cookies" className="footer-link">Cookie Settings</a>
      </div>
      <div className="long-line"></div>
    </div>
  );
}

export default Footer;
