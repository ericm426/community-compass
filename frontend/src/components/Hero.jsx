import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Find Help, Give Hope</h1>
          <p>Bridging the gap between those in need and available community resources, while empowering volunteers to make a meaningful impact.</p>
          <div className="hero-buttons">
            <Link to="/resources" className="btn-primary">Find Resources</Link>
            <Link to="/volunteer" className="btn-secondary">Volunteer Today</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;