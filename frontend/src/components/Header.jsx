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

  // Smooth scroll function
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container">
        <Link to="/" className="logo">
          Community Compass
        </Link>
        <ul className="nav-links">
          <li>
            <a 
              href="#home" 
              onClick={(e) => handleSmoothScroll(e, '#home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#features" 
              onClick={(e) => handleSmoothScroll(e, '#features')}
            >
              Features
            </a>
          </li>
          <li>
            <a href="Volunteer">Volunteer</a>
          </li>
          <li>
            <a href="About">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;