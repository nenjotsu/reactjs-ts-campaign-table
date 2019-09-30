import * as React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="footer-section">
      <span>
        <Link to="/about" className="link">
          nenjotsu &copy; 2019
        </Link>
      </span>
    </section>
  );
};

export default Footer;
