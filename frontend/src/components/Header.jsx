import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container">
        <Link to="/" className="logo">
          Community Compass
        </Link>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#volunteer">Volunteer</a></li>
        </ul>
        <Link to="/get-started" className="cta-button">Get Started</Link>
      </nav>
    </header>
  );
};

export default Header;