import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/help">Help</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Community Compass - Built for the Congressional App Challenge by Eric Mu</p>
          <p>Connecting communities.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;