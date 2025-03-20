import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We bring you the best flavors with high-quality ingredients. Taste
            the difference today!
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@foodhub.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Location: 123 Food Street, City</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="/" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="/" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="/" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="/" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 FoodHub | All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
