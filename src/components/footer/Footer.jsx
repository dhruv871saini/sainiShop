import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={3} className="footer-col">
            <h5>About Us</h5>
            <p>Welcome to MyShop, your number one source for all kinds of Product Categories. We're dedicated to giving you the very best of Products, with a focus on dependability, customer service, and uniqueness.</p>
          </Col>
          <Col md={3} className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
          <Col md={3} className="footer-col">
            <h5>Follow Us</h5>
            <ul>
              <li><a href="#" target="_blank" aria-label="Facebook"><i className="fab fa-facebook-f" /> Facebook</a></li>
              <li><a href="#" target="_blank" aria-label="Twitter"><i className="fab fa-twitter" /> Twitter</a></li>
              <li><a href="https://www.instagram.com/dhruv__saini_?igsh=YzljYTk1ODg3Zg%3D%3D" target="_blank" aria-label="Instagram"><i className="fab fa-instagram" /> Instagram</a></li>
            </ul>
          </Col>
          <Col md={3} className="footer-col">
            <h5>Subscribe to Newsletter</h5>
            <form>
              <input type="email" placeholder="Enter your email" aria-label="Email address" />
              <button type="submit">Subscribe</button>
            </form>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="footer-copyright">
            <p>&copy; 2023 MyShop. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
